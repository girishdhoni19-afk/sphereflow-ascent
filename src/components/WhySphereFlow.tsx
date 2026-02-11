import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    title: "We don't build everything. We build the right thing.",
    body: "Most MVPs fail because they try to do too much. We force focus before a single feature is built.",
  },
  {
    title: "Clarity before code.",
    body: "If your idea is messy, we structure it. If it's bloated, we cut it. If it's vague, we define it.",
  },
  {
    title: "MVPs that actually launch.",
    body: "Real, usable products built to validate fast — not over-engineered prototypes.",
  },
  {
    title: "No meeting loops. No agency overhead.",
    body: "Direct communication. Clear decisions. Structured execution.",
  },
];

const WhySphereFlow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 py-32 md:px-16">
      <AnimatedSection className="mb-16">
        <h2 className="text-3xl font-semibold tracking-widest text-foreground md:text-4xl">
          Why SphereFlow
        </h2>
      </AnimatedSection>

      <ul ref={ref} className="grid gap-4 md:grid-cols-2">
        {reasons.map((reason, i) => (
          <motion.li
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: i * 0.12,
            }}
            className="shimmer-hover rounded-2xl border border-subtle bg-card-glass p-6"
          >
            <h3 className="mb-2 text-sm font-medium tracking-wide text-foreground">
              {reason.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {reason.body}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default WhySphereFlow;
