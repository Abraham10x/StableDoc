/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoMdAdd } from "react-icons/io";
import {
  CalendarDaysIcon,
  PencilSquareIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { LinkButton } from "../general/Button";
import Card from "../general/Card";
import { useRouter } from "next/router";
import { storeToken } from "../../lib/helper";

const ViewBlog = () => {
  const router = useRouter();
  const handleRoute = (id: any, title: any) => {
    storeToken("title", title);
    storeToken("contractId", id);
    router.push({
      pathname: `/dashboard/editBlog/${id}`,
      // query: {
      //   id,
      // },
    });
  };
  return (
    <>
      <div className="px-5 sm:px-10 py-6 sticky top-0 shadow-sm z-10">
        <div className="flex flex-col sm:flex-row justify-between gap-y-4 align-middle">
          <div className="flex flex-col">
            <h1 className="text-3xl text-text-300 font-extrabold">View Blog</h1>
            <p className="text-base text-text-600">
              Welcome to StableDoc Admin Panel
            </p>
          </div>
          <LinkButton
            link="/dashboard/createBlog"
            className="bg-primary text-white flex items-center gap-x-4 px-4 py-3 h-fit rounded-lg"
          >
            <IoMdAdd className="h-5 w-5" />
            <p>Create Blog</p>
          </LinkButton>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-7 mt-10 sm:mt-20">
          <Card className="hover:bg-primary/10 cursor-pointer">
            {/* <a href={`/dashboard/legal-adviser/MonitoringExtra?id=${item.id}`}> */}
            <div
              className="flex flex-col"
              onClick={() => handleRoute(1, "Types of Diabetes")}
            >
              <div className="flex flex-row justify-between">
                <Image
                  src="/img/blog-images/diabeties.png"
                  alt="diabeties"
                  width={4000}
                  height={4000}
                />
              </div>
              <div className="p-5">
                <p className="text-xl font-extrabold">Types of Diabetes</p>
                <div className="flex flex-row justify-between align-middle mt-1.5">
                  <div className="flex flex-row gap-x-3 gap-y-4">
                    <div className="flex gap-2 justify-center">
                      <CalendarDaysIcon className="my-auto w-6 h-6" />
                      <p className="text-xs sm:text-sm font-bold my-auto">
                        Mar 27, 2023
                      </p>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <UserIcon className="my-auto w-6 h-6" />
                      <p className="text-xs sm:text-sm font-bold my-auto">
                        Queen Dare
                      </p>
                    </div>
                  </div>
                  <PencilSquareIcon className="my-auto w-6 h-6 text-[#00674C]" />
                </div>
              </div>
            </div>
            {/* </a> */}
          </Card>
        </div>
      </div>
    </>
  );
};

export default ViewBlog;
