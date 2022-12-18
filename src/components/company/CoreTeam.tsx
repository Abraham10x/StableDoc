import Image from "next/image";
import { FC } from "react";

const CoreTeam: FC = () => {
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-32">
      <div className="flex flex-col gap-2">
        <h2 className="bg-gradient-600 bg-clip-text text-transparent-active font-bold text-5xl text-center">
          Meet our core team
        </h2>
        <p className="text-text-500 text-2xl text-center">
          Our goal is at the heart of all that we do. We make our clients
          happiness our sole priority.
        </p>
      </div>
    </div>
  );
};
export default CoreTeam;
