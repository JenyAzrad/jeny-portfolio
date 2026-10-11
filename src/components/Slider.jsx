import { useEffect, useState } from "react";
import { useContent } from "../i18n";

// Image slider: fades between images, auto-plays, pauses on mouse hover or keyboard focus
export default function Slider({ images, alt, interval = 4000 }) {
  const ui = useContent().ui;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = images.length;

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), interval);
    return () => clearInterval(t);
  }, [paused, n, interval]);

  const go = (d) => setI((x) => (x + d + n) % n);
  const mouse = (v) => (e) => e.pointerType === "mouse" && setPaused(v);

  return (
    <div
      className="shot sl"
      role="group"
      aria-roledescription="carousel"
      aria-label={alt}
      onPointerEnter={mouse(true)}
      onPointerLeave={mouse(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {images.map((src, k) => (
        <img
          key={k}
          src={src}
          alt={ui.pageAlt(alt, k + 1, n)}
          className={k === i ? "on" : ""}
          aria-hidden={k !== i}
          loading={k === 0 ? "eager" : "lazy"}
        />
      ))}
      <button className="sl-btn prev" onClick={() => go(-1)} aria-label={ui.prev}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 5l-7 7 7 7" /></svg></button>
      <button className="sl-btn next" onClick={() => go(1)} aria-label={ui.next}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 5l7 7-7 7" /></svg></button>
      <div className="sl-dots">
        {images.map((_, k) => (
          <button key={k} className={k === i ? "on" : ""} onClick={() => setI(k)} aria-label={ui.show(k + 1)} />
        ))}
      </div>
    </div>
  );
}
