import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Micro SaaS MVPs",
    description: "Turning ideas into functional products in record time.",
  },
  {
    title: "Conversion Focused",
    description: "High-end websites designed to turn visitors into customers.",
  },
  {
    title: "Internal Tools",
    description: "Custom dashboards and workflow tools for your team.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 py-32 md:px-16">
      <AnimatedSection className="mb-16">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Services
        </h2>
      </AnimatedSection>

      <div ref={ref} className="grid gap-6 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: i * 0.15,
            }}
            className="rounded-2xl border border-subtle bg-card-glass p-8 transition-colors hover:bg-accent/30"
          >
            <h3 className="mb-3 text-xl font-medium text-foreground">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
