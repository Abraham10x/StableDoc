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
  RiYoutubeFill,
} from "react-icons/ri";

const SocialIcons: FC = () => {
  return (
    <div className="flex flex-row space-x-3 text-white justify-start mt-5">
      <Link
        href="https://web.facebook.com/profile.php?id=100090806510338"
        target="_blank"
      >
        <RiFacebookCircleFill size={25} />
      </Link>
      <Link href="https://www.instagram.com/stabledoc_" target="_blank">
        <RiInstagramFill size={25} />
      </Link>
      <Link href="https://twitter.com/realStabledoc?s=08" target="_blank">
        <RiTwitterFill size={25} />
      </Link>
      <Link
        href="https://www.linkedin.com/company/stabledoc/about/"
        target="_blank"
      >
        <RiLinkedinBoxFill size={25} />
      </Link>
      <Link href="https://wa.link/68246k" target="_blank">
        <RiWhatsappFill size={25} />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCLMxvinm7lbCLOOQV9oz24A "
        target="_blank"
      >
        <RiYoutubeFill size={25} />
      </Link>
    </div>
  );
};

export default SocialIcons;
