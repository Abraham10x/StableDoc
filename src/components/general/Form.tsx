import Image from "next/image";
import * as Yup from "yup";
import { Formik } from "formik";
import { FC, useRef, useState } from "react";
import { SubmitButton } from "./Button";
import emailjs from "@emailjs/browser";

const Form: FC = () => {
  const form: any = useRef();
  const [success, setSuccess] = useState("");

  const defaultPayload = {
    fullname: "",
    email: "",
    message: "",
  };

  const [payload] = useState(defaultPayload);

  const onSubmit = async (values: {
    fullname: string;
    email: string;
    message: string;
  }) => {
    emailjs
      .sendForm(
        "service_6qi0hku",
        "template_q19b3jd",
        form.current,
        "2zT5zo1hbPZAb8mE6"
      )
      .then(
        (result) => {
          setSuccess(result.text);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const schema = Yup.object({
    fullname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Address").required("Required"),
    message: Yup.string().required("Required"),
  });
  return (
    <div className="bg-white rounded-lg py-5 px-3 sm:px-5 w-full lg:w-[40%]">
      {success ? (
        <div className="mb-6 px-1.5 sm:px-4 my-auto mt-40 flex flex-col justify-center align-middle gap-5">
          <svg
            className="flex-shrink-0 h-16 w-16 mx-auto"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
              fill="currentColor"
              className="fill-[green]"
            />
            <path
              d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
              fill="currentColor"
              className="fill-white"
            />
          </svg>
          <p className="text-black text-base sm:text-lg text-center">
            Thank you for your submission. We will get back to you as soon as
            possible.
          </p>
        </div>
      ) : (
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
            const {
              handleSubmit,
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
            } = formik;
            return (
              <form ref={form} onSubmit={handleSubmit}>
                <div className="flex flex-row gap-5">
                  <Image
                    src="/img/general/check-icon.svg"
                    alt="check-icon"
                    width={50}
                    height={50}
                  />
                  <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-base sm:text-2xl my-auto">
                    Contact Form
                  </h3>
                </div>
                <div className="mb-6 px-1.5 sm:px-4 mt-6">
                  <label
                    htmlFor="name-input"
                    className="block text-sm sm:text-base font-medium text-text-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    placeholder="Queen"
                    name="fullname"
                    value={values.fullname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`bg-gray-50 border ${
                      errors.fullname != null
                        ? "focus:ring-[red] focus:border-[red] border-[red]"
                        : "focus:ring-primary focus:border-primary border-[#A9C5DE]"
                    } border-[#A9C5DE] shadow-sm text-gray-900 text-sm sm:text-base rounded-md block w-full px-2.5 py-3`}
                  />
                  {errors.fullname != null && (touched.fullname ?? false) && (
                    <p className="mt-2 text-sm text-red-600 error">
                      {errors.fullname}
                    </p>
                  )}
                </div>
                <div className="mb-6 px-1.5 sm:px-4">
                  <label
                    htmlFor="email-input"
                    className="block text-sm sm:text-base font-medium text-text-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email-input"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="queen@gmail.com"
                    className={`bg-gray-50 border ${
                      errors.fullname != null
                        ? "focus:ring-[red] focus:border-[red] border-[red]"
                        : "focus:ring-primary focus:border-primary border-[#A9C5DE]"
                    } border-[#A9C5DE] shadow-sm text-gray-900 text-sm sm:text-base rounded-md block w-full px-2.5 py-3`}
                  />
                  {errors.email != null && (touched.email ?? false) && (
                    <p className="mt-2 text-sm text-red-600 error">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="mb-6 px-1.5 sm:px-4">
                  <label
                    htmlFor="message-input"
                    className="block text-sm sm:text-base font-medium text-text-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    value={values.message}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`bg-gray-50 ${
                      errors.message != null
                        ? "focus:ring-[red] focus:border-[red] border-[red]"
                        : "focus:ring-primary focus:border-primary border-[#A9C5DE]"
                    } border h-64 border-[#A9C5DE] text-[#7889B2] shadow-sm text-sm sm:text-base rounded-md focus:ring-secondary-600 focus:border-primary block w-full px-2.5 py-3`}
                  ></textarea>
                  {errors.message != null && (touched.message ?? false) && (
                    <p className="mt-2 text-sm text-red-600 error">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className="px-1.5 sm:px-4 mt-3">
                  <SubmitButton
                    type="submit"
                    className="w-full bg-primary hover:bg-secondary-900 py-4 text-white font-medium sm:font-semibold rounded text-sm sm:text-base"
                  >
                    {" "}
                    Send Message
                  </SubmitButton>
                </div>
              </form>
            );
          }}
        </Formik>
      )}
    </div>
  );
};
export default Form;
