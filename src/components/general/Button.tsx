import Link from "next/link";
import { FC } from "react";

interface AppProps {
  children: React.ReactNode;
  className?: string;
  link?: string;
  type?: any;
  onClick?: any;
  target?: any;
}

export const Button: FC<AppProps> = ({
  children,
  className,
  onClick,
}: AppProps) => {
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <button type="button" className={` mt-0 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export const SubmitButton: FC<AppProps> = ({
  children,
  className,
  type,
  onClick,
}: AppProps) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export const LinkButton: FC<AppProps> = ({
  children,
  className,
  link,
  onClick,
  target,
}: AppProps) => {
  return (
    <Link href={link ?? "#"} target={target}>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
};
