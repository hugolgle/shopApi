import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthProvider";
import { AxiosError, HttpStatusCode } from "axios";
import { UserProfileForm } from "@/interface/userProfile.interface";
import { ROUTES } from "@/components/Routes";
import { toast } from "sonner";

const validationSchema = yup.object().shape({
  firstname: yup.string().required("Prénom requis"),
  lastname: yup.string().required("Nom requis"),
  address: yup.string().required("Adresse requise"),
  city: yup.string().required("Ville requise"),
  email: yup.string().email("Email invalide").required("Email requis"),
  password: yup.string().required("Mot de passe requis"),
});

function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { register } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      email: "",
      password: "",
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values: UserProfileForm) => {
      mutation.mutate(values);
    },
  });

  const mutation = useMutation({
    mutationFn: (values: UserProfileForm) => register(values),
    onSuccess: () => {
      navigate("/");
      toast.success("Inscription réussie !");
    },
    onError: (err: AxiosError) => {
      if (err.response && err.response.status === HttpStatusCode.Unauthorized) {
        toast.error("Identifiants ou mot de passe incorrects");
      } else {
        toast.error(
          "Impossible de procédér à la connexion. Merci de réessayer ultérieurement."
        );
      }
    },
  });

  return (
    <section className="flex flex-col px-4 w-full items-center h-[60vh]">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold font-boldonse">Inscription</h1>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-y-4 mt-4 w-lg"
          >
            <div className="flex gap-4">
              <div className="w-full">
                <label>Prénom :</label>
                <Input
                  id="firstname"
                  type="firstname"
                  className="border-none bg-background placeholder:text-muted-foreground"
                  {...formik.getFieldProps("firstname")}
                  placeholder="Votre prénom"
                  autoComplete="new-firstname"
                />
                {formik.touched.firstname && formik.errors.firstname && (
                  <p className="text-[10px] text-left flex items-start w-full text-red-500 pl-2 pt-2">
                    {formik.errors.firstname}
                  </p>
                )}
              </div>
              <div className="w-full">
                <label>Nom :</label>
                <Input
                  id="lastname"
                  type="lastname"
                  className="border-none bg-background placeholder:text-muted-foreground"
                  {...formik.getFieldProps("lastname")}
                  placeholder="Votre nom"
                  autoComplete="new-lastname"
                />
                {formik.touched.lastname && formik.errors.lastname && (
                  <p className="text-[10px] text-left flex items-start w-full text-red-500 pl-2 pt-2">
                    {formik.errors.lastname}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label>Adresse :</label>
              <Input
                id="address"
                type="address"
                className="border-none bg-background placeholder:text-muted-foreground"
                {...formik.getFieldProps("address")}
                placeholder="Votre adresse"
                autoComplete="new-address"
              />
              {formik.touched.address && formik.errors.address && (
                <p className="text-[10px] text-left flex items-start w-full text-red-500 pl-2 pt-2">
                  {formik.errors.address}
                </p>
              )}
            </div>
            <div>
              <label>Ville :</label>
              <Input
                id="city"
                type="city"
                className="border-none bg-background placeholder:text-muted-foreground"
                {...formik.getFieldProps("city")}
                placeholder="Votre ville"
                autoComplete="new-city"
              />
              {formik.touched.city && formik.errors.city && (
                <p className="text-[10px] text-left flex items-start w-full text-red-500 pl-2 pt-2">
                  {formik.errors.city}
                </p>
              )}
            </div>
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
            <Button type="submit">S'inscrire</Button>
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
                onClick={() => navigate(ROUTES.LOGIN)}
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

export default Register;
