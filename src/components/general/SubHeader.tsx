import Link from "next/link";
import { FC } from "react";

const SubHeader: FC = () => {
  return (
    <div className="bg-white">
      <div className="container px-10 pb-8 2xl:px-0 mx-auto flex flex-row justify-center mt-32 gap-8">
        <Link legacyBehavior href={"/"}>
          <a className="md:px-6 lg:px-3 hover:text-primary hover:pb-2 hover:border-b border-primary text-text-600 text-base transition-all">
            Telehealth
          </a>
        </Link>
        <Link legacyBehavior href={"/SDT"}>
          <a className="md:px-6 lg:px-3 hover:text-primary hover:pb-2 hover:border-b border-primary text-text-600 text-base transition-all">
            Blockchain
          </a>
        </Link>
        <Link legacyBehavior href={"/M2E"}>
          <a className="md:px-6 lg:px-3 hover:text-primary hover:pb-2 hover:border-b hover:border-1.5 border-primary text-text-600 text-base transition-all">
            Move2Earn
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SubHeader;
