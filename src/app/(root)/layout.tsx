"use client";

import React, { useContext, useEffect } from "react";
import { Handjet } from "next/font/google";
import { CursorContext, CursorProvider } from "@/context/cursor-context";
import DystopianCursor from "@/components/common/cursor";
import { usePathname } from "next/navigation";

const handjet = Handjet({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const { setIsHovered } = useContext(CursorContext);

  useEffect(() => {
    setIsHovered(false);
  }, [pathname, setIsHovered]);

  return (
    <CursorProvider>
      <div
        className={`relative min-h-screen w-full overflow-x-hidden bg-neutral-900 text-amber-50 ${handjet.className} tracking-widest`}
      >
        <DystopianCursor />
        {children}
      </div>
    </CursorProvider>
  );
}
