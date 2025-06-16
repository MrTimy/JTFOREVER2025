import { BridesmaidIcon, GroomIcon } from "../assets";

export interface SquadCardProps {
  name: string;
  content: string;
  image: string;
  gender: "male" | "female";
}

export default function SquadCard({
  name,
  content,
  image,
  gender,
}: SquadCardProps) {
  return (
    <div className="h-[409px] max-w-[291px] bg-white p-4 border border-[#ACACAC] rounded-t-[400px] rounded-b-3xl grid gap-2">
      <img src={image} alt={name} className="w-full h-[284px]" />
      <div className="flex items-center gap-2">
        {gender === "male" ? (
          <img src={GroomIcon} alt="groom" />
        ) : (
          <img src={BridesmaidIcon} alt="groom" />
        )}
        <p className="font-cairo text-base font-bold">{name}</p>
      </div>
      <p className="text-[13px] font-cairo text-[#868686]">{content}</p>
    </div>
  );
}
