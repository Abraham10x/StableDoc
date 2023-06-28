import type { NextPage } from "next";
import Seo from "../../components/general/Seo";
import Header from "../../components/dashboard/Header";
import Hero from "../../components/post/Hero";
import MainBody from "../../components/dashboard/MainBody";
import { retrieveToken } from "../../lib/helper";
import { Button } from "../../components/general/Button";
import { IoPlaySkipBackCircleSharp } from "react-icons/io5";
import router from "next/router";

const preview: NextPage = () => {
  const postDetails = retrieveToken("createPost");
  return (
    <>
      <Seo templateTitle="preview Posts" />
      <Header />
      <div className="flex flex-col sm:flex-row justify-between gap-y-4 align-middle px-5 sm:px-28 py-6">
        <div className="flex flex-col">
          <h1 className="text-3xl text-text-300 font-extrabold">
            Preview Blog Post
          </h1>
          <p className="text-base text-text-600">
            Preview your post before posting.
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
      <Hero
        author={postDetails?.author}
        datePosted="Awaiting"
        title={postDetails?.title}
      />
      <MainBody
        blogImage={postDetails?.coverPhoto}
        body={postDetails?.content}
        summary={postDetails?.summary}
        title={postDetails?.title}
      />
    </>
  );
};
export default preview;
