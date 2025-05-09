import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  Weddingpicone,
  Weddingpictwo,
  Weddingpicthree,
  MiniFlower,
  FirstMeet,
  Rule,
  FirstDate,
  MarriageProposal,
  Engagement,
  StoryFlowerOne,
  StoryFlowerTwo,
} from "../assets";
import { CountdownTimer, WeddingAnnouncement } from "../components";

const loveStory: {
  title: string;
  timeline: string;
  description: string;
  img: string;
  position?: "left" | "right";
}[] = [
  {
    title: "Our Fist Meet",
    timeline: "Monday January 11th, 2019",
    description:
      "It all began with a simple moment—unexpected, yet unforgettable. Whether it was fate, coincidence, or a little bit of both, that day marked the beginning of everything. From strangers to something so much more, our journey started right there.",
    img: FirstMeet,
    position: "left",
  },
  {
    title: "Our First Date",
    timeline: "Saturday January 18th, 2019",
    description:
      "Nervous smiles, curious hearts, and that undeniable spark—our first date was the moment everything started to feel real. From the laughter we shared to the way time flew by, it was the beginning of something beautiful.",
    img: FirstDate,
    position: "right",
  },
  {
    title: "Marriage Proposal",
    timeline: "Friday January 18th, 2024",
    description:
      "A question from the heart, a promise for a lifetime. In a moment filled with love, emotion, and happy tears, one simple “yes” changed everything. It was the start of forever, wrapped in love and sealed with a ring.",
    img: MarriageProposal,
    position: "left",
  },
  {
    title: "Our Engagement",
    timeline: "Wednesday December 29th, 2024",
    description:
      "A celebration of love, commitment, and the beautiful journey ahead. Surrounded by joy and the people we love, our engagement marked the moment we officially said, “We’re in this together—forever.",
    img: Engagement,
    position: "right",
  },
];

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

        {/* Love story */}
        <div className="mt-16 grid gap-6">
          <div className="flex justify-center items-center gap-2 lg:gap-3 font-lovers-quarrel font-light text-6xl lg:text-7xl">
            Our <img src={MiniFlower} alt="MiniFlower" /> Love{" "}
            <img src={MiniFlower} alt="MiniFlower" /> Story
          </div>
          <div className="grid lg:gap-36 gap-7 place-items-center relative">
            {loveStory.map(
              ({ title, timeline, description, img, position }, idx) => (
                <div className="z-60">
                  {position === "left" ? (
                    <div
                      key={idx}
                      className="flex flex-col items-center lg:flex-row lg:gap-24 gap-12"
                    >
                      <div className="grid gap-2 max-w-[384px]">
                        <h1 className="text-7xl font-normal font-lovers-quarrel">
                          {title}
                        </h1>
                        <h2 className="text-lg lg:text-2xl font-normal font-cairo">
                          {timeline}
                        </h2>
                        <p className="text-lg lg:text-2xl font-normal font-cairo text-primary">
                          {description}
                        </p>
                      </div>
                      <div className="border border-[#868686] rounded-full p-2">
                        <img
                          src={img}
                          alt={title}
                          className="w-[320px] h-[320px] rounded-full"
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      key={idx}
                      className="flex flex-col-reverse items-center lg:flex-row lg:gap-24 gap-12"
                    >
                      <div className="border border-[#868686] rounded-full p-2">
                        <img
                          src={img}
                          alt={title}
                          className="w-[320px] h-[320px] rounded-full"
                        />
                      </div>
                      <div className="grid gap-2 max-w-[384px]">
                        <h1 className="text-7xl font-normal font-lovers-quarrel">
                          {title}
                        </h1>
                        <h2 className="text-lg lg:text-2xl font-normal font-cairo">
                          {timeline}
                        </h2>
                        <p className="text-lg lg:text-2xl font-normal font-cairo text-primary">
                          {description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
            <div className="hidden md:block lg:absolute -top-10 lg:-top-0">
              <img src={Rule} alt="Rule" />
            </div>
            <img
              src={StoryFlowerOne}
              alt=""
              className="absolute left-0 top-100"
            />
            <img
              src={StoryFlowerTwo}
              alt=""
              className="absolute -right-0 bottom-[200]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
