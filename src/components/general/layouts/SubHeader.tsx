import Link from "next/link";
import { FC } from "react";

const SubHeader: FC = () => {
  return (
    <div className="">
      <Link legacyBehavior href={"/telehealth"}>
        <a className="md:px-6 lg:px-3 hover:bg-gradient-600 hover:bg-clip-text text-transparent text-text-600 text-sm sm:text-base cursor-pointer transition-all">
          Telehealth
        </a>
      </Link>
      {/* <Link legacyBehavior href={"/SDT"}>
          <a className="md:px-6 lg:px-3 hover:text-primary hover:pb-2 hover:border-b border-primary text-text-600 text-sm sm:text-base transition-all">
            Blockchain
          </a>
        </Link>
        <Link legacyBehavior href={"/M2E"}>
          <a className="md:px-6 lg:px-3 hover:text-primary hover:pb-2 hover:border-b hover:border-1.5 border-primary text-text-600 text-sm sm:text-base transition-all">
            Move2Earn
          </a>
        </Link> */}
    </div>
  );
};

export default SubHeader;
