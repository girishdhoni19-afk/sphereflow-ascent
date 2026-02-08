import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    title: "Aether Analytics",
    description: "A real-time analytics dashboard for SaaS businesses.",
    image: portfolio1,
    link: "#",
  },
  {
    title: "Meridian Commerce",
    description: "High-converting e-commerce experience for a luxury brand.",
    image: portfolio2,
    link: "#",
  },
  {
    title: "Vertex Platform",
    description: "Internal workflow tool serving 500+ enterprise users.",
    image: portfolio3,
    link: "#",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 py-32 md:px-16">
      <AnimatedSection className="mb-16">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Selected Work
        </h2>
      </AnimatedSection>

      <div ref={ref} className="grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: i * 0.15,
            }}
            className="group block overflow-hidden rounded-2xl border border-subtle bg-card-glass transition-colors hover:bg-accent/30"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-medium text-foreground group-hover:underline">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
