import { RSVPBackground } from "../assets";
import Button from "../components/button";
import { useState } from "react";
import RSVPForm from "../components/ui/rsvp-form";
export default function Page() {
  const [rsvpType, setRsvpType] = useState("");
  const handleRsvpType = (type: string) => {
    setRsvpType(type);
  };

  return (
    <div
      className="min-h-screen grid place-items-center md:p-10"
      style={{
        backgroundImage: `url(${RSVPBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!rsvpType && (
        <div className="w-full md:max-w-[1240px] mx-auto min-h-[930px] md:p-14 p-4 md:px-36">
          <div className="text-center font-lovers-quarrel md:text-[93px] text-6xl md:leading-20">
            <p>RSVP</p>
          </div>
          <div className="bg-white max-w-[1240px] min-h-[320px] mt-24 p-4 grid gap-4 shadow-2xl">
            <div className="grid gap-4">
              <p className="font-cairo text-center text-2xl md:text-4xl font-light max-w-[1060px]">
                We look forward to celebrating with you! Please RSVP for
                yourself or for your family.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-4 text-xl md:text-3xl font-cairo font-light mx-auto">
              <p>Please fill out the form below</p>
              <div className="flex items-center flex-col md:flex-row gap-4 justify-center">
                <Button
                  text={"SINGLES"}
                  variants="secondary"
                  className="bg-burnt-orange text-white w-full md:w-auto"
                  onClick={() => handleRsvpType("singles")}
                />
                <Button
                  text={"FAMILY"}
                  variants="primary"
                  className="w-full md:w-auto"
                  onClick={() => handleRsvpType("family")}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {rsvpType && <RSVPForm rsvpType={rsvpType} />}
    </div>
  );
}
