import SkillToken from "@/components/SkillToken";

export default function Skills() {
  return (
    <main className="flex flex-col gap-5 relative max-w-custom flex-grow flex-shrink flex-basis-0">
      <SkillToken years={3}>JavaScript</SkillToken>
    </main>
  );
}
