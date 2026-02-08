import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-16"
    >
      <span className="text-lg font-semibold tracking-tight text-foreground">
        SphereFlow
      </span>
      <a
        href="#brief"
        className="rounded-full border border-subtle bg-secondary px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
      >
        Get in Touch
      </a>
    </motion.nav>
  );
};

export default Navbar;
