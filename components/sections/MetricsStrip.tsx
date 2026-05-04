"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";

interface Metric {
  value: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { value: 30, suffix: "%+", label: "Workflow Reduction" },
  { value: 40, suffix: "%", label: "LLM Accuracy Gain" },
  { value: 35, suffix: "%", label: "Engagement Increase" },
  { value: 3, suffix: "+", label: "Years Enterprise Experience" },
];

function useAnimatedCounter(target: number, active: boolean, instant: boolean) {
  const [count, setCount] = useState(instant ? target : 0);

  useEffect(() => {
    if (!active) return;
    if (instant) {
      setCount(target);
      return;
    }

    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target, instant]);

  return count;
}

function MetricItem({
  metric,
  index,
}: {
  metric: Metric;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();
  const count = useAnimatedCounter(metric.value, isInView, reducedMotion);

  return (
    <motion.div
      ref={ref}
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center px-6 py-8 flex-1 min-w-[140px]"
    >
      <span className="text-3xl sm:text-4xl font-bold text-text-primary tabular-nums">
        {count}
        {metric.suffix}
      </span>
      <span className="text-xs sm:text-sm text-text-muted mt-2 leading-snug max-w-[130px]">
        {metric.label}
      </span>
    </motion.div>
  );
}

export function MetricsStrip() {
  return (
    <section aria-label="Key impact metrics" className="border-y border-border bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-around divide-x divide-border">
          {metrics.map((metric, i) => (
            <MetricItem key={metric.label} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
