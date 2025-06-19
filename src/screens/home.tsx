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
  WeddingImage1,
  WeddingImage2,
  WeddingImage3,
  WeddingImage4,
  WeddingImage5,
  WeddingImage6,
  WeddingImage7,
  WeddingImage8,
  WeddingImage9,
  WeddingImage10,
  WeddingImage11,
  LeftFlower,
  RightFlower,
  WeddingImage13,
  Sample,
} from "../assets";
import { CountdownTimer, WeddingAnnouncement } from "../components";
import { EventDetails } from "../constants/constant";
import Button from "../components/button";
import FAQ from "../components/ui/faq";
import CurvedGallery from "../components/ui/curvedgallery";
import SquadCard from "../components/squad-card";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ORDER_OF_EVENTS, ORDEROFPHOTOGRAPH } from "../routes";

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
      <div className="grid py-20">
        <div className="grid place-items-center mx-auto w-full gap-8">
          <h3 className="font-cairo text-3xl font-normal uppercase">
            Coming soon!!!
          </h3>
          <div className="h-0.5 w-1/4 bg-primary" />
          <CountdownTimer />
        </div>

        {/* Love story */}
        <div className="mt-16 grid gap-6" id="our-love-story">
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

        {/* Gallery */}
        <div className="mx-auto pt-32 grid gap-10" id="our-gallery">
          {" "}
          <h1 className="text-7xl text-center font-normal font-lovers-quarrel">
            Our Gallery
          </h1>
          <div className="mx-auto grid max-w-[1200px] bg-white p-2">
            <div className="grid grid-cols-12 gap-2">
              {/* Top row */}
              <div className="col-span-4">
                <img
                  src={WeddingImage1}
                  alt="wedding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5">
                <img
                  src={WeddingImage2}
                  alt="wedding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-3">
                <img
                  src={WeddingImage3}
                  alt="wedding"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle row */}
              <div className="col-span-4 row-span-2">
                <img
                  src={WeddingImage4}
                  alt="wedding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-3">
                <img
                  src={WeddingImage5}
                  alt="wedding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5 row-span-2">
                <img
                  src={WeddingImage6}
                  alt="wedding"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Lower middle */}
              <div className="col-span-3 row-span-2">
                <img
                  src={WeddingImage7}
                  alt="wedding"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom row */}
              <div className="col-span-4">
                <img
                  src={WeddingImage8}
                  alt="wedding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5">
                <img
                  src={WeddingImage9}
                  alt="wedding"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="mx-auto pt-32 grid gap-10  max-w-web-max w-mobile-max">
          <h1 className="text-7xl text-center font-normal font-lovers-quarrel">
            Event Details
          </h1>
          <div className="grid md:grid-cols-3 gap-5">
            {EventDetails.map(({ title, desc, date, venue, wear }, idx) => (
              <div
                className="border border-burnt-orange p-3 grid gap-8"
                key={idx}
              >
                <img src={WeddingImage10} alt="" />
                <h1 className="text-6xl font-lovers-quarrel">{title}</h1>
                <p className="text-xl font-normal font-cairo text-primary">
                  {desc}
                </p>
                <p className="text-xl font-semibold text-[rgba(0, 0, 0, 0.2)] font-cairo">
                  {date}
                </p>
                <p className="text-xl font-semibold text-[rgba(0, 0, 0, 0.2)] font-cairo">
                  {venue}
                </p>
                <p className="text-xl font-semibold text-[rgba(0, 0, 0, 0.2)] font-cairo">
                  {wear}
                </p>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-burnt-orange w-full text-white p-2.5 h-14 flex items-center justify-center font-cairo font-semibold rounded-lg"
                >
                  MAPS.GOOGLE.COM
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* RSVP */}
        <div
          className="grid place-items-center h-[644px] mt-20"
          style={{
            background: `url(${WeddingImage11})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="grid gap-5 text-center">
            <h1 className="font-lovers-quarrel font-light text-white text-7xl">
              We can’t wait to see you!
            </h1>
            <p className="text-2xl font-cairo font-medium text-white">
              Please tell us if you will be able to come
            </p>
            <Button
              text="RSVP"
              variants={"secondary"}
              className="w-[165px] mx-auto mt-12"
            />
          </div>
        </div>

        {/* BridesMaid & Groomsmen */}
        <div className="py-8">
          <div className="mx-auto max-w-web-max w-mobile-max">
            <div className="flex items-center justify-center font-lovers-quarrel text-5xl md:text-7xl pt-5 font-normal">
              <img src={LeftFlower} alt="" />
              The Squad
              <img src={RightFlower} alt="" />
            </div>

            <div className="grid md:grid-cols-3 md:gap-20 gap-5 max-w-[1034px] place-items-center mx-auto mt-6">
              <SquadCard
                name="Cynthia James"
                content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
                gender="female"
                image={Sample}
              />
              <SquadCard
                name="Cynthia James"
                content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
                gender="female"
                image={Sample}
              />
              <SquadCard
                name="Cynthia James"
                content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
                gender="female"
                image={Sample}
              />
            </div>
            <Link to={"/squad"}>
              <button className="w-[165px] items-center gap-1 p-[10px] min-h-12 mx-auto mt-12 bg-burnt-orange rounded-full text-white font-cairo flex justify-center cursor-pointer">
                See more <ArrowRight />
              </button>
            </Link>
          </div>
        </div>

        {/* Order of Events */}
        <div
          className="grid place-items-center gap-16 min-h-[742px] py-28 pt-20"
          style={{
            background: `url(${WeddingImage13})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="grid gap-5 text-center">
            <h1 className="font-lovers-quarrel font-light text-white text-7xl">
              Order of Photography
            </h1>
            <p className="text-2xl font-cairo font-medium text-white">
              Be our guest on the Red Carpet
            </p>
            <Link to={ORDEROFPHOTOGRAPH}>
              <Button
                text="View"
                variants={"secondary"}
                className="w-[135px] mx-auto"
              />
            </Link>
          </div>
          <div className="grid gap-5 text-center">
            <h1 className="font-lovers-quarrel font-light text-white text-7xl">
              Programme of Event
            </h1>
            <Link to={ORDER_OF_EVENTS}>
              <Button
                text="View"
                variants={"secondary"}
                className="w-[135px] mx-auto"
              />
            </Link>
          </div>
        </div>

        {/* We're getting Married */}
        <div className="bg-beige flex justify-center flex-col items-center gap-9.5 min-h-[500px] py-28">
          <h1 className="font-lovers-quarrel text-5xl md:text-7xl font-normal">
            Gifts
          </h1>
          <p className="text-primary font-cairo text-2xl max-w-[621px] text-center">
            "We're so excited to celebrate our wedding day with you! Your
            presence is truly the greatest gift we could ask for. We would be
            incredibly grateful if you wish to honour us with a gift. More than
            anything, we can't wait to share this special moment with you. Check
            out our Gift Registry
          </p>
          <Button
            text="OUR WISHLIST"
            variants={"primary"}
            className="w-[258px] h-14"
          />
        </div>

        {/* Guests Gallery */}
        <CurvedGallery />

        {/* FAQ */}
        <FAQ />
      </div>
    </div>
  );
}
