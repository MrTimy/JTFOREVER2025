import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Weddingpicone, Weddingpictwo, Weddingpicthree } from "../assets";
import { CountdownTimer, WeddingAnnouncement } from "../components";

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
      <div className="grid gap-9 py-20 ">
        <div className="grid place-items-center mx-auto w-full gap-8">
          <h3 className="font-cairo text-3xl font-normal uppercase">
            Coming soon!!!
          </h3>
          <div className="h-0.5 w-1/4 bg-primary" />
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
}
