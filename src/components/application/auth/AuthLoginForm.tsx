import { FC, useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import BaseFormInput from "../base/BaseFormInput";
import { Button, SubmitButton } from "../../general/Button";
import { errorParser, retrieveToken, storeToken } from "../../../lib/helper";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/router";

const defaultPayload = {
  email: "",
  password: "",
};

const AuthLoginForm: FC = () => {
  const [payload] = useState(defaultPayload);

  const router = useRouter();
  const handleLogin = async (values: any) => {
    let response;
    try {
      response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin-auth/login`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        storeToken("AUTH_TOKEN", response?.data.idToken);
        router.push({
          pathname: `/dashboard/blog`,
        });
        toast.success("login successfully!!! 🎉");
      }
    } catch (err: any) {
      toast.error(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
    return response;
  };

  const schema = Yup.object({
    email: Yup.string().email("Invalid Email Address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters")
      .required("Required"),
  });

  const onSubmit = async (values: { email: string; password: string }) => {
    // handle form submission here
    handleLogin(values);
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Formik
        enableReinitialize
        initialValues={payload}
        validationSchema={schema}
        onSubmit={async (values, { resetForm }) => {
          await onSubmit(values);
          resetForm();
        }}
      >
        {(formik) => {
          const { handleSubmit, values, errors, touched, handleChange } =
            formik;
          return (
            <form onSubmit={handleSubmit}>
              <BaseFormInput
                type="text"
                placeholder="Enter Your Email Address"
                name="email"
                label="Email Address"
                value={values.email}
                onChange={handleChange}
                error={errorParser(errors, touched, "email")}
              />
              <BaseFormInput
                type="password"
                placeholder="Enter Your Password"
                name="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                error={errorParser(errors, touched, "password")}
              />
              <SubmitButton
                type="submit"
                className="relative w-full bg-primary mt-4 py-3 px-4 rounded-lg btn-shadow text-white text-lg font-semibold hover:bg-secondary-900 duration-100 transition-all"
              >
                Login
              </SubmitButton>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AuthLoginForm;
