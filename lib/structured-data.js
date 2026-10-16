import { siteConfig } from "@/site.config";

const PERSON_ID = `${siteConfig.url}/#person`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/profile.webp`,
  jobTitle: siteConfig.jobTitle,
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  knowsAbout: siteConfig.skills,
  sameAs: siteConfig.socials.map((social) => social.href),
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: siteConfig.url,
  name: siteConfig.title,
  description: siteConfig.description,
  inLanguage: "en-US",
  publisher: { "@id": PERSON_ID },
};

const profilePage = {
  "@type": "ProfilePage",
  "@id": `${siteConfig.url}/#profilepage`,
  url: siteConfig.url,
  name: siteConfig.title,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": PERSON_ID },
  primaryImageOfPage: `${siteConfig.url}/opengraph-image`,
};

/** Person + WebSite + ProfilePage, emitted once from the root layout. */
export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [person, website, profilePage],
};

/** Portfolio pieces, emitted by the Projects block alongside its own data. */
export function buildProjectsSchema(projects) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}/#projects`,
    name: "Selected Work",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: `${siteConfig.url}${project.image}`,
        keywords: project.technologies.join(", "),
        creator: { "@id": PERSON_ID },
        ...(project.href && project.href !== "#"
          ? { url: new URL(project.href, siteConfig.url).toString() }
          : {}),
      },
    })),
  };
}
