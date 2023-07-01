/* eslint-disable @next/next/no-img-element */
// import authQueries from "@lib/queries/auth";
import React from "react";
import BaseFormInput from "../application/base/BaseFormInput";
import toast, { Toaster } from "react-hot-toast";
import { IoLogOut } from "react-icons/io5";
import Image from "next/image";
import { Button } from "../general/Button";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { retrieveToken } from "../../lib/helper";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const AUTH_TOKEN = retrieveToken("AUTH_TOKEN");
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    router.push({
      pathname: `/dashboard/`,
    });
    toast.success("loged out successfully!!! 🎉");
  };

  const handleResetPassword = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin-auth/send-password-reset-email`,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );
    if (response.status === 204) {
      toast.success("Reset password link sent to your email!!! 🎉");
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-white px-5 sm:px-10 py-6 sticky top-0 shadow-sm z-10">
        <div className="flex justify-between items-center">
          <div className="my-auto">
            <Link href="/dashboard/blog" className="cursor-pointer">
              <Image
                src="/img/brand-Identity.svg"
                alt="Logo"
                width={150}
                height={150}
                priority
              />
            </Link>
          </div>
          <div className="hidden lg:flex space-x-3 items-center">
            <BaseFormInput
              name="search"
              placeholder="Search"
              className="w-96 bg-gray-200"
            />
          </div>
          <div className="flex flex-row-reverse sm:flex-row sm:gap-6">
            <div className="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-default"
                className="hs-dropdown-toggle flex items-center text-sm font-medium text-gray-900 rounded-full cursor-pointer"
                type="button"
              >
                <div className="mr-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                  <img src="/img/auth/login.png" alt="Profile Picture" />
                </div>
                <div className="text-left">
                  <p className="text-sm sm:text-base">Admin</p>
                </div>
                <svg
                  className="w-4 h-4 mx-1.5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-48 sm:w-56 hidden z-50 mt-2 bg-white shadow-md rounded-lg py-1 px-1.5 sm:py-2 sm:px-2"
                aria-labelledby="hs-dropdown-default"
              >
                <Button
                  onClick={handleResetPassword}
                  className="flex flex-row gap-5 text-text-500 w-full"
                >
                  <ArrowPathIcon className="w-8 h-8" />
                  <p className="font-medium text-base my-auto">
                    Reset Password
                  </p>
                </Button>
                <Button
                  onClick={logout}
                  className="flex flex-row gap-5 text-text-500 mt-1 w-full"
                >
                  <IoLogOut className="w-8 h-8" />
                  <p className="font-medium text-base my-auto">Logout</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
