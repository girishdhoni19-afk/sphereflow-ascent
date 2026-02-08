import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.h1
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        className="max-w-3xl text-4xl font-semibold leading-tight tracking-widest text-foreground md:text-6xl lg:text-7xl"
      >
        Building services that create value.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.8 }}
        className="mt-6 max-w-xl text-lg tracking-wide text-muted-foreground md:text-xl"
      >
        From MVPs to internal tools and conversion-focused websites. Fast execution.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.0 }}
        className="mt-10"
      >
        <MagneticButton
          href="#brief"
          className="rounded-full bg-foreground px-8 py-3.5 text-sm font-medium tracking-wider text-background transition-opacity hover:opacity-80"
        >
          Start a Project
        </MagneticButton>
      </motion.div>
    </section>
  );
};

export default Hero;
