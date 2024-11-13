import clsx from "clsx";
import { FC } from "react";

export interface TeamCardProps {
  img: string;
  name: string;
  role: string;
  className?: string;
}

const TeamCard: FC<TeamCardProps> = ({ img, name, role, className }) => {
  return (
    <div className={clsx("team-card", className)}>
      <img className="team-card__img" src={img} alt="Team Card" />
      <p className="team-card__name">{name}</p>
      <p className="team-card__role">{role}</p>
    </div>
  );
};

export default TeamCard;
