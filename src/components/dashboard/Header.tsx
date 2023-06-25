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

const Header = () => {
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    router.push({
      pathname: `/dashboard/`,
    });
    toast.success("loged out successfully!!! 🎉");
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
            <Button
              onClick={logout}
              className="flex flex-row gap-3 text-red-600"
            >
              <IoLogOut className="w-10 h-10" />
              <p className="font-medium text-lg my-auto">Logout</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;