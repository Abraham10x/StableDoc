import { FC, useRef, useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { SubmitButton } from "./Button";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

const CTA: FC = () => {
  const form: any = useRef();
  const defaultPayload = {
    email: "",
  };
  const [payload] = useState(defaultPayload);

  const onSubmit = async (values: { email: string }) => {
    emailjs
      .sendForm(
        "service_6qi0hku",
        "template_sdyo9rc",
        form.current,
        "2zT5zo1hbPZAb8mE6"
      )
      .then(
        (result) => {
          toast.success("Your email has been added! 🎉", { duration: 5000 });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const schema = Yup.object({
    email: Yup.string().email("Invalid Email Address").required("Required"),
  });
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-14 mx-auto mt-4 sm:mt-10 mb-28">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="px-5 sm:pr-0 sm:pl-10 lg:px-20 py-8 sm:py-20 flex flex-col sm:flex-row gap-10 bg-primary rounded-xl sm:rounded-3xl relative h-96 sm:h-auto">
        <div className="flex flex-col pt-4 pb-9 z-20 sm:basis-[60%] lg:basis-auto">
          <h3 className="text-white font-bold font-sans text-xl sm:text-4xl">
            Subscribe to our newsletter
          </h3>
          <p className="text-base sm:text-lg text-white font-normal mt-2 sm:mt-4">
            Receive the latest news, and updates about stabledoc and our
            products
          </p>
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
                <div className="mt-8">
                  <form ref={form} onSubmit={handleSubmit}>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your email here"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                        className={`bg-gray-50 ${
                          errors.email != null
                            ? "focus:ring-[red] focus:border-[red] border-[red]"
                            : "focus:ring-primary focus:border-primary border-[#A9C5DE]"
                        } border border-[#A9C5DE] text-[#7889B2] shadow-sm text-sm sm:text-base rounded-full block w-full pl-5 pr-2.5 py-3.5`}
                      />
                      <SubmitButton
                        type="summit"
                        className="text-sm sm:text-lg font-medium bg-primary hover:bg-secondary-900 px-4 sm:px-8 py-2.5 sm:py-2 text-white absolute top-1.5 right-2 rounded-full"
                      >
                        Join Now
                      </SubmitButton>
                    </div>
                    {errors.email != null && (touched.email ?? false) && (
                      <p className="mt-2 text-sm text-red-600 error">
                        {errors.email}
                      </p>
                    )}
                  </form>
                </div>
              );
            }}
          </Formik>
        </div>
        <div className="absolute right-0 bottom-0 sm:relative sm:basis-[40%] lg:absolute">
          <Image
            src="/img/general/cta.svg"
            alt="newsletter image"
            width={540}
            height={540}
          />
        </div>
      </div>
    </div>
  );
};
export default CTA;
