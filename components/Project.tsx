"use client";

import Image from "next/image";
import { useState } from "react";
import Tag from "./Tag";
import skills from "../lib/skills.json";
import { Icon } from "@iconify/react";

export default function Project({
  website,
  gif,
  children,
  stack,
  name,
  description,
  unoptomized = false,
}: Readonly<{
  website: string;
  gif: string;
  children: React.ReactNode;
  stack: string[];
  name: string;
  description: string;
  unoptomized?: boolean;
}>) {
  const [open, setOpen] = useState(false);
  return (
    <article className="grid grid-flow-row p-4 h-[fit-content]">
      <div className="gradient-shadow rounded-md bg-blend-soft-light lg:w-[21.5rem] bg-match-theme ">
        <section className="lg:h-[12rem] lg:w-[21.5rem] rounded-t-md">
          <a
            href={website}
            target="_blank"
            className=" block w-[100%] h-[100%]"
          >
            <Image
              src={gif}
              alt=""
              width="200"
              height="200"
              className=" w-[100%] h-[100%] border-0 rounded-t-md"
              unoptimized={unoptomized}
            />
          </a>
        </section>
        <section className="flex flex-col gap-1 border-0 rounded-b-md p-2 border-t border-black">
          <div className="flex flex-col justify-center items-center">
            <h2 className="glossy-text">{name}</h2>
            <div className="flex flex-row items-center gap-1">
              {stack.map((tech) => {
                const skill = skills.find((skill) => skill.name === tech)!;
                return (
                  <Tag key={skill.name} text={skill.name} level={skill.years} />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="glossy-text text-center">{description}</p>

            {(() => {
              if (open) {
                return children;
              }
            })()}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className=" w-[fit-content] self-center px-3"
          >
            <Icon
              icon={open ? "teenyicons:up-outline" : "teenyicons:down-outline"}
              className="glossy-border"
            />
          </button>
        </section>
      </div>
    </article>
  );
}
