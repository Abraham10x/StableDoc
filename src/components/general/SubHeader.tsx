import Link from "next/link";
import { FC } from "react";
import { IoChevronDown } from "react-icons/io5";

const SubHeader: FC = () => {
  return (
    <div className="bg-white">
      <div className="container px-10 pb-8 2xl:px-0 mx-auto flex flex-row justify-center mt-32 gap-8">
        <Link legacyBehavior href={"#"}>
          <a className="md:px-6 lg:px-3 hover:text-primary hover:pb-2 hover:border-b border-primary text-text-600 text-base">
            Telehealth
          </a>
        </Link>
        <Link legacyBehavior href={"#"}>
          <a className="md:px-6 lg:px-3 hover:text-primary hover:pb-2 hover:border-b border-primary text-text-600 text-base">
            Blockchain
          </a>
        </Link>
        <Link legacyBehavior href={"#"}>
          <a className="md:px-6 lg:px-3 hover:text-primary hover:pb-2 hover:border-b hover:border-1.5 border-primary text-text-600 text-base">
            Move2Earn
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SubHeader;
