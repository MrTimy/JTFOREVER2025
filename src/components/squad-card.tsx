import { useState } from "react";
import { BridesmaidIcon, GroomIcon } from "../assets";
import Modal from "./modal";

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
  const [showModal, setShowModal] = useState(false);

  const truncated =
    content.length > 100 ? content.slice(0, 100) + "..." : content;

  return (
    <>
      <div className="md:h-[409px] max-w-[291px] bg-white p-4 border border-[#ACACAC] rounded-t-[400px] rounded-b-3xl grid gap-2">
        <img
          src={image}
          alt={name}
          className="w-full h-[284px] rounded-t-full object-cover"
        />
        <div className="flex items-center gap-2">
          {gender === "male" ? (
            <img src={GroomIcon} alt="groom" />
          ) : (
            <img src={BridesmaidIcon} alt="bridesmaid" />
          )}
          <p className="font-cairo text-base font-bold">{name}</p>
        </div>
        <p className="text-[13px] font-cairo text-[#868686]">
          {truncated}
          {content.length > 100 && (
            <button
              onClick={() => setShowModal(true)}
              className="text-burnt-orange font-bold ml-1 underline text-sm cursor-pointer"
            >
              Read more
            </button>
          )}
        </p>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl font-semibold mb-4 font-cairo">{name}</h2>
        <p className="text-base text-gray-700 font-cairo">{content}</p>
        <div className="flex justify-end items-end">
          {" "}
          <button
            onClick={() => setShowModal(false)}
            className="mt-4 px-4 py-2 bg-burnt-orange text-white rounded hover:opacity-80 cursor-pointer"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
