import { useEffect } from "react";
import {
  Blossom,
  Doris,
  Ifeanyi,
  Jasmine,
  Jonathan,
  LeftFlower,
  Nnamdi,
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

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-web-max w-mobile-max mx-auto py-12">
      <div className="flex items-center justify-center font-lovers-quarrel text-5xl md:text-7xl pt-5 font-normal">
        <img src={LeftFlower} alt="" />
        The Squad
        <img src={RightFlower} alt="" />
      </div>

      <div className="grid md:grid-cols-4 md:gap-6 gap-5 place-items-center mx-auto mt-6">
        <SquadCard
          name="Cynthia James"
          content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
          gender="female"
          image={Blossom}
        />
        <SquadCard
          name="Charles Michael"
          content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
          gender="male"
          image={Philip}
        />
        <SquadCard
          name="Cynthia James"
          content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
          gender="female"
          image={Jasmine}
        />
        <SquadCard
          name="Cynthia James"
          content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
          gender="male"
          image={Ifeanyi}
        />
        <SquadCard
          name="Cynthia James"
          content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
          gender="female"
          image={Doris}
        />
        <SquadCard
          name="Cynthia James"
          content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
          gender="male"
          image={Jonathan}
        />
        <SquadCard
          name="Cynthia James"
          content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
          gender="female"
          image={Praise}
        />
        <SquadCard
          name="Cynthia James"
          content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
          gender="male"
          image={Nnamdi}
        />

        <SquadCard
          name="Cynthia James"
          content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
          gender="female"
          image={Wemimo}
        />
        <SquadCard
          name="Cynthia James"
          content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
          gender="male"
          image={Obed}
        />
        <SquadCard
          name="Cynthia James"
          content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
          gender="female"
          image={Sylviana}
        />
        <SquadCard
          name="Cynthia James"
          content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
          gender="male"
          image={Samcusta}
        />
        <SquadCard
          name="Cynthia James"
          content="Your love, support, and friendship mean the world. You've helped carry laughter, calm nerves, and shared unforgettable memories. "
          gender="female"
          image={Sharon}
        />
      </div>
    </div>
  );
}
