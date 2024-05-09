"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function SkillToken({
  years,
  name,
  icon,
}: Readonly<{
  years: number;
  name: string;
  icon: string;
}>) {
  const [side, setSide] = useState("");

  const flipHeads = () => {
    setSide("heads");
  };

  const flipTails = () => {
    setSide("tails");
  };

  return (
    <div
      onMouseEnter={flipHeads}
      onMouseLeave={flipTails}
      className="p-8 flex flex-col gap-4 items-center justify-center"
    >
      <div id="coin" className={`${side} gradient-border`} key={+new Date()}>
        <div
          className={`${
            years >= 3 ? "gold" : "silver"
          } absolute text-center rounded-[50%] w-[100%] h-[100%] flex justify-center items-center`}
        >
          <h2>
            <Icon icon={icon} width="3.5em" height="3.5rem" />
          </h2>
        </div>
        <div
          className={`${
            years >= 3 ? "gold" : "silver"
          } side-b absolute text-center rounded-[50%]  w-[100%] h-[100%] flex justify-center items-center`}
        >
          <h2 className="glossy-text">{years}+ Years</h2>
        </div>
      </div>

      <h2 className={`text-center ${years >= 3 ? "gold-text" : "silver-text"}`}>
        {name}
      </h2>
    </div>
  );
}
