import "./globals.css";
import Menu from "@/components/_layout/partials/Menu";
import JsonLd from "@/components/seo/JsonLd";
import { siteSchema } from "@/lib/structured-data";
import { siteConfig } from "@/site.config";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "Node.js",
    "web development",
    siteConfig.name,
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Browser extensions inject attributes onto body before hydration;
          this suppresses that diff on this element only. */}
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <JsonLd data={siteSchema} />
        <Menu />
        {children}
      </body>
    </html>
  );
}
