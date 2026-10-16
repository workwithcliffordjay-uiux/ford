// Single source of truth for SEO metadata. Set NEXT_PUBLIC_SITE_URL in the
// deploy environment so canonical/OG URLs are absolute in every environment.
export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cliffordjayiyac.vercel.app",
  name: "Clifford Jay Iyac",
  title: "Clifford Jay Iyac — Full-Stack Developer",
  jobTitle: "Full-Stack Developer",
  description:
    "Portfolio of Clifford Jay Iyac, a full-stack developer building scalable web systems with Next.js, React, and Node.js.",
  locale: "en_US",
  email: "workwithcliffordjay@gmail.com",
  // TODO: replace with the real X/Twitter handle, or remove to drop twitter:site.
  twitterHandle: "@yourhandle",
  // Rendered in the Contact block and as `sameAs` in the Person schema.
  socials: [
    { label: "GitHub", href: "https://github.com/Ford-byte" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/iyac-clifford-jay-999071346/",
    },
  ],
  skills: [
    "Next.js",
    "React",
    "Node.js",
    "Tailwind CSS",
    "MySQL",
    "MongoDB",
    "REST APIs",
    "Web Development",
  ],
};
