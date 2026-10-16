"use client";

/**
 * Anchor that scrolls to an in-page section without writing the hash to the URL.
 * The href is kept so the link stays real: crawlable, focusable, and still
 * working (as a normal jump) if JS hasn't loaded.
 */
export default function ScrollLink({ href, children, ...props }) {
  const handleClick = (event) => {
    // Let the browser handle new-tab / new-window clicks normally.
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();

    // No `behavior` on purpose: it inherits `scroll-behavior` from the
    // stylesheet, so the prefers-reduced-motion guard still applies.
    target.scrollIntoView({ block: "start" });

    // An anchor normally moves focus to the target; keep that for keyboard users.
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
