import { FC, useState } from "react";
import TeamCard from "./TeamCard";
import TeamData from "./TeamData";

const CoreTeam: FC = () => {
  const [desc, setDesc] = useState(TeamData);

  function handleEnter(id: number) {
    setDesc((prev) => {
      return prev.map((square) => {
        return square.id === id
          ? { ...square, on: !square.on }
          : { ...square, on: true };
      });
    });
  }

  function handleLeave(id: number) {
    setDesc((prev) => {
      return prev.map((square) => {
        return square.id === id ? { ...square, on: true } : { ...square };
      });
    });
  }
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-12 lg:mt-32">
      <div className="flex flex-col gap-2" id="core-team">
        <h2 className="capitalize bg-gradient-600 bg-clip-text text-transparent-active font-bold text-xl sm:text-3xl lg:text-5xl text-center">
          core team
        </h2>
        {/* <p className="text-text-500 text-[15px] sm:text-lg sm:w-4/5 mx-auto lg:text-2xl text-center">
          Our goal is at the heart of all that we do. We make our clients
          happiness our sole priority.
        </p> */}
      </div>
      <div className="mt-2 sm:mt-10 lg:mt-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-row xl:flex-wrap gap-0 sm:gap-8 lg:gap-12 xl:gap-x-20 justify-center">
          {desc.map((data, index) => (
            <TeamCard
              key={index}
              id={index}
              profile={data.imge}
              name={data.name}
              role={data.role}
              state={data.on}
              linkedin={data.LinkedIn}
              twitter={data.Twitter}
              description={data.description}
              handleEnter={() => handleEnter(data.id)}
              handleLeave={() => handleLeave(data.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CoreTeam;
