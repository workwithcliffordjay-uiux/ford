import Image from "next/image";
import ScrollLink from "@/components/ui/ScrollLink";

const TECHNOLOGIES = [
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "MySQL / MongoDB",
  "Git & GitHub",
  "Vercel",
  "REST APIs",
];

export default function HeroBanner() {
  return (
    <section className="overflow-hidden bg-white text-black">
      <div className="container">
        <div className="grid min-h-[650px] items-center gap-10  md:grid-cols-2 md:pt-0">
          <div className="relative z-10 py-10 md:py-16">
            <p className="eyebrow mb-6">Hi, I’m Clifford Jay Iyac</p>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Full-stack developer building{" "}
              <span className="text-gray-400">scalable web systems.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
              I create modern web applications with Next.js, React, and Node.js,
              focusing on performance, clean code, and great user experiences.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ScrollLink href="#projects" className="btn btn-primary">
                View Projects <span>↗</span>
              </ScrollLink>

              <ScrollLink href="#contact" className="btn btn-outline">
                Get in Touch
              </ScrollLink>
            </div>
          </div>

          <div className="relative flex h-[450px] items-end justify-center md:h-[650px]">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100 to-white" />

            <Image
              src="/images/profile.webp"
              width={600}
              height={750}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="relative z-10 h-full w-full object-cover"
              alt="Clifford Jay Iyac, Full-Stack Developer"
            />

            {/* <div className="absolute right-0 top-16 z-20 hidden border-l border-black mr-8 pl-4 text-xs uppercase leading-7 tracking-[0.15em] text-black sm:block">
              <p>Next.js</p>
              <p>React</p>
              <p>Node.js</p>
            </div> */}
          </div>
        </div>

        <div className="border-t border-gray-200 py-8">
          <p className="eyebrow-sm mb-6">Tools & Technologies</p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-500 md:gap-x-10">
            {TECHNOLOGIES.map((technology) => (
              <span key={technology} className="transition hover:text-black">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
