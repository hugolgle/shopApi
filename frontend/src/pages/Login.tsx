import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth.hook";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { useEffect } from "react";

const validationSchema = yup.object().shape({
  email: yup.string().email("Email invalide").required("Email requis"),
  password: yup.string().required("Mot de passe requis"),
});

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  const mutation = useMutation({
    mutationFn: (values: { email: string; password: string }) =>
      login(values.email, values.password),
    onSuccess: (res) => {
      if (res) {
        navigate("/");
      }
    },
    onError: (err) => {
      console.log("Une erreur est survenue");
      console.log(err);
    },
  });

  return (
    <section className="flex flex-col px-4 w-full items-center justify-center h-[60vh]">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold font-boldonse">Connexion</h1>
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
                className="border-none bg-background placeholder:text-muted-foreground"
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
                className="border-none bg-background placeholder:text-muted-foreground"
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
            <Button type="submit">Se connecter</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default Login;
