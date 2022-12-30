import Image from "next/image";
import { FC, useState } from "react";
import TeamCard from "./TeamCard";
import TeamData from "./TeamData";

const CoreTeam: FC = () => {
  const [desc, setDesc] = useState(TeamData);

  function addDesc(id: number) {
    setDesc((prev) => {
      return prev.map((square) => {
        return square.id === id
          ? { ...square, on: !square.on }
          : { ...square, on: true };
      });
    });
  }
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-32">
      <div className="flex flex-col gap-2" id="core-team">
        <h2 className="bg-gradient-600 bg-clip-text text-transparent-active font-bold text-5xl text-center">
          Meet our core team
        </h2>
        <p className="text-text-500 text-2xl text-center">
          Our goal is at the heart of all that we do. We make our clients
          happiness our sole priority.
        </p>
      </div>
      <div className="mt-9">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {desc.map((data, index) => (
            <TeamCard
              id={index}
              profile={data.imge}
              name={data.name}
              role={data.role}
              state={data.on}
              linkedin={data.LinkedIn}
              twitter={data.Twitter}
              description={data.description}
              handleClick={() => addDesc(data.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CoreTeam;
