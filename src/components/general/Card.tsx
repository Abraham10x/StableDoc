import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: any;
  id?: any;
  onClick?: any;
}

const Card: FC<Props> = ({ children, className, id, onClick }: Props) => {
  return (
    <div
      className={` ${className} bg-white rounded-xl shadow-sm`}
      id={id}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
