/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, SubmitButton } from "../general/Button";
import Card from "../general/Card";
import { useRouter } from "next/router";
import { IoPlaySkipBackCircleSharp } from "react-icons/io5";
import { errorParser } from "../../lib/helper";
import BaseFormInput from "../application/base/BaseFormInput";

const EditBlogForm = () => {
  const router = useRouter();
  const [coverPhoto, setCoverPhoto] = useState<any>();
  const defaultPayload = {
    title: "",
    summary: "",
    content: "",
    coverPhoto: coverPhoto ?? "",
  };

  const schema = Yup.object({
    title: Yup.string().required("Required"),
    summary: Yup.string().required("Required"),
    content: Yup.string().required("Required"),
    coverPhoto: Yup.string().required("Required"),
  });

  const onSubmit = async (values: {
    title: string;
    summary: string;
    content: string;
    coverPhoto: any;
  }) => {
    // handle form submission here
  };

  return (
    <>
      <div className="px-5 sm:px-10 py-6 sticky top-0 shadow-sm z-10">
        <div className="flex flex-col sm:flex-row justify-between gap-y-4 align-middle">
          <div className="flex flex-col">
            <h1 className="text-3xl text-text-300 font-extrabold">
              Edit Blog Post
            </h1>
            <p className="text-base text-text-600">
              Welcome to StableDoc Admin Panel
            </p>
          </div>
          <Button
            onClick={() => {
              router.back();
            }}
            className="bg-primary text-white flex items-center gap-x-4 px-4 py-3 h-fit rounded-lg"
          >
            <IoPlaySkipBackCircleSharp className="h-5 w-5" />
            <p>Back</p>
          </Button>
        </div>
        <Card className="mt-10 mb-8 sm:mb-14 sm:mt-20 p-10">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">Blog Content</h2>
            <p>Tell us more about your job</p>
          </div>
          <Formik
            enableReinitialize
            initialValues={defaultPayload}
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
                errors,
                touched,
                handleBlur,
                handleChange,
              } = formik;
              return (
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3">
                      <BaseFormInput
                        type="text"
                        label="Title"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errorParser(errors, touched, "title")}
                      />
                      <BaseFormInput
                        type="textarea"
                        label="Summary"
                        name="summary"
                        value={values.summary}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errorParser(errors, touched, "summary")}
                      />
                      <BaseFormInput
                        type="file"
                        label="Cover Image"
                        id="coverPhoto"
                        name="coverPhoto"
                        value={values.coverPhoto}
                      />
                      <BaseFormInput
                        name="content"
                        value={values.content}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex justify-start items-center gap-x-5 py-5 border-t">
                      <SubmitButton
                        type="submit"
                        className="bg-primary text-white py-2 px-5 rounded-md"
                      >
                        Submit
                      </SubmitButton>
                      <Button
                        className="border-[1px] border-outline-gray py-2 px-5 rounded-md"
                        onClick={() => {
                          router.back;
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              );
            }}
          </Formik>
        </Card>
      </div>
    </>
  );
};

export default EditBlogForm;
