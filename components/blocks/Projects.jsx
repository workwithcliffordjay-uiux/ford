import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ScrollLink from "@/components/ui/ScrollLink";
import { PROJECTS } from "@/lib/projects";
import { buildProjectsSchema } from "@/lib/structured-data";

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-12 text-black">
      <JsonLd data={buildProjectsSchema(PROJECTS)} />
      <div className="container">
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Selected Work · 2024–2026</p>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Things I’ve built.
              <span className="block text-gray-400">
                Made to make a difference.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-7 text-gray-500">
            A selection of projects showcasing my approach to building
            thoughtful, scalable, and high-performance web experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.number}
              className={`group overflow-hidden rounded-2xl border border-gray-100 bg-[#F5F5F7] ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <Link
                href={project.href}
                aria-label={`View ${project.title} project`}
                className="block"
              >
                <div
                  className={`relative overflow-hidden ${
                    project.featured
                      ? "h-[280px] sm:h-[420px] lg:h-[520px]"
                      : "h-[250px] sm:h-[320px]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes={
                      project.featured
                        ? "100vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="preview-scroll w-full h-full object-cover"
                  />

                  <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                    ↗
                  </span>
                </div>
              </Link>

              <div className="bg-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="eyebrow-sm">{project.category}</p>
                  <span className="text-xs text-gray-400">
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="tag">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-gray-200 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-500">Interested in how I work?</p>

          <ScrollLink href="#contact" className="btn btn-primary">
            Let’s work together <span>↗</span>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
