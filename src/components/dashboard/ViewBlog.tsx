/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import { Button } from "../general/Button";

const ViewBlog = () => {
  return (
    <>
      <div className="bg-white px-5 sm:px-10 py-6 sticky top-0 shadow-sm z-10">
        <div className="flex flex-col sm:flex-row justify-between gap-y-4 align-middle">
          <div className="flex flex-col">
            <h1 className="text-3xl text-text-300 font-extrabold">View Blog</h1>
            <p className="text-base text-text-600">
              Welcome to StableDoc Admin Panel
            </p>
          </div>
          <Button className="bg-primary text-white flex items-center gap-x-4 px-4 py-3 h-fit rounded-lg">
            <IoMdAdd className="h-5 w-5" />
            <p>Create Blog</p>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ViewBlog;
