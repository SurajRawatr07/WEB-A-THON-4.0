import React from "react";
import HomeScreen from "@/components/common/home";
import AboutXpecto from "@/components/home/about-xpecto";
import Marquee from "@/components/common/scrollable-marquee";
import AboutIITMandi from "@/components/home/about-iitmd";
import Footer from "@/components/home/footer";
import MarqueeContainer from "@/components/common/marquee-container";
import GameEvents from "@/components/home/game-events";
import NirvanDetails from "@/components/home/nirvan-details";

const Home = () => {
  return (
    <div className="flex h-full w-full flex-col items-center bg-neutral-900">
      <HomeScreen />
      <div className="relative flex h-32 w-full flex-col justify-center overflow-hidden whitespace-nowrap border-y-2 border-amber-50 bg-neutral-950 text-9xl font-extrabold uppercase text-amber-50/[0.8]">
        <MarqueeContainer text={["12 to 13 october", "gehu haldwani techfest"]} />
      </div>
      <GameEvents />
      <NirvanDetails />
      <AboutXpecto />
      <AboutIITMandi />
      <Marquee speed={10}>
        xperience nirvan | where ideas become innovation | xperience nirvan |
        where ideas become innovation |
      </Marquee>
      <Footer />
      <div className="relative flex h-32 w-full flex-col justify-center overflow-hidden whitespace-nowrap bg-neutral-950 text-9xl font-extrabold uppercase text-neutral-900">
        <MarqueeContainer
          text={["nirvan '26", "12 to 13 october 2026", "gehu haldwani"]}
        />
      </div>
    </div>
  );
};

export default Home;
