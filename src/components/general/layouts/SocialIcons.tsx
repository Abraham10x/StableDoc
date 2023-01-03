import Link from "next/link";
import { FC } from "react";
import {
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiInstagramFill,
  RiMailAddFill,
  RiPhoneFill,
  RiWhatsappFill,
} from "react-icons/ri";

const SocialIcons: FC = () => {
  return (
    <div className="flex flex-row space-x-3 text-white justify-start mt-5">
      <Link href="https://www.facebook.com/myminervahub" target="_blank">
        <RiFacebookCircleFill size={25} />
      </Link>
      <Link href="https://www.instagram.com/myminervahub/" target="_blank">
        <RiInstagramFill size={25} />
      </Link>
      <Link href="https://twitter.com/myminervahub" target="_blank">
        <RiTwitterFill size={25} />
      </Link>
      <Link href="#" target="_blank">
        <RiLinkedinBoxFill size={25} />
      </Link>
    </div>
  );
};

export default SocialIcons;
