/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsStopwatch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Button } from "../../../components/general/Button";
import Header from "../../../components/dashboard/Header";
import Seo from "../../../components/general/Seo";
import Main from "../../../components/post/Main";
import Link from "next/link";
import { readableDate, retrieveToken } from "../../../lib/helper";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import MainBody from "../../../components/dashboard/MainBody";

const ViewBlog = () => {
  const uId = retrieveToken("uId");
  const AUTH_TOKEN = retrieveToken("AUTH_TOKEN");
  const [post, setPost] = useState<any>();

  useEffect(() => {
    const getSingleBlog = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog-posts/${uId}`
      );
      const data = response?.data;
      setPost(data);
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getSingleBlog();
  }, []);
  const deletePost = async () => {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog-posts/${uId}`,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );
    if (response.status === 204) {
      toast.success("Blog Post Deleted Successfully!!! 🎉");
      router.push({
        pathname: `/dashboard/blog/`,
      });
    }
  };
  const router = useRouter();
  const handleRoute = (id: any) => {
    router.push({
      pathname: `/dashboard/editBlog/${id}`,
      // query: {
      //   id,
      // },
    });
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Seo templateTitle="Benefits Of Drinking Water: How Much Do You Need In A Day?" />
      <Header />
      <div className="container pt-12 px-5 sm:px-10 sm:pb-8 2xl:px-0 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 bg-opacity-10 gap-y-24 gap-x-14 px-5 sm:px-16 py-12 rounded-3xl">
          <div className="flex flex-col justify-between h-full basis-full my-auto">
            <div className="flex flex-row justify-start gap-5">
              <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl bg-gradient-600 bg-clip-text text-transparent-active">
                {post?.title}
              </h1>
            </div>
            <div className="flex flex-col xl:flex-row gap-4 sm:gap-x-10 mt-9 align-middle">
              <div className="flex flex-col sm:flex-row gap-y-3 gap-x-5">
                <div className="flex flex-row gap-2 sm:gap-3 lg:gap-5 my-auto">
                  <BsStopwatch className="text-text-500 text-base sm:text-xl lg:text-2xl" />
                  <p className="text-sm sm:text-lg lg:text-2xl text-text-500">
                    {readableDate(post?.createdAt)}
                  </p>
                </div>
                <div className="flex flex-row gap-2 sm:gap-3 lg:gap-5 my-auto">
                  <BiUser className="text-text-500 text-base sm:text-xl lg:text-2xl" />
                  <p className="text-sm sm:text-lg lg:text-2xl text-text-500">
                    {post?.author?.name}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-y-3 gap-x-5">
                <Button
                  onClick={() => {
                    handleRoute(uId);
                  }}
                  className="bg-primary px-4 py-2 flex flex-row gap-2 sm:gap-3 lg:gap-5 rounded-lg hover:bg-secondary-900 duration-100 w-fit"
                >
                  <PencilSquareIcon className="text-white my-auto w-6 h-6" />
                  <p className="text-sm sm:text-lg lg:text-xl text-white">
                    Edit Post
                  </p>
                </Button>
                <Button
                  onClick={() => {
                    deletePost();
                  }}
                  className="bg-red-500 px-4 py-2 flex flex-row gap-2 sm:gap-3 lg:gap-5 rounded-lg hover:bg-secondary-900 duration-100 w-fit"
                >
                  <TrashIcon className="text-white my-auto w-6 h-6" />
                  <p className="text-sm sm:text-lg lg:text-xl text-white">
                    Delete Post
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainBody
        blogImage={post?.coverPhotoUrl}
        title={post?.title}
        summary={post?.summary}
        body={post?.content}
      />
    </>
  );
};

export default ViewBlog;
