import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  to,
  suffix = "",
  duration = 2200,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      if (prefersReduced) {
        setValue(to);
        setDone(true);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(eased * to));
        if (p < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setValue(to);
          setDone(true);
        }
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${to}${suffix}`}>
      <span className="tabular-nums">{value}</span>
      <span
        className="inline-block transition-opacity duration-500"
        style={{ opacity: done ? 1 : 0 }}
      >
        {suffix}
      </span>
    </span>
  );
}
