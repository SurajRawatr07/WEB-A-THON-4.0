"use client";

import React, { useContext } from "react";
import StaggeredText from "@/components/home/staggered-text";
import Image from "next/image";
import { Share_Tech } from "next/font/google";
import Link from "next/link";
import { CursorContext } from "@/context/cursor-context";

const shareTech = Share_Tech({ weight: "400", subsets: ["latin"] });


const AboutIITMandi = () => {
  const { setIsHovered } = useContext(CursorContext);

  return (
    <div className="relative z-0 flex w-full flex-row justify-center border-t-2 border-amber-50/[0.3] py-24">
      <Image
        src={
          "https://res.cloudinary.com/djzzlkekc/image/upload/v1742670473/bhkuml4cjhlvlgglphn1_ukrg1u.jpg"
        }
        width={1920}
        height={600}
        alt={"College Pic"}
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-center opacity-20"
      />
      <div className="mx-5 flex flex-col items-center gap-12 md:flex-row">
        <div>
          <StaggeredText>About GEHU Haldwani</StaggeredText>
          <div
            className={`mb-5 max-w-screen-sm ${shareTech.className} mt-2 text-base leading-normal tracking-tight lg:text-lg`}
          >
            Graphic Era Hill University, Haldwani Campus, is a hub of
            innovation and academic excellence. NIRVAN brings the campus
            community together through technology, competition, and creativity,
            creating an environment where ideas can grow into real solutions.
            <br />
            From AI and cybersecurity to gaming and hands-on workshops, the fest
            celebrates the people who build, explore, and share what comes next.
          </div>
          <Link
            href={"https://gehu.ac.in/"}
            target={"_blank"}
            className="w-fit cursor-none border-2 border-amber-50 bg-amber-50/[0.7] px-5 py-1 text-2xl font-normal uppercase text-neutral-900 backdrop-blur-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Visit website
          </Link>
        </div>
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Snow_North_IIT_Mandi_Himachal_Feb19_D72_9387.jpg/640px-Snow_North_IIT_Mandi_Himachal_Feb19_D72_9387.jpg"
          }
          width={600}
          height={600}
          alt={"Snow in college"}
          className="aspect-square w-[300px] border-2 border-amber-50 object-cover lg:w-[400px]"
        />
      </div>
    </div>
  );
};

export default AboutIITMandi;
