/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { CalendarDaysIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { LinkButton } from "../general/Button";
import Card from "../general/Card";
import { useRouter } from "next/router";
import { readableDate, storeToken } from "../../lib/helper";
import axios from "axios";
import { Toaster } from "react-hot-toast";

const ViewBlog = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const getAllPost = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog-posts`
      );
      const apiResponse = response?.data;
      setData(apiResponse);
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getAllPost();
  }, []);

  const router = useRouter();
  const handleRoute = (id: any, title: any) => {
    storeToken("uId", id);
    router.push({
      pathname: `/dashboard/viewBlog/${id}`,
    });
  };

  return (
    <main>
      <Toaster position="top-right" reverseOrder={false} />
      <div className=" bg-dash-white px-5 sm:px-10 py-6">
        <div className="flex flex-col sm:flex-row justify-between gap-y-4 align-middle">
          <div className="flex flex-col">
            <h1 className="text-3xl text-text-300 font-extrabold">
              View All Blog
            </h1>
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
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-7 mt-10 sm:mt-20">
          {data.map((data: any, index: number) => (
            <Card key={index} className="hover:bg-primary/10 cursor-pointer">
              {/* <a href={`/dashboard/legal-adviser/MonitoringExtra?id=${item.id}`}> */}
              <div
                className="flex flex-col"
                onClick={() => handleRoute(data?.uid, data?.title)}
              >
                <div className="flex flex-row justify-between">
                  <img
                    className="w-full h-64 sm:h-56 object-cover"
                    src={data?.coverPhotoUrl}
                    alt={data?.title}
                  />
                </div>
                <div className="p-5">
                  <p className="text-xl font-extrabold">{data?.title}</p>
                  <div className="flex flex-row justify-between align-middle mt-1.5">
                    <div className="flex flex-row gap-x-3 gap-y-4">
                      <div className="flex gap-2 justify-center">
                        <CalendarDaysIcon className="my-auto w-6 h-6" />
                        <p className="text-xs sm:text-sm font-medium my-auto">
                          {readableDate(data?.createdAt)}
                        </p>
                      </div>
                      <div className="flex gap-1 justify-center">
                        <UserIcon className="my-auto w-6 h-6" />
                        <p className="text-xs sm:text-sm font-medium my-auto">
                          {data?.author?.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </a> */}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ViewBlog;
