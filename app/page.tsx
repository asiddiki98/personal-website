import Role from "@/components/Role";
import Image from "next/image";
import Icon from "@/components/Icon";
export default function Home() {
  return (
    <main className="flex flex-col gap-5 relative max-w-custom flex-grow flex-shrink flex-basis-0 px-2">
      <div className="flex justify-end">
        <Image
          src="/avatar.jpg"
          alt="Azim Siddiki"
          width={150}
          height={150}
          priority
          className="w-36 h-36 rounded-full object-cover profile-image wiggle glossy-border"
        />
      </div>
      <div className="gap-2">
        <h3 className="text-xl lg:text-2xl">Hello 👋,</h3>
        <h1 className="text-xl lg:text-3xl">
          I am <Role />
        </h1>
      </div>

      <p>
        In 2020 I decided to fully immerse myself in programming and enrolled in
        App Academy, a rigorous 1000+ hour coding bootcamp.
      </p>
      <p>
        After graduating from App Academy, I joined{" "}
        <a
          className="glossy-text"
          href="https://www.stitch3d.io/"
          target="_blank"
        >
          {" "}
          Stitch3D
        </a>
        , where I played a crucial role in the design and development of an
        award-winning 3D file management platform.
      </p>
      <p>
        Currently I am helping build SansWrite&apos;s next-generation compliance
        monitoring software at{" "}
        <a
          className="glossy-text"
          href="http://outliertech.com/"
          target="_blank"
        >
          Outlier Technoligies.
        </a>
      </p>
      <p>
        When I&apos;m not coding, I enjoy hiking ⛰️ and getting lost in a good
        book 📖. Lake Minnewaska is my favorite spot so far, and I&apos;m
        working through the <em>A Song of Ice and Fire</em> series{"—"}even
        though George R. R. Martin will never finish it 😪.
      </p>

      <p>
        I am always looking for new opportunities to grow and learn, so feel
        free to{" "}
        <a className="glossy-text" href="mailto:azimsiddiki@gmail.com">
          reach out
        </a>{" "}
        if you want to connect and build together! 🚀
      </p>

      <div className="flex flex-row gap-4 mt-10">
        <a
          className="py-2 px-7 glossy-text glossy-border flex items-center gap-2"
          href="https://github.com/asiddiki98"
          target="_blank"
        >
          <Icon name="github" />
          GitHub
        </a>

        <a
          className="py-2 px-7 glossy-text glossy-border flex items-center gap-2"
          href="https://www.linkedin.com/in/azim-siddiki-3b505b207/"
          target="_blank"
        >
          <Icon name="linkedin" />
          LinkedIn
        </a>
      </div>
    </main>
  );
}
