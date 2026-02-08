import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portfolioSyncup from "@/assets/portfolio-syncup.png";
import portfolioLaunchlist from "@/assets/portfolio-launchlist.png";
import portfolioTaskflow from "@/assets/portfolio-taskflow.png";

const projects = [
  {
    title: "SyncUp",
    description:
      "Turn meeting chaos into clear action. AI-powered meeting summaries with automatic action items and seamless team alignment—built to make every meeting actually productive.",
    image: portfolioSyncup,
    link: "https://syncupflow.lovable.app",
  },
  {
    title: "LaunchList",
    description:
      "Ship your waitlist in 30 seconds. Beautiful landing pages, email collection, and launch countdown—everything indie founders need to build hype before launch day.",
    image: portfolioLaunchlist,
    link: "https://launchlistflow.lovable.app",
  },
  {
    title: "TaskFlow",
    description:
      "Simple task management that teams actually use. Clean Kanban boards with drag-and-drop functionality, built for teams who need clarity without the complexity of enterprise tools.",
    image: portfolioTaskflow,
    link: "https://taskflow19.lovable.app",
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
            target="_blank"
            rel="noopener noreferrer"
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
