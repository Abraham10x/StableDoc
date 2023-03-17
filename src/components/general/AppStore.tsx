import Image from "next/image";
import { FC } from "react";
import { Button, LinkButton } from "./Button";

interface IProps {
  applestore: string;
  playstore: string;
}

const AppStore: FC<IProps> = ({ applestore, playstore }) => {
  return (
    <div className="flex flex-row gap-6 justify-center my-6 sm:my-10 px-8 sm:px-0">
      <LinkButton link={applestore} target="_blank" className="">
        <Image
          src="/img/partners/apple-store.svg"
          alt="apple-store"
          width={200}
          height={200}
        />
      </LinkButton>
      <LinkButton target="_blank" link={playstore} className="">
        <Image
          src="/img/partners/play-store.svg"
          alt="apple-store"
          width={200}
          height={200}
        />
      </LinkButton>
    </div>
  );
};

export default AppStore;
