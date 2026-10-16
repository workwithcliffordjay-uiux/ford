// Escapes `<` so a value can never break out of the script tag.
const serialize = (data) => JSON.stringify(data).replace(/</g, "\\u003c");

export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: required for JSON-LD
      dangerouslySetInnerHTML={{ __html: serialize(data) }}
    />
  );
}
