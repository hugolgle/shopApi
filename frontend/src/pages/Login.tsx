import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth.hook";

const validationSchema = yup.object().shape({
  email: yup.string().email("Email invalide").required("Email requis"),
  password: yup.string().required("Mot de passe requis"),
});

function Login() {
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
    <section className="flex flex-col px-4 w-full items-center h-[60vh]">
      <div className="flex flex-col justify-center min-w-96 mt-20 w-1/3">
        <h1 className="font-boldonse">Connexion</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-y-4 mt-4"
        >
          <div>
            <label>Email :</label>
            <Input
              id="email"
              type="email"
              className="border-none bg-background"
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
              className="border-none bg-background"
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
      </div>
    </section>
  );
}

export default Login;
