import React from "react";

const registrationUrl = "mailto:nirvan.haldwani@gehu.ac.in?subject=NIRVAN%20%2726%20Registration&body=Name%3A%0ACollege%3A%0AEvent%3A%0APhone%3A";
const hackathonRegistrationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfhVs6t83eSJc8aMifgxK9e-jDqlv_2aShHde0kU3vLTvRMiw/viewform?usp=publish-editor";

const events = [
  ["Hackathon / Web-A-Thon 4.0", "12 October 2026", "10:00 AM", "Computer Lab 1", "2-4 Members", "₹100 per team", "₹15,000", "All code must be written during the allotted timeframe. Submit a working GitHub repository and live public URL."],
  ["Esports Arena", "12 October 2026", "02:00 PM", "Computer Lab 2", "4 Players", "₹360 per team", "₹30,000 total", "BGMI, Free Fire, and Clash of Clans. Mobile devices only; registered game IDs required."],
  ["Treasure Hunt", "12 October 2026", "11:00 AM", "Seminar Hall", "2-3 Members", "₹150 per team", "₹5,000", "Solve clues sequentially while exploring the campus. Restricted zones are off-limits."],
  ["Capture The Flag", "12 October 2026", "04:00 PM", "Open Ground / Cyber Lab", "1-2 Members", "₹200 per team", "₹8,000", "Challenge cryptography, web security, and forensics. Attacking non-targeted infrastructure is prohibited."],
  ["Hands-on Tech Workshop", "13 October 2026", "10:00 AM", "Main Auditorium", "Individual", "₹50 per participant", "GEHU Certificates", "Bring a laptop with prerequisites installed. Full attendance is required for certification."],
];

const schedule = [
  ["09:00", "Opening Ceremony", "Main Auditorium"],
  ["10:00", "Hackathon", "Computer Lab 1"],
  ["11:00", "Treasure Hunt", "Seminar Hall"],
  ["13:00", "Lunch & Community Mixer", "Food Court"],
  ["14:00", "Esports Arena", "Computer Lab 2"],
  ["16:00", "Capture The Flag", "Cyber Lab"],
  ["18:00", "HackSprint Begins", "Innovation Lab"],
];

const speakers = [
  ["Dr. Ramesh Sharma", "AI Research Lead", "TechCorp Labs"],
  ["Ananya Verma", "Senior Web Architect", "CloudNova"],
  ["Vikram Singh", "Cybersecurity Specialist", "HackNest"],
];

const sectionTitle = (number: string, title: string) => (
  <div className="mb-10">
    <div className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-400">{number} / NIRVAN &apos;26</div>
    <h2 className="mt-3 text-5xl font-bold uppercase text-amber-50 sm:text-7xl">{title}</h2>
  </div>
);

export default function NirvanDetails() {
  return (
    <>
      <section id="events" className="relative w-full border-t-2 border-amber-50/30 px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {sectionTitle("01", "Event arena")}
          <div className="grid gap-5 lg:grid-cols-2">
            {events.map(([name, date, time, venue, team, fee, prize, rules], index) => (
              <article key={name} className="border-2 border-amber-50 bg-neutral-950/80 p-5 text-amber-50 backdrop-blur-sm sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div><span className="text-sm text-indigo-400">0{index + 1}</span><h3 className="mt-2 text-2xl font-bold uppercase sm:text-3xl">{name}</h3></div>
                  <span className="whitespace-nowrap text-left text-base font-bold text-green-300 sm:text-right sm:text-lg">{prize}</span>
                </div>
                <p className="mt-5 text-base text-gray-300 sm:text-lg">{rules}</p>
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-amber-50/30 pt-5 text-sm sm:grid-cols-3">
                  <div><span className="block text-gray-500">DATE</span>{date}</div><div><span className="block text-gray-500">TIME</span>{time}</div><div><span className="block text-gray-500">VENUE</span>{venue}</div><div><span className="block text-gray-500">TEAM</span>{team}</div><div><span className="block text-gray-500">FEE</span>{fee}</div>
                </div>
                <a href={index === 0 ? hackathonRegistrationUrl : registrationUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block border-2 border-amber-50 px-4 py-2 text-base uppercase hover:bg-amber-50 hover:text-neutral-900 sm:text-lg">Register now</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="schedule" className="relative w-full border-t-2 border-amber-50/30 bg-neutral-950 px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">{sectionTitle("02", "Schedule")}
          <div className="border-2 border-amber-50/60">{schedule.map(([time, name, venue]) => <div key={time} className="grid grid-cols-[72px_1fr] gap-4 border-b border-amber-50/20 p-4 last:border-b-0 sm:grid-cols-[110px_1fr_220px] sm:p-5"><span className="font-bold text-green-300">{time}</span><span className="text-base uppercase text-amber-50 sm:text-lg">{name}</span><span className="text-xs uppercase text-gray-500 sm:text-right sm:text-sm">{venue}</span></div>)}</div>
        </div>
      </section>
      <section id="speakers" className="relative w-full border-t-2 border-amber-50/30 px-4 py-16 sm:px-6 lg:px-12 lg:py-24"><div className="mx-auto max-w-7xl">{sectionTitle("03", "Speakers")}
        <div className="grid gap-5 md:grid-cols-3">{speakers.map(([name, role, company], index) => <article key={name} className="border-2 border-amber-50 p-6"><div className="grid h-20 w-20 place-items-center border-2 border-indigo-400 text-2xl font-bold text-indigo-400">0{index + 1}</div><h3 className="mt-8 text-2xl font-bold uppercase text-amber-50">{name}</h3><p className="mt-2 text-green-300">{role}</p><p className="mt-1 text-gray-400">{company}</p></article>)}</div>
      </div></section>
      <section id="gallery" className="relative w-full border-t-2 border-amber-50/30 px-4 py-16 sm:px-6 lg:px-12 lg:py-24"><div className="mx-auto max-w-7xl">{sectionTitle("04", "Sponsors & gallery")}
        <div className="mb-12 grid gap-4 border-2 border-amber-50 p-6 text-base uppercase text-amber-50 sm:grid-cols-3 sm:text-xl"><div><span className="block text-sm text-indigo-400">Title sponsors</span>TechCorp<br />Zeopto</div><div><span className="block text-sm text-green-300">Gold sponsors</span>DevLabs<br />CloudNova.xyz<br />Lovable.Ai<br />HackNest</div><div><span className="block text-sm text-red-300">Community</span>GitHub Community<br />GDG GEHU</div></div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{["Build", "Learn", "Compete", "Connect", "Create", "Celebrate"].map((label, index) => <div key={label} className="grid aspect-video place-items-center border-2 border-amber-50/50 bg-gradient-to-br from-indigo-950 to-neutral-950 text-center text-lg font-bold uppercase text-amber-50 sm:text-xl"><span>0{index + 1}<br /><span className="text-xs text-green-300 sm:text-sm">{label}</span></span></div>)}</div>
      </div></section>
      <section id="contact" className="w-full border-t-2 border-amber-50/30 bg-gradient-to-r from-amber-50 to-amber-50/30 px-4 py-16 text-neutral-900 sm:px-6 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="text-sm font-bold uppercase tracking-[0.3em]">05 / Contact & venue</div><h2 className="mt-3 text-4xl font-bold uppercase sm:text-5xl lg:text-7xl">Join the build.</h2></div><div className="text-base sm:text-lg"><p>nirvan.haldwani@gehu.ac.in</p><p>+91 9528258960</p><p>Graphic Era Hill University, Haldwani, Uttarakhand</p><a href={registrationUrl} target="_blank" rel="noreferrer" className="mt-5 inline-block border-2 border-neutral-900 px-5 py-2 uppercase hover:bg-neutral-900 hover:text-amber-50">Register now</a></div></div></section>
    </>
  );
}
