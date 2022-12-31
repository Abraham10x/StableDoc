import Image from "next/image";
import { FC } from "react";
import { Button } from "./Button";

const AppStore: FC = () => {
  return (
    <div className="flex flex-row gap-6 justify-center my-6 sm:my-10 px-8 sm:px-0">
      <Button className="">
        <Image
          src="/img/partners/apple-store.svg"
          alt="apple-store"
          width={200}
          height={200}
        />
      </Button>
      <Button className="">
        <Image
          src="/img/partners/play-store.svg"
          alt="apple-store"
          width={200}
          height={200}
        />
      </Button>
    </div>
  );
};

export default AppStore;
