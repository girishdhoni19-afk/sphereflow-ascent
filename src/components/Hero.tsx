import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
      >
        Building services that create value.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
        className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
      >
        From MVPs to internal tools and conversion-focused websites. Fast execution.
      </motion.p>
      <motion.a
        href="#brief"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.7 }}
        className="mt-10 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
      >
        Start a Project
      </motion.a>
    </section>
  );
};

export default Hero;
