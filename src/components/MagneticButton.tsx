import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import type { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const MagneticButton = ({
  children,
  href,
  type,
  disabled,
  className = "",
  onClick,
}: MagneticButtonProps) => {
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } =
    useMagnetic(0.25);

  const Comp = href ? "a" : "button";

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: "inline-block" }}
    >
      <Comp
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        href={href}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={className}
      >
        {children}
      </Comp>
    </motion.div>
  );
};

export default MagneticButton;
