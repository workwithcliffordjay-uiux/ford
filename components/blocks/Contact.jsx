import Link from "next/link";
import { siteConfig } from "@/site.config";

const { email: EMAIL, socials: SOCIALS } = siteConfig;

// Resolved at build time so the page stays statically prerenderable.
const YEAR = new Date().getFullYear();

export default function Contact() {
  return (
    <section id="contact" className="overflow-hidden bg-[#F5F5F7] text-black">
      <div className="container">
        <div className="py-24 sm:py-32 lg:py-40">
          <p className="eyebrow mb-6">Get in Touch</p>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
            Have a project
            <span className="block text-gray-400">in mind?</span>
            Let’s make it happen.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
            I’m always interested in building useful digital experiences,
            solving problems, and collaborating on meaningful projects. Let’s
            talk about what you have in mind.
          </p>

          <div className="mt-10">
            <a href={`mailto:${EMAIL}`} className="btn btn-primary btn-lg">
              Get in Touch
              <span className="text-lg">↗</span>
            </a>
          </div>

          <div className="mt-20 border-t border-gray-300 pt-8 sm:mt-28">
            <div className="grid gap-10 sm:grid-cols-2 sm:items-end">
              <div>
                <p className="text-sm text-gray-500">Prefer email?</p>

                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-2 inline-block break-all text-lg font-medium tracking-tight transition hover:text-gray-500 sm:text-xl"
                >
                  {EMAIL}
                </a>
              </div>

              <div className="sm:text-right">
                <p className="mb-4 text-sm text-gray-500">Find me online</p>

                <div className="flex flex-wrap gap-x-6 gap-y-3 sm:justify-end">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-700 transition hover:text-black"
                    >
                      {social.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-4 border-t border-gray-300 py-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-black"
          >
            FORD.
          </Link>

          <p>Designed & built by Clifford Jay Iyac.</p>

          <p>© {YEAR} All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
