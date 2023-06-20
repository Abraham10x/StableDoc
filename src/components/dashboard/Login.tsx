import { FC } from "react";
import AuthLoginForm from "../application/auth/AuthLoginForm";

const Login: FC = () => {
  return (
    <main>
      <div className="flex flex-col sm:flex-row overflow-y-hidden">
        <div className="bg-auth relative bg-no-repeat h-auto bg-cover basis-5/12 pb-20 sm:pb-0 p-10 2xl:px-20"></div>
        <div className="basis-7/12 h-screen overflow-y-scroll">
          <div className=" relative bg-white w-9/12 lg:w-8/12 2xl:w-7/12  sm:p-8 my-7 mx-auto h-auto">
            <div className="relative z-20">
              <div className=" mx-auto py-[90px] lg:py-[150px] xl:py-[90px] 2xl:py-[165px]">
                <h2 className="text-[2rem] text-gray-900 font-extrabold font-sans mb-8 text-center">
                  LOGIN
                </h2>
                <AuthLoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
