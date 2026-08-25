"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import styles from "@/styles/home.module.css";
import dynamic from "next/dynamic";

const XpectoScene = dynamic(() => import("@/components/common/xpecto-scene"), {
  ssr: false,
});

const HomeScreen = () => {
  return (
    <div className="relative z-0 h-[95vh] w-full overflow-clip bg-neutral-900">
      <Image
        // src={`https://res.cloudinary.com/diqdg481x/image/upload/v1739200155/images/glitc.jpg`}
        src={`https://res.cloudinary.com/djzzlkekc/image/upload/v1742670475/qzsmww5pd8khnvcesyly_pginia.jpg`}
        alt={"transparent bg"}
        width={1920} //Added  a sample width and height as it was showing an error without it
        height={1080}
        className="absolute left-0 top-0 -z-20 h-full w-full object-cover object-bottom opacity-50"
      />
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-b from-neutral-900/[0.1] from-80% to-neutral-900" />
      <div className="pointer-events-none absolute inset-0 z-[-5] opacity-70">
        <XpectoScene />
      </div>
      <motion.div
        className={`absolute left-0 top-0 z-0 hidden h-full w-full stroke-black p-12 text-2xl font-medium text-indigo-600 sm:block ${styles.homeStatic}`}
        initial={{ display: "block" }}
        animate={{ display: "none" }}
        transition={{ duration: 0.2, delay: 2 }}
      ></motion.div>
      <motion.div
        className={`absolute left-0 top-0 -z-10 block h-full w-full sm:hidden ${styles.homeStaticMobile}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, display: "none" }}
        transition={{ duration: 0.2, delay: 2 }}
      ></motion.div>
      <div className="h-24 sm:h-16"></div>
      <div className="flex h-[calc(100vh-170px)] w-full flex-col items-center justify-center px-4 uppercase text-amber-50 sm:h-[calc(100vh-130px)] sm:px-10 md:px-24">
        <motion.div
          className="relative z-10 flex w-full max-w-[1000px] flex-col items-center text-center"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <div className="text-lg font-bold tracking-[0.2em] text-indigo-300 sm:text-2xl md:text-4xl">
            TECHCIRCLE BY AI
          </div>
          <div className="mt-3 text-[10px] font-medium tracking-[0.35em] text-amber-50/70 sm:text-sm md:text-lg">
            PRESENTS
          </div>
          <div className="mt-4 text-5xl font-black tracking-[0.08em] text-amber-50 sm:text-7xl md:text-8xl lg:text-9xl">
            TECHCLUB
          </div>
          <div className="mt-4 text-[10px] tracking-[0.2em] text-green-300 sm:text-sm md:text-base lg:text-xl">
            NIRVAN &apos;26 / GEHU HALDWANI
          </div>
        </motion.div>
        <motion.div
          className="absolute -bottom-20 left-1/2 hidden w-full -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-extralight uppercase text-amber-50/[0.5] sm:block md:text-8xl lg:text-9xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 7 }}
        >
          scroll&nbsp;down
        </motion.div>
      </div>
    </div>
  );
};

export default HomeScreen;
