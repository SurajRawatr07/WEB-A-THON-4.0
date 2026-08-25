"use client";

import React, { useContext, useEffect, useState } from "react";
import AmbassadorPromo from "@/components/home/ambassador-promo";
import Image from "next/image";
import Link from "next/link";
import { CursorContext } from "@/context/cursor-context";
import Phone from "@/components/svg/phone";
import Insta from "@/components/svg/insta";

const Footer = ({ onClick }: { onClick?: () => void }) => {
  const { setIsHovered } = useContext(CursorContext);

  const targetDate = new Date("2026-10-12").getTime();
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      const remainingTime = targetDate - new Date().getTime();
      setTimeLeft(remainingTime > 0 ? remainingTime : 0);
    };

    updateCountdown(); // Set immediately
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));

    return { days };
  };

  return (
    <div className="relative z-0 grid w-full grid-cols-1 bg-gradient-to-r from-amber-50 to-amber-50/[0.3] lg:grid-cols-6">
      <Image
        src={
          "https://res.cloudinary.com/djzzlkekc/image/upload/v1742670474/byyegxxonyqiuiioikvr_jcszfs.jpg"
        }
        width={1920}
        height={800}
        alt={"Ambassador background"}
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-center opacity-30"
      />
      <div className="col-span-1 border-2 border-amber-50 sm:border-b-0 lg:col-span-6">
        <AmbassadorPromo onClick={onClick} />
      </div>

      <div className="col-span-1 grid gap-5 border-t-0 border-amber-50 bg-neutral-950 px-5 py-12 sm:px-8 lg:col-span-4 lg:grid-cols-3 lg:px-12 lg:py-24">
        <div className="flex flex-col items-center space-y-2 text-center font-normal uppercase lg:col-span-1">
          <Image src="/techcircle-logo.svg" alt={"TechCircle logo"} width={320} height={120} className="w-52 sm:w-64" />
          <div className="text-3xl sm:text-4xl">TECHCIRCLE</div>
          <div className="text-center text-base font-light leading-none text-neutral-400 sm:text-lg">
            Graphic Era Hill University <br />
            Haldwani Campus <br /> Uttarakhand, India
          </div>
        </div>
        <div className="space-y-2 lg:col-span-2 xl:col-span-1">
          <div className="text-xl uppercase sm:text-2xl">important links</div>
          <div className="grid grid-cols-2 gap-2 text-base font-light uppercase text-neutral-300 sm:text-xl">
            {["Home", "Events", "Schedule", "About", "Gallery"].map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "#top"
                    : `#${item.toLowerCase()}`
                }
                className="cursor-none hover:underline"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-2 lg:col-span-1">
          <div className="text-xl uppercase sm:text-2xl">legal terms</div>
          <div className="grid grid-cols-1 text-base font-light uppercase text-neutral-300 sm:text-xl">
            <Link
              href={`/legal/terms`}
              className="cursor-none hover:underline"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              terms of service
            </Link>
            <Link
              href={`/legal/privacy`}
              className="cursor-none hover:underline"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              privacy policy
            </Link>
          </div>
          <div className="pt-5 text-xl uppercase sm:text-2xl">contact us</div>
          <div className="grid grid-cols-1 text-base font-light uppercase text-neutral-300 sm:text-xl">
            <Link
              href={`mailto:nirvan.haldwani@gehu.ac.in`}
              target={"_blank"}
              className="cursor-none hover:underline"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              developer team
            </Link>
            <Link
              href={`mailto:nirvan.haldwani@gehu.ac.in`}
              target={"_blank"}
              className="cursor-none hover:underline"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              help desk
            </Link>
          </div>
        </div>
        <div className="-mb-5 mt-8 flex flex-col items-center gap-2.5 text-center text-xs font-light uppercase text-neutral-600 sm:mt-12 sm:text-sm lg:col-span-3">
          copyright &copy; 2026, NIRVAN, GEHU Haldwani.
          <div className="flex w-fit gap-5">
            <Link
              href={"https://chat.whatsapp.com/DG8kunUqzrB6M08ucQgFRc"}
              target="_blank"
              className="cursor-none hover:underline"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Phone size={24} color={"#fffbebdd"} />
            </Link>
            <Link
              href={"https://www.instagram.com/techgeeksgehu?igsi=aWlpbWNmY2JmN2h3"}
              target="_blank"
              className="cursor-none hover:underline"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Insta size={24} color={"#fffbebdd"} />
            </Link>
          </div>
        </div>
      </div>
      {timeLeft ? (
        <div className="col-span-1 flex flex-col items-center justify-center border-2 border-amber-50 px-6 py-8 uppercase text-neutral-900 sm:px-8 lg:col-span-2 lg:border-t-0 lg:px-12 lg:py-24">
          <div className="text-center text-5xl font-semibold leading-[0.7] sm:text-7xl xl:text-8xl xl:leading-[0.5]">
            {formatTime(timeLeft).days} days{" "}
            <span className="text-3xl sm:text-5xl xl:text-6xl">to go</span>
          </div>
          <div className="text-2xl font-semibold sm:text-4xl">TECHCIRCLE</div>
        </div>
      ) : (
        <div className="loading col-span-1 flex flex-col justify-center bg-neutral-900 lg:col-span-2"></div>
      )}
    </div>
  );
};

export default Footer;
