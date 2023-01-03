import Image from "next/image";
import { FC } from "react";
import { LinkButton } from "../general/Button";

interface IProps {
  id: any;
  state: any;
  profile: any;
  name: any;
  role: any;
  description: any;
  handleClick: any;
  twitter?: any;
  linkedin?: any;
}

const TeamCard: FC<IProps> = ({
  profile,
  name,
  role,
  description,
  handleClick,
  twitter,
  linkedin,
  state,
  id,
}: IProps) => {
  return (
    <div key={id} className="mt-10 sm:mt-3 lg:mt-10 max-w-sm">
      <div
        className="bg-secondary-700 rounded-t-2xl relative"
        onMouseEnter={handleClick}
      >
        {!state ? (
          <div className="pt-4 sm:pt-8 pb-4 px-8 bg-team-gradient bg-opacity-20 absolute top-0 right-0 w-full h-full sm:max-h-80 xl:max-h-96 sm:overflow-y-scroll 2xl:overflow-hidden">
            <p className="text-sm sm:text-base font-medium text-text-600">
              {description}
            </p>
            <div className="flex flex-row gap-9 mt-2 sm:mt-8 justify-center">
              {linkedin && (
                <LinkButton link={linkedin} target="_blank">
                  <Image
                    src="/img/company/linkedin-icon.svg"
                    alt="linkedin logo"
                    width={50}
                    height={50}
                  />
                </LinkButton>
              )}
              {twitter && (
                <LinkButton link={twitter} target="_blank">
                  <Image
                    src="/img/company/twitter-icon.svg"
                    alt="twitter logo"
                    width={50}
                    height={50}
                  />
                </LinkButton>
              )}
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <Image src={profile} alt={name} width={380} height={380} />
      </div>
      <h3 className="text-primary font-medium text-lg sm:text-2xl lg:text-3xl mb-1 mt-4 lg:my-4 text-center">
        {name}
      </h3>
      <p className="text-text-600 text-base sm:text-xl lg::text-2xl font-normal sm:font-medium text-center">
        {role}
      </p>
    </div>
  );
};

export default TeamCard;
