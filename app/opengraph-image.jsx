import { ImageResponse } from "next/og";
import { siteConfig } from "@/site.config";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated at build time, so the site ships a real og:image without a static asset.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#ffffff",
        padding: "80px",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 24,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#6b7280",
        }}
      >
        {siteConfig.name}
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 76,
          fontWeight: 600,
          letterSpacing: "-0.04em",
          lineHeight: 1.1,
          color: "#000000",
        }}
      >
        Full-stack developer building scalable web systems.
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "#9ca3af",
        }}
      >
        Next.js · React · Node.js · Tailwind CSS
      </div>
    </div>,
    size,
  );
}
