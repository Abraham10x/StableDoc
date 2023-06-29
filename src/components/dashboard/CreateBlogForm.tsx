/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Button, SubmitButton } from "../general/Button";
import Card from "../general/Card";
import { Router, useRouter } from "next/router";
import { IoPlaySkipBackCircleSharp } from "react-icons/io5";
import { errorParser, retrieveToken, storeToken } from "../../lib/helper";
import BaseFormInput from "../application/base/BaseFormInput";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import PreviewModal from "./PreviewModal";

const CreateBlogForm = () => {
  const AUTH_TOKEN = retrieveToken("AUTH_TOKEN");
  const postDetails = retrieveToken("createPost");
  const [showModal, setShowModal] = useState(false);
  let imageFile: File;
  const dataUrl = postDetails?.coverPhoto;
  useEffect(() => {
    fetch(dataUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], "cover-photo.png", { type: blob.type });
        imageFile = file;
      });
  }, []);

  const router = useRouter();
  const defaultPayload = {
    authorName: postDetails?.author ?? "",
    title: postDetails?.title ?? "",
    summary: postDetails?.summary ?? "",
    coverPhoto: [],
  };
  const [formvalues, setFormvalues] = useState(defaultPayload);
  const [content, setContent] = useState(postDetails?.content ?? "");
  const [formErrors, setFormErrors] = useState({});
  const [onSubmit, setonSubmit] = useState(false);

  const validate = (values: any) => {
    const errors = defaultPayload;
    if (!values.author) {
      errors.authorName = "Author is required !";
    }
    if (!values.title) {
      errors.title = "Title is required !";
    }
    if (!values.summary) {
      errors.summary = "Summary is required !";
    }
    return errors;
  };

  console.log(formvalues.coverPhoto);

  const convert = (file: any) => {
    let localImage;
    const reader = new FileReader();
    reader.onload = () => {
      localImage = reader.result;
    };
    reader.readAsDataURL(file);
    return localImage;
  };
  const handlePreview = () => {
    let localImage;
    if (postDetails?.coverPhoto) {
      localImage = convert(formvalues?.coverPhoto[0]);
    }
    setShowModal((prev) => !prev);
    storeToken("createPost", {
      author: formvalues.authorName,
      title: formvalues.title,
      summary: formvalues.summary,
      coverPhoto: localImage,
      content: content,
    });
  };

  const handlePost = async (event: any) => {
    event.preventDefault();
    setFormErrors(validate(formvalues));
    setonSubmit(true);
    const values = {
      authorName: formvalues.authorName,
      title: formvalues.title,
      summary: formvalues.summary,
      coverPhoto: imageFile ?? formvalues.coverPhoto[0],
      content: content,
    };
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog-posts`,
      values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );

    if (response.status === 201) {
      toast.success("Blog Created successfully!!! 🎉");
      router.push({
        pathname: `/dashboard/blog/`,
      });
      localStorage.removeItem("createPost");
    } else {
      toast.error("Unable to create post, try again!");
      event.target.reset();
    }
    return response;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && onSubmit) {
    }
  }, [formErrors]);

  // const onSubmit = async () => {
  //   // handle form submission here
  //   await handlePost();
  // };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="px-5 sm:px-10 py-6 top-0 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between gap-y-4 align-middle">
          <div className="flex flex-col">
            <h1 className="text-3xl text-text-300 font-extrabold">
              Create Blog Post
            </h1>
            <p className="text-base text-text-600">
              Welcome to StableDoc Admin Panel
            </p>
          </div>
          <Button
            onClick={() => {
              router.back();
            }}
            className="bg-primary hover:bg-secondary-900 duration-100 text-white flex items-center gap-x-4 px-4 py-3 h-fit rounded-lg"
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
          <div>
            <form onSubmit={handlePost}>
              <div className="flex flex-col gap-3">
                <BaseFormInput
                  type="text"
                  label="Author"
                  name="authotr"
                  value={formvalues.authorName}
                  onChange={(event: any) =>
                    setFormvalues({
                      ...formvalues,
                      authorName: event.target.value,
                    })
                  }
                />
                <BaseFormInput
                  type="text"
                  label="Title"
                  name="title"
                  value={formvalues.title}
                  onChange={(event: any) =>
                    setFormvalues({ ...formvalues, title: event.target.value })
                  }
                />
                <BaseFormInput
                  type="textarea"
                  label="Summary"
                  name="summary"
                  value={formvalues.summary}
                  onChange={(event: any) =>
                    setFormvalues({
                      ...formvalues,
                      summary: event.target.value,
                    })
                  }
                />
                <BaseFormInput
                  type="file"
                  label="Cover Image"
                  id="coverPhoto"
                  name="coverPhoto"
                  onChange={(event: any) =>
                    setFormvalues({
                      ...formvalues,
                      coverPhoto: event.target.files,
                    })
                  }
                />
                <BaseFormInput
                  name="content"
                  value={content}
                  onChange={setContent}
                />
              </div>
              <div className="flex justify-start items-center gap-x-5 py-5 border-t">
                <SubmitButton className="bg-primary hover:bg-secondary-900 duration-100 text-white py-2 px-5 rounded-md">
                  Submit
                </SubmitButton>
                <Button
                  onClick={() => {
                    handlePreview();
                  }}
                  className="bg-secondary-900 hover:bg-gray-500 duration-100 text-white py-2 px-5 rounded-md"
                >
                  Preview
                </Button>
                <Button
                  className="border-[1px] hover:bg-gray-300 duration-100 border-outline-gray py-2 px-5 rounded-md"
                  onClick={() => {
                    router.back();
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
      <PreviewModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default CreateBlogForm;
