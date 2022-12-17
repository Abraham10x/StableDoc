import { FC } from "react";
import Link from "next/link";

interface LinkInfo {
  url: any;
  linkText: any;
}

interface IProps {
  header: any;
  data: LinkInfo[];
}

const FooterLinks: FC<IProps> = ({ header, data }: IProps) => {
  return (
    <div className="basis-full sm:basis-[25%] lg:basis-[16%]">
      <h4 className="mb-4 font-bold text-lg text-white font-sans">{header}</h4>
      <ul>
        {data.map((items, index) => (
          <li className="mb-2" key={index}>
            <Link legacyBehavior href={items.url}>
              <a className="hover:text-blue-light duration-500 text-base text-white font-medium">
                {items.linkText}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
