"use client";
import { useState } from "react";

export default function SkillToken({
  children,
  years,
}: Readonly<{
  children: React.ReactNode;
  years: number;
}>) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`relative w-32 h-32 m-4 perspective`}>
      <div
        className={`w-full h-full absolute cursor-pointer transition-transform duration-700 transform ${
          isFlipped ? "rotate-y-180" : ""
        } preserve-3d`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="token-face front bg-gray-200 flex items-center justify-center text-center">
          {children}
        </div>
        <div className="token-face back bg-blue-500 text-white flex items-center justify-center text-center rotate-y-180">
          <span>{years} Years</span>
        </div>
      </div>
    </div>
  );
}
