import { useEffect } from "react";
import {
  Blossom,
  Doris,
  Ifeanyi,
  Jasmine,
  Jonathan,
  LeftFlower,
  Bright,
  Bethel,
  ThankGod,
  Peace,
  Obed,
  Philip,
  Praise,
  RightFlower,
  Samcusta,
  Sharon,
  Sylviana,
  Wemimo,
} from "../assets";
import SquadCard from "../components/squad-card";
import { Fade } from "react-awesome-reveal";

const squadMembers = [
    {
    name: "ThankGod",
    gender: "male",
    image: ThankGod,
    content:
      "It brings me great joy to celebrate the union of two truly amazing beings. The groom, Timothy, is a man of great character— thoughtful, reliable, and above all, trustworthy. And then there’s Janice, the bride, whose grace, warmth, and radiant spirit perfectly complement his steadiness. She is intelligent, composed, and an inspiration to everyone around her. Together, they are a perfect harmony of strength and tenderness. With all my heart, I wish you both a joyful and fulfilling married life.",
  },
    {
    name: "Doris",
    gender: "female",
    image: Doris,
    content:
      'I was there when the JT lovestory began. I watched it grow from "getting to know you" to "can\'t go a day without speaking to you," and now to, "let\'s do this forever." I couldn\'t be happier that you, my dearest Ada, found your person (thought it would always be me but, oh well..). Just like the sun was made to shine and the stars were made to light the sky, you were made for each other. I wish you both the most beautiful life together. Here\'s to a bond built on friendship, driven by true love, and sealed by Jehovah. It\'s Jayy and Tee forever! With love, Nwa.',
  },
 
  {
    name: "Philip",
    gender: "male",
    image: Philip,
    content:
      "My friend, my brother Timy took a big bold decision to form a team, to be well complemented and helped to conquer and make more giant strides in life. Well done my guy. As single brothers back then, we worked side by side in the ministry winning soul for the Lord zealously and eloquently. As my roommates, back then in the BQ, we lived peacefully, a glimpse of how peaceful we will enjoy living together in paradise. Nothing do you my guy. I was super excited when it became official that it was Jayy. Then I knew I had done a good job behind the scenes of warming the feets against it becoming cold feet at its early stages, reassured when doubts crippled in. Jayy was indeed a fitted companion. She is an 'A1' grade material. Don't ask me how I know. I just know, I know. Jayy and Timy are my people. They are both spiritual, articulated, educated, insightful and friendly. This was the right choice. Last Last We Go Dey Alright.",
  },
  {
    name: "Jasmine",
    gender: "female",
    image: Jasmine,
    content:
      "When I tried to trace back how I met Timothy. The first thing that came to mind is what he usually called me then. He called me Ọtụmọkpọ (the igbonized version of Jazz). And Jah knows it really annoyed me😂 He quickly learned that I didn't like it, and we got along just fine..... Getting to know Timothy has been interesting. He is very energetic and can be a handful sometimes, but overall, when you are with him, you know it's all good vibes. My fondest memories come from our group hangouts. It's something I always look forward to, It's encouraging, and then we have the best times of our lives. I remember Timothy reaching out to tell me he was going to propose to Janice💕. We planned and planned, and I can tell you, I've never seen him so meticulous about any other thing😂 Janice is an absolute sweetheart, and I love the way she is his calm. Officially, Timothy has a competition because she has automatically taken his place😂😂😂. But then it's beautiful seeing them together. You can tell the genuine affection they have for each other. I wish them all the love, happiness, and blessings from Jehovah in their union. Congratulations.",
  },
  {
    name: "Ifeanyi",
    gender: "male",
    image: Ifeanyi,
    content:
      "To Timothy My Friend, My Brother, My Day One. As you prepare to walk down the aisle this August, I've found myself reflecting deeply on the journey we've shared over the last eight years. It's hard to believe how far we've come from two young students navigating the chaos of university life, to this moment of maturity, commitment, and love. You were my very first friend in university. In a place where everything was new and unfamiliar, your friendship felt like home. From day one, we connected over books, late-night classes, laughter, and mutual dreams. You weren't just my friend; you became my reading partner, my night class buddy, and one of the few people who truly believed in me when things got tough. There's something about studying with you that always makes learning easier. You had this way of explaining things, making sense out of confusion. Whether we were buried in textbooks or sneaking in jokes between chapters, you made studying feel like less of a chore and more of a shared mission. You encouraged me in ways that stuck. You always believed I could do more, be more and I'll never forget that. You're the perfect mix of bad and good, the kind of bad that made life fun, spontaneous, and exciting, and the kind of good that made you dependable, honest, and principled. You were funny, always ready with a sarcastic comment or a perfectly timed joke. But beyond the laughter, you were also deeply disciplined. You knew when it was time to play, and when it was time to work. And I admired you for that balance. Oh, the memories we made. From sneaking away to the pool to cool off after long lectures, to laughing until our stomachs hurt. From sharing stress during exams to celebrating small victories with snacks and night walks. Our university days were golden, filled with a rhythm that only we understood. The blend of study and fun, of focus and freedom, made it all unforgettable. Those days were some of the best of my life, and you were a huge part of that. Now, as you step into this new chapter of your life, I just want to say how proud I am of the man you've become. Love is no small thing, and marriage is one of the bravest, most beautiful commitments a person can make. Your bride is lucky she's getting someone who's loyal, thoughtful, strong, and real. Timothy, may your marriage be filled with laughter as loud as our night class jokes, support as strong as our study bond, and love as deep as the friendship we built over these amazing years. I'm so grateful for everything we've shared and all that lies ahead for you. Cheers to love, to beginnings, and to a lifetime of sweet memories yet to be made. Congratulations, my dear friend. You deserve all the happiness in the world. With all my heart, IFEANYI aka HYBRID ✨",
  },
   {
    name: "Blossom",
    gender: "female",
    image: Blossom,
    content:
      "Hey Janice, you beautiful soul! Your soft voice and nurturing spirit make everyone feel so loved, like we're all tucked under your caring wings. I've always adored how you weave endearments into every conversation—it's your magic touch! As you step into this new chapter with your beloved, I pray your days are filled with joy, your nights with peace, and your hearts forever entwined. Here's to your happily ever after! With love, Blossom❤️",
  },
  {
    name: "Jonathan",
    gender: "male",
    image: Jonathan,
    content:
      "What a journey it has been for these two lovebirds. Their story began during the peak of the pandemic in 2020— a time when the world was filled with uncertainty, yet their love emerged as a beacon of hope and blossomed beautifully. Through every season, their bond only grew stronger, and today, we witness the fruit of that enduring love. To Tim— You've been blessed with a rare and priceless gift in Janice. She is truly a gem, one of those rare souls with grace, warmth, and qualities that set her apart. May you always treasure her, love her deeply, and protect that beautiful smile of hers from ever fading. She is a light worth guarding with your whole heart. To Janice— You've found in Tim not just a husband, but a strong spiritual anchor, a joyful heart, and a man deeply loved by all who know him. His playful spirit and steady character make him a true partner in every sense. Hold him close, cherish his laughter, and build a life rich in love and purpose together. Here's to a love that defied the odds, and to a future filled with joy, faith, and endless adventure. Cheers to the beautiful union of Tim and Janice!",
  },
  {
    name: "Praise",
    gender: "female",
    image: Praise,
    content:
      "To Tim & Jay! To my ever so beautiful couple Tim & Jay; Today marks the beginning of your next chapter together. May your wedding day be a wonderful prelude to all the joy to come. I pray that your life together be filled with love & laughter like the first day I met you two. The happiness and calm written on your faces no doubt showed you both were meant to be together. I'm honored to be amongst those chosen to share this beautiful journey of forever with you guys; with the warmest wishes for a lifetime of happiness and joy, I celebrate you both. I pray that Jehovah will continue to stand between you two as a threefold cord that binds you two together forever. Jay, please promise to take care of our brother for us. Tim please promise to keep our baby girl happy and to protect her with your life; loving her with every fire that burns deep inside you like you have promised on this day in the presence of our God and us witnesses. Here's to you both .💕 With love Praise.",
  },
  {
    name: "Britos",
    gender: "male",
    image: Bright,
    content:
      "I got to know “Timoo”, as I fondly call him, sometime around 2017 during our undergrad days. I can’t recall the specifics of our first conversation, but one thing that always stands out about him besides his towering height, whenever and wherever you see him, is his penchant for looking debonair. My guy has a taste for good fashion and he always does his best to look his best. As I got to know him better through interactions at different places, mostly at the Kingdom Hall and occasionally on campus, I could feel his strong love for Jehovah and his sterling evangelizing spirit. His confident disposition, humorous nature, excellent leadership skills and alongside strong values and principles are also noteworthy. Lest I forget, he is also very diligent and highly ambitious. I strongly believe that whatever he sets his mind on, he has the grit, commitment, discipline alongside other necessary wherewithal to weather the storm and bring it to fruition. Our years of friendship have been amazing and filled with great moments and I am very happy he found an amazing partner and decided to take this giant step with her. It is my heartfelt desire that Jehovah, “the Giver of good gifts and perfect presents” pours out a floodgate of blessings on their beautiful union “until there is nothing lacking”.ur love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories.",
  },
  {
    name: "Wemimo",
    gender: "female",
    image: Wemimo,
    content:
      "Congratulations Janice Baby!❤️ What a joy it is to hear about your upcoming wedding! It feels just like yesterday when we were in secondary school, dreaming about the future, walking long distances together after school, engaging in the same extra curricular activities and now here you are, stepping into one of life's most wonderful chapters. You were always someone with a kind heart (your home was always open to everyone), a fierce spirit, you have a wonderful sense of humor, my no nonsense woman, if Janice scold you ehn😂 ( very disciplined), you were so caring as I saw you single-handedly take care of 3 siblings especially when your parents weren't around (you did this so well and I commend you👏) and I have no doubt that you'll bring all of these incredible qualities into your marriage. I'm so happy for you both, and I hope your wedding day is everything you've ever imagined and more. May your days ahead be filled with joy, deep connection, and endless blessings. May your marriage be as strong and wonderful as the friendship we've shared all these years. Here's to a lifetime of love, laughter, and happiness! N.B: Even if you're carrying triplets😂, you ain't running from CBM duties on my wedding day except you're across seven seas and oceans. With all my love, OLUWAWEMIMO (Mama G 😂😂)",
  },
  {
    name: "Obed",
    gender: "male",
    image: Obed,
    content:
      "Obed has known Timy and Jay since their university days, and if there's anyone who can say they watched this love story bloom from the roots it's him. From classroom corridors to late-night campus gist sessions, he's been there through it all. A standout moment with Jay was in 2019, when she and some friends pulled off a surprise celebration for Obed after his final exam, a simple act that showed just how thoughtful and easygoing she is. Jay has a gentle grace about her, the kind that quietly lifts those around her. Now Tim… Well, let's just say subtlety is not his spiritual gift. Loud, hilarious, unapologetically himself, and blessed with the rare ability to make even bad news sound like a party announcement, Schoolmates, colleagues, brothers-in-faith there's no shortage of memories there. Seeing the two of them together feels like watching your favorite playlist come to life: a perfect mix of soul and rhythm, calm and chaos. They're totally made for each other. And if Tim ever tries to claim this was all his charm... rest assured, Obed has been there long enough to say, Bro, na grace!",
  },
  {
    name: "Sylviana",
    gender: "female",
    image: Sylviana,
    content:
      "7 years and counting of being BFF with the bride and the journey has been nothing but bliss. I remember when Timy surfaced in 2020/2021 and she had her doubts but I was quick to say \"give it a chance, let see where it goes\". And ladies & gentlemen here we areeeee!!! Jayy and Timy are legit the most beautiful couple I have ever seen and I'm happy to be a part of this journey with them. To the plenty ladies who wanted Timy and fought head and neck for him, guess who won this fight without even participating, my gurlll did😍!! This confirms the saying that some fights are won by not even participating at all😊 I'm grateful ; To the times we had to dress extra bcos Timy was going to be there To the times we had to make tough decisions bcos Timy was involved To the times we had to divide one sharwama bcos Timy sent money for just one (by the way Timothy you owe me one full sharwama now) To the times we had to be sad bcos Timy this or Timy that Bcos all these prepared us for JTforever2025 🥂 To the best friend I've had forever, and the one I'm about to gain, I couldn't be happier for you both if I tried. Some best friends would say take care of her for me, but I know I don't have to worry about that when it comes to you two.",
  },
  {
    name: "Samcusta",
    gender: "male",
    image: Samcusta,
    content:
      "JTforever- Unfortunately, at this time, I know only my guy Timy. Boy, we've had dealings on different platforms - spiritually, business, recreation - you excel in all. Spiritually, you are sound and diligent. I was super glad we attended that school together (2024). We hustled together. Funny man, eating and chilling when we were headed for a serious business meeting. And don't you forget that you are a picture freak. Always disturbing me with 'Custa, please give me a shot'. Meanwhile, try to ask me how to pronounce that name well. Socially, you have a vibe. A good stepper, not shy to dance in any public setting. You might think you are a good baller, but I still run the middle of the park. I will soon get to know your original ribs. She must be charming and lovely to attract an asset like you. I wish you both eternity bliss",
  },
  {
    name: "Sharon",
    gender: "female",
    image: Sharon,
    content:
      "TimJay- It was hard to miss the effortless beauty of Janice when we met for the first time over the little engagement gathering. She was new to almost everyone at the table but she quickly eased in with everyone, being all cheery and easy to be around, a quality of someone who is accommodating and I could see how much she complemented vibey Timothy. Timothy, always ready to gist, jab at you, throw jokes and enjoy the moment. Of course only someone who gets sarcasm and enjoys being jolly will get Timothy, and Janice filled those shoes. Timothy has shown admirable spiritual growth, and with as simple as a dress choice Janice demonstrated her consciousness in her relationship with Jehovah. Now what better match than two people who considers Jehovah in all they do. I wish this union brings the best out of both of you as you work life together. And may you both keep growing and being each others home as you go through every stage you step into.",
  },
    {
    name: "Bethel",
    gender: "male",
    image: Bethel,
    content:
      "E remain small make e reach 9 years since I sabi Timo. We meet for UNN as padi dem, just casual friendship. Small small, I begin notice say this guy no be ordinary pesin! Timo love Jehovah well-well and he sabi book like say na him write am. Na why when I see engagement video, I shock! I been think say all of us still dey inside single pringle association. I no know say Timo don dey cook better plans codedly! Timo na rare gem , humble, God-fearing, intelligent, and loyal. And as for Janice, make I talk true… girl, you bag GOLD! You and Timo na match wey Jehovah join with style. I dey wish una better better blessings , the kain wey only Jehovah fit give. Make peace full una house like say na river, and love just dey flow like fresh palmwine. Before una open mouth ask Jehovah anything, make Him don answer already. Congratulations my people. This union go sweet pass honey, and Jehovah go carry una matter for head.",
  },
     {
    name: "Peace",
    gender: "female",
    image: Peace,
    content:
      "Timo as I fondly call him has been my friend since our first year in school, we were in the same congregation so bonding and becoming friends was easy. Fast forward to a year later, I met Janice who was not just in my congregation but also in my department. We became close because we had similar traits, and could easily relate to situations as first daughters. She became my friend, baby girl and colleague. Over the years, we've all grown in the same space, in different spaces, and I've watched them nurture their love for each other and extend that love to others. For instance, when Janice and I lost very important people to us within a space of 3 months or so, the soon-to-be couple extended condolence and comfort to me by praying with me over the phone and encouraging me. An act I won't forget. Timo, my guy and Janice, my babygirl, I pray that Jehovah bless your union as you put him first in this everlasting bond. I also pray for joy, happiness, and wisdom. Love and best wishes❤️",
  },
];

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-web-max w-mobile-max mx-auto py-12">
      {/* Header */}
      <header className="flex items-center justify-center font-lovers-quarrel text-5xl md:text-7xl pt-5 font-normal">
        <img src={LeftFlower} alt="Left flower decoration" />
        <span className="mx-4">The Squad</span>
        <img src={RightFlower} alt="Right flower decoration" />
      </header>

      {/* Squad Grid */}
      <main className="grid md:grid-cols-4 md:gap-6 gap-5 place-items-center mx-auto mt-6">
        {squadMembers.map((member, index) => (
          <Fade>
            <SquadCard
              key={index}
              name={member.name}
              content={member.content}
              gender={member.gender as "male" | "female"}
              image={member.image}
            />
          </Fade>
        ))}
      </main>
    </div>
  );
}
