import { Gradient, GroupGallery } from "../../assets";
import Button from "../button";

export default function CurvedGallery() {
  return (
    <div
      className="md:h-screen flex items-center py-12 md:py-0"
      style={{
        background: `url(${Gradient})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-web-max w-mobile-max mx-auto flex justify-center flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center z-10 ">
          <h2 className="text-6xl md:text-8xl font-lovers-quarrel text-white mb-8 drop-shadow">
            Our Guests Gallery
          </h2>
          <Button text="UPLOAD" className="text-burnt-orange! w-[204px]" />
        </div>
        <div>
          <img
            src={GroupGallery}
            alt="group"
            className="h-[550px] hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
