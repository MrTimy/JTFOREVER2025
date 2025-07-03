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
  Philip,
  Doris,
  Ifeanyi,
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
    title: "Our First Meet",
    timeline: "Drums rolling🥁🥁",
    description:
      "Janice: We were in the same congregation while in school. We knew each other, though from a distance. Our first picture together was after a Memorial observance- no butterflies, no sparks, just two people who loved Jehovah and shared mutual friends. Sometimes, we would walk together in the ministry. It was in one of those moments we found out Timothy shared the same names and initials as my dad, we had meaningful conversations that subtly planted the seeds of something deeper, neither of us knew it yet.",
    img: FirstMeet,
    position: "left",
  },
  {
    title: "Our Friendship",
    timeline: "The Part we both Liked 😍😍",
    description:
      "Timothy: What started as friendly waves and occasional check-ins soon grew into friendship. We texted, exchanged calls often, during the holidays we would keep up with each other, encourage each other to study, go out in service, and talk about parts in the meetings we both enjoyed. Still, everything remained simply platonic. But in hindsight, something warm and comforting was already building- quietly, beautifully, without pressure.",
    img: FirstDate,
    position: "right",
  },
  {
    title: "Growing Together",
    timeline: "The Love Story 💕💕",
    description:
      "Timothy: The pandemic changed many things, but for us, it brought us closer. With more time at home, our conversations became more frequent, more intentional, and much sweeter. We talked about everything, family, goals, experiences at the ministry, articles we enjoyed reading, plans for the future, we would talk for hours. But what really brought us closer was when she lost her dad. Janice: Timothy was really present- he encouraged me, prayed with me, I never felt alone. I think that was when we both realized what started as a friendship had blossomed into something beautiful. We both wanted partners that loved Jehovah and it just seemed right at the time. Although we were miles apart, we were closer than ever. Daily calls, endless chats, laughter, support, we were growing fast.Timothy: When we finally reunited in school and had our first official date, everything fell in place. ",
    img: MarriageProposal,
    position: "left",
  },
  {
    title: "The Perfect Proposal",
    timeline: "Cue the music and hold your breath 💍💍",
    description:
      "Janice: Definitely, it was not always a smooth ride, we had our ups and downs but we were in this fully, deeply. But through every twist and turn, one thing stayed consistent, we wanted each other other as partners and we kept growing together.Timothy: And the proposal? Oh, she didn’t see it coming. It was everything we had hoped for calm, beautifully planned, and truly us.From that unforgettable moment to our engagement party with our friends, every step has brought us closer to our marriage.This is not just a new chapter, but a continuation of our beautiful journey, now, under the same roof, side by side, forever.",
    img: Engagement,
    position: "right",
  },
];

export default function Page() {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="h-[600px]"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
      >
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
            Count Down!!!
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
                        <h2 className="text-7xl font-normal font-lovers-quarrel">
                          {title}
                        </h2>
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
                  href="https://www.google.com/maps/place/3J's+Hotels+%26+Apartments/@9.0735252,7.434917,17z/data=!4m10!3m9!1s0x104e750fcb20c143:0xedd8b612f838b8a4!5m3!1s2025-07-01!4m1!1i2!8m2!3d9.0735252!4d7.434917!16s%2Fg%2F11hdvkv4_5?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-burnt-orange w-full text-white p-2.5 h-14 flex items-center justify-center font-cairo font-semibold rounded-lg"
                >
                  MAP DIRECTIONS
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
            <Link to="/rsvp">
              <Button
                text="RSVP"
                variants={"secondary"}
                className="w-[165px] mx-auto mt-12"
              />
            </Link>
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
                name="Philip"
                content="My friend, my brother Timy took a big bold decision to form a team, to be well complemented and helped to conquer and make more giant strides in life. Well done my guy.  
             
             As single brothers back then, we worked side by side in the ministry winning soul for the Lord zealously and eloquently. As my roommates, back then in the BQ, we lived peacefully, a glimpse of how peaceful we will enjoy living together in paradise. Nothing do you my guy.
             
             I was super excited when it became official that it was Jayy. Then I knew I had done a good job behind the scenes of warming the feets against it becoming cold feet at its early stages, reassured when doubts crippled in. Jayy was indeed a fitted companion. She is an 'A1' grade material. Don't ask me how I know. I just know, I know. 
             Jayy and Timy are my people. They are both spiritual, articulated, educated, insightful and friendly. This was the right choice. Last Last We Go Dey Alright.
             "
                gender="male"
                image={Philip}
              />
              <SquadCard
                name=" DORIS (Maid of Honour)"
                content="I was there when the JT_Lovestory began. I watched it grow from “getting to know you” to “can’t go a day without speaking to you,” and now to, “let’s do this forever.” I couldn't be happier that you, my dearest Ada, found your person. (Thought it would always be me but, oh well..) 
              Just like the sun was made to shine and the stars were made to light the sky, you were made for each other. I wish you both the most beautiful life together. 
              Here’s to a bond built on friendship, driven by true love, and sealed by Jehovah.
              It’s Jayy and Tee forever!
              With love,
              Nwa."
                gender="female"
                image={Doris}
              />
              <SquadCard
                name="Ifeanyi"
                content="To Timothy My Friend, My Brother, My Day One
              As you prepare to walk down the aisle this August, I’ve found myself reflecting deeply on the journey we’ve shared over the last eight years. It’s hard to believe how far we’ve come from two young students navigating the chaos of university life, to this moment of maturity, commitment, and love.
              You were my very first friend in university. In a place where everything was new and unfamiliar, your friendship felt like home. From day one, we connected over books, late-night classes, laughter, and mutual dreams. You weren’t just my friend; you became my reading partner, my night class buddy, and one of the few people who truly believed in me when things got tough.
              There’s something about studying with you that always makes learning easier. You had this way of explaining things, making sense out of confusion. Whether we were buried in textbooks or sneaking in jokes between chapters, you made studying feel like less of a chore and more of a shared mission. You encouraged me in ways that stuck. You always believed I could do more, be more and I’ll never forget that.
              You’re the perfect mix of bad and good, the kind of bad that made life fun, spontaneous, and exciting, and the kind of good that made you dependable, honest, and principled. You were funny, always ready with a sarcastic comment or a perfectly timed joke. But beyond the laughter, you were also deeply disciplined. You knew when it was time to play, and when it was time to work. And I admired you for that balance. Oh, the memories we made. From sneaking away to the pool to cool off after long lectures, to laughing until our stomachs hurt. From sharing stress during exams to celebrating small victories with snacks and night walks. Our university days were golden, filled with a rhythm that only we understood. The blend of study and fun, of focus and freedom, made it all unforgettable. Those days were some of the best of my life, and you were a huge part of that. Now, as you step into this new chapter of your life, I just want to say how proud I am of the man you’ve become. Love is no small thing, and marriage is one of the bravest, most beautiful commitments a person can make. Your bride is lucky she’s getting someone who’s loyal, thoughtful, strong, and real. 
              Timothy, may your marriage be filled with laughter as loud as our night class jokes, support as strong as our study bond, and love as deep as the friendship we built over these amazing years. I’m so grateful for everything we’ve shared and all that lies ahead for you. Cheers to love, to beginnings, and to a lifetime of sweet memories yet to be made. Congratulations, my dear friend. You deserve all the happiness in the world.
              With all my heart,
              IFEANYI aka HYBRID ✨
              "
                gender="male"
                image={Ifeanyi}
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
          <Link to="/gift-registry">
            <Button
              text="OUR WISHLIST"
              variants={"primary"}
              className="w-[258px] h-14"
            />
          </Link>
        </div>

        {/* Guests Gallery */}
        <CurvedGallery />

        {/* FAQ */}
        <FAQ />
      </div>
    </div>
  );
}
