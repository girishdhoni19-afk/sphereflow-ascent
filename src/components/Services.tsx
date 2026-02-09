import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Micro-SaaS MVPs",
    description: "Design and development of focused MVPs built to validate ideas and reach market efficiently.",
  },
  {
    title: "Conversion-Focused Websites",
    description: "High-performance marketing websites designed to convert attention into revenue.",
  },
  {
    title: "Internal Tools & Dashboards",
    description: "Purpose-built internal tools that streamline operations and support scalable teams.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 py-32 md:px-16">
      <AnimatedSection className="mb-16">
        <h2 className="text-3xl font-semibold tracking-widest text-foreground md:text-4xl">
          Services
        </h2>
      </AnimatedSection>

      <div ref={ref} className="grid gap-6 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: i * 0.15,
            }}
            className="shimmer-hover rounded-2xl border border-subtle bg-card-glass p-8 transition-colors hover:bg-accent/30"
          >
            <h3 className="mb-3 text-xl font-medium tracking-wider text-foreground">
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
