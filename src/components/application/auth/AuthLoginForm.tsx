import { FC, useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import BaseFormInput from "../base/BaseFormInput";
import { SubmitButton } from "../../general/Button";
import { errorParser } from "../../../lib/helper";
// import authQueries from "@lib/queries/auth";
import { Toaster } from "react-hot-toast";

const defaultPayload = {
  email: "",
  passkey: "",
};

const AuthLoginForm: FC = () => {
  const [payload] = useState(defaultPayload);
  // const [remember, setRemember] = useState(false);
  // const { mutate } = authQueries.login();

  const schema = Yup.object({
    email: Yup.string().email("Invalid Email Address").required("Required"),
    passkey: Yup.string()
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters")
      .required("Required"),
  });

  // const handleRemember = () => {
  //   setRemember(!remember);
  // };

  const onSubmit = async (values: { email: string; passkey: string }) => {
    // handle form submission here
    // mutate(values);
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
                placeholder="Password"
                name="passkey"
                label="Enter Your Password"
                value={values.passkey}
                onChange={handleChange}
                error={errorParser(errors, touched, "passkey")}
              />
              <SubmitButton
                type="submit"
                className="relative w-full bg-primary mt-4 py-3 px-4 rounded-lg btn-shadow text-white text-lg font-semibold hover:bg-green/80 transition-all"
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
