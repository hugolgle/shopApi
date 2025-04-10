import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthProvider";
import { AxiosError, HttpStatusCode } from "axios";
import { ROUTES } from "@/components/Routes";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Loader from "@/components/ui/loader";

const validationSchema = yup.object().shape({
  email: yup.string().email("Email invalide").required("Email requis"),
  password: yup.string().required("Mot de passe requis"),
});

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      mutation.mutate(values);
      setIsLoading(true);
    },
  });

  const mutation = useMutation({
    mutationFn: (values: { email: string; password: string }) =>
      login(values.email, values.password),
    onSuccess: () => {
      toast.success("Connexion réussie");

      setTimeout(() => {
        setIsLoading(false);
        navigate(ROUTES.HOME);
      }, 1000);
    },
    onError: (err: AxiosError) => {
      if (err.response && err.response.status === HttpStatusCode.Unauthorized) {
        setTimeout(() => {
          setIsLoading(false);
          toast.error("Identifiants ou mot de passe incorrects");
        }, 1000);
      } else {
        toast.error(
          "Impossible de procédér à la connexion. Merci de réessayer ultérieurement."
        );
      }
    },
  });

  return (
    <section className="flex flex-col px-4 w-full items-center justify-center">
      <Card className="mt-20">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center">Connexion</h1>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-y-4 mt-4 w-lg"
          >
            <div>
              <label>Email :</label>
              <Input
                id="email"
                type="email"
                className="bg-background placeholder:text-muted-foreground"
                {...formik.getFieldProps("email")}
                placeholder="Votre e-mail"
                autoComplete="new-email"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-[10px] text-left flex items-start w-full text-red-500 pl-2 pt-2">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div>
              <label>Mot de passe :</label>
              <Input
                id="password"
                type="password"
                className=" bg-background placeholder:text-muted-foreground"
                {...formik.getFieldProps("password")}
                placeholder="Votre mot de passe"
                autoComplete="new-password"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-[10px] text-left flex items-start w-full text-red-500 pl-2 pt-2">
                  {formik.errors.password}
                </p>
              )}
            </div>
            <motion.div>
              <motion.button
                type="submit"
                initial={{ opacity: 1 }}
                animate={{
                  opacity: isLoading ? 0.5 : 1,
                  scale: isLoading ? 1.1 : 1,
                  transition: { duration: 0.3 },
                }}
                disabled={isLoading}
                className="w-full p-2 bg-foreground hover:bg-accent-foreground text-sm text-white rounded-md cursor-pointer"
              >
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    exit={{ x: 20 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Loader />
                    Chargement...
                  </motion.div>
                ) : (
                  "Se connecter"
                )}
              </motion.button>
            </motion.div>
          </form>
          <div className="flex items-center gap-2 my-4">
            <hr className="flex-grow border-border h-[1px]" />
            <p className="text-gray-400 text-xs">Ou</p>
            <hr className="flex-grow border-border h-[1px]" />
          </div>

          <div className="flex flex-col justify-center items-center mt-5 gap-2">
            <p className="text-xs">
              Nouveau sur Randoo ?{" "}
              <span
                className="text-gray-400 hover:underline cursor-pointer"
                onClick={() => navigate(ROUTES.REGISTER)}
              >
                Créer un compte Randoo !
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default Login;
