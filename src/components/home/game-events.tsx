"use client";

import React from "react";
import { motion } from "motion/react";

const events = [
  {
    name: "Esports Arena",
    tagline: "BGMI | Free Fire | Clash of Clans",
    description: "Compete in the ultimate gaming championship across three titles.",
    prize: "₹30,000 total",
  },
  {
    name: "Capture The Flag",
    tagline: "Cybersecurity & Ethical Hacking",
    description: "Test your skills across cryptography, web security, and forensics.",
    prize: "₹8,000",
  },
];

const GameEvents = () => {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 py-10">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/70 via-neutral-950 to-red-950/70" />
      <div className="relative z-10">
        <h1 className="mb-10 text-center text-4xl font-bold uppercase text-white">
          Featured NIRVAN Events
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex min-h-72 flex-col justify-between border-2 border-amber-50 bg-neutral-950/80 p-8 text-amber-50 backdrop-blur-sm"
            >
              <div>
                <h2 className="text-3xl font-bold uppercase">{event.name}</h2>
                <p className="mt-2 text-xl uppercase text-green-300">{event.tagline}</p>
                <p className="mt-6 text-lg text-gray-300">{event.description}</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-amber-50/40 pt-4 text-xl font-extrabold">
                <span className="text-amber-100">Prize Pool</span>
                <span className="text-green-300">{event.prize}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameEvents;
