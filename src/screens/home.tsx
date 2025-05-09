import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Weddingpicone, Weddingpictwo, Weddingpicthree } from "../assets";
import { WeddingAnnouncement } from "../components";

export default function Page() {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="h-[600px]">
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-[rgba(204,85,0,0.3)] z-10"></div>
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <WeddingAnnouncement />
            </div>
            <img
              src={Weddingpicone}
              alt="Weddingpicone"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-10"></div>
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <WeddingAnnouncement />
            </div>
            <img
              src={Weddingpictwo}
              alt="Weddingpictwo"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-10"></div>
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <WeddingAnnouncement />
            </div>
            <img
              src={Weddingpicthree}
              alt="Weddingpicthree"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Coming soon & love story */}
      <div>
        <div className="grid place-items-center">
          <h3>Comming soon!!!</h3>
        </div>
      </div>
    </div>
  );
}
