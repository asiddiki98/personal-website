import Role from "@/components/Role";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col gap-5 relative max-w-custom flex-grow flex-shrink flex-basis-0">
      <div className="flex justify-end">
        <Image
          src="/avatar.jpg"
          alt="Azim Siddiki"
          width={150}
          height={150}
          priority
          className="w-36 h-36 rounded-full object-cover profile-image wiggle"
        />
      </div>
      <div className="gap-2">
        <h3 className="text-2xl">Hello,</h3>
        <h1 className="text-3xl">
          I am <Role />
        </h1>
      </div>

      <p>
        While attending Hunter University 🏫 I decided to fully immerse myself
        in programming and enrolled in App Academy, a rigorous 1000+ hour coding
        bootcamp with a less than 3% acceptance rate.
      </p>
      <p>
        After graduating from App Academy, I joined{" "}
        <a className="t" href="https://www.stitch3d.io/" target="_blank">
          {" "}
          Stitch3D
        </a>
        , where I played a crucial role in the design and development of an
        award-winning 3D file management platform.
      </p>
      <p>
        On the side, I explore commercial real estate with{" "}
        <a
          className="text-blue-500"
          href="https://www.capriip.com/"
          target="_blank"
        >
          Capri Industrial Partners
        </a>
        . This hobby allows me to apply my analytical skills in a different
        arena, focusing on strategic off-market transactions.
      </p>
      <p>
        When not coding or delving into real estate, I enjoy hiking ⛰️ and
        diving into a good book 📖, which help me return to my tech projects
        with renewed energy and creativity.
      </p>

      <div className="flex flex-row gap-2 mt-10">
        <span className="border-2 border-blue-500 rounded">
          <a className="p-7 text-blue-500" href="/cv">
            Resume
          </a>
        </span>
        <span className="border-2 border-blue-500 rounded">
          <a
            className="p-7 text-blue-500"
            href="https://www.github.com/azimsiddiki"
            target="_blank"
          >
            GitHub
          </a>
        </span>
        <span className="border-2 border-blue-500 rounded">
          <a
            className="p-7 text-blue-500"
            href="https://www.linkedin.com/in/azim-siddiki/"
            target="_blank"
          >
            LinkedIn
          </a>
        </span>
      </div>
    </main>
  );
}
