import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-16"
    >
      <span className="text-lg font-semibold tracking-widest text-foreground">
        SphereFlow
      </span>
      <MagneticButton
        href="#brief"
        className="rounded-full border border-subtle bg-secondary px-5 py-2 text-sm font-medium tracking-wider text-foreground transition-colors hover:bg-accent"
      >
        Get in Touch
      </MagneticButton>
    </motion.nav>
  );
};

export default Navbar;
