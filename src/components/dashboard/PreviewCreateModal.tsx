/* eslint-disable array-callback-return */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { FC, useState } from "react";
import Modal from "../general/Modal";
import { retrieveToken } from "../../lib/helper";
import { Button } from "../general/Button";
import { IoPlaySkipBackCircleSharp } from "react-icons/io5";
import Hero from "../post/Hero";
import MainBody from "./MainBody";
interface IProps {
  showModal: boolean;
  setShowModal: any;
}

const PreviewCreateModal: FC<IProps> = ({
  showModal,
  setShowModal,
}: IProps) => {
  const blog = retrieveToken("createPost");
  return (
    <>
      <Modal
        label="Full Preview"
        showModal={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        className="w-[90%]"
      >
        <div className="flex flex-col sm:flex-row justify-between gap-y-4 align-middle px-5 sm:px-10 py-6">
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
              setShowModal(false);
            }}
            className="bg-primary text-white flex items-center gap-x-4 px-4 py-3 h-fit rounded-lg"
          >
            <IoPlaySkipBackCircleSharp className="h-5 w-5" />
            <p>Back</p>
          </Button>
        </div>
        <Hero
          author={blog?.author}
          datePosted="Awaiting"
          title={blog?.title}
          container="no-container"
        />
        <MainBody
          blogImage={blog?.coverPhoto}
          body={blog?.content}
          summary={blog?.summary}
          title={blog?.title}
        />
      </Modal>
    </>
  );
};

export default PreviewCreateModal;
