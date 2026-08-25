import "@/styles/globals.css";
import { type Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gehu.ac.in/"),
  title: "NIRVAN '26 | GEHU Haldwani",
  description: "Where Ideas Become Innovation. NIRVAN '26 at GEHU Haldwani Campus.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
// TODO: Add opengraph

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
