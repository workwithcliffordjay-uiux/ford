import { PROJECTS } from "@/lib/projects";
import { siteConfig } from "@/site.config";

// Resolved at build time so /sitemap.xml stays statically prerendered.
const LAST_MODIFIED = new Date();

const absolute = (path) => `${siteConfig.url}${path}`;

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
      // Image sitemap entries: the screenshots are only reachable through
      // markup, so listing them here is what gets them into Google Images.
      images: [
        absolute("/images/profile.webp"),
        ...PROJECTS.map((project) => absolute(project.image)),
      ],
    },
  ];
}
