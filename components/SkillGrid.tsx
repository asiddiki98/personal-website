"use client";

import SkillToken from "./SkillToken";
import { useState } from "react";
import skills from "../lib/skills.json";

export default function SkillGrid() {
  const [skillType, setSkillType] = useState<
    "Frameworks" | "Languages" | "Libraries" | "All"
  >("All");
  return (
    <div>
      <div className="flex justify-center gap-4 flex-wrap">
        {["All", "Languages", "Frameworks", "Libraries"].map((type) => (
          <button
            key={type}
            onClick={() => setSkillType(type as any)}
            className={`${
              skillType === type ? "gradient-background" : " bg-slate-500"
            } px-4 py-2 rounded-md`}
          >
            <p className=" text-white bg-opposite-theme">{type}</p>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
        {skills
          .sort((a, b) => b.years - a.years)
          .map(
            (skill) =>
              (skillType === "All" || skillType === skill.type) && (
                <SkillToken key={skill.name} {...skill} />
              )
          )}
      </div>
    </div>
  );
}
