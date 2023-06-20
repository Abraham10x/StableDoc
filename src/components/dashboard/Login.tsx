import { FC } from "react";
import AuthLoginForm from "../application/auth/AuthLoginForm";
import Image from "next/image";

const Login: FC = () => {
  return (
    <main>
      <div className="flex flex-col-reverse sm:flex-row overflow-y-hidden bg-[#F0F5FF]">
        <div className="basis-1/2 h-screen overflow-y-scroll sm:overflow-y-hidden">
          <div className=" relative w-[85%] sm:w-full lg:w-4/5 xl:w-8/12 sm:p-8 my-7 mx-auto h-auto">
            <div className="relative z-20">
              <div className=" mx-auto py-[40px] xl:py-[90px] 2xl:py-[165px]">
                <h2 className="text-[2rem] text-gray-900 font-extrabold font-sans mb-4 text-center">
                  LOGIN
                </h2>
                <div className="bg-white rounded-xl border-2 border-[#A9C5DE] px-5 lg:px-10 py-8 lg:py-14">
                  <AuthLoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-auth bg-primary relative bg-no-repeat h-auto bg-cover basis-1/2 sm:pb-0 p-10 2xl:px-20">
          <div className="flex flex-col gap-4">
            <Image
              className="hidden sm:block"
              src="/img/dashboard/login/auth.png"
              alt="chart illustration"
              width={5000}
              height={5000}
            />
            <div className="text-center flex flex-col gap-2 text-white">
              <h2 className="text-lg sm:text-xl xl:text-3xl font-bold gap-4">
                Login To The StableDoc Admin Panel
              </h2>
              <p className="text-base sm:text-lg xl:text-xl">
                Change content once and it will update everywhere. Where it id
                needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
