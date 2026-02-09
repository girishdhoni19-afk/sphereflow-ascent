import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  "Senior-level execution with minimal overhead",
  "Clear communication and founder-aligned decisions",
  "Clean, maintainable codebases built to scale",
  "Products designed for real users and real outcomes",
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
            key={reason}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: i * 0.12,
            }}
            className="shimmer-hover rounded-2xl border border-subtle bg-card-glass p-6 text-sm leading-relaxed tracking-wide text-muted-foreground"
          >
            {reason}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default WhySphereFlow;
