import { ReactNode, useState } from "react";
import { motion, Variants } from "framer-motion";

type ButtonProps = {
  text: string;
  leftIcon: ReactNode;
  rightIcon: ReactNode;
};
export function Button({ text, leftIcon, rightIcon }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const variants: Variants = {
    nonScaled: { height: 0, width: 0 },
    scaled: { height: "2rem", width: "2rem" },
  };

  const handleHover = () => {
    setIsHovered((previous) => !previous);
  };

  return (
    <button onMouseOver={handleHover} onMouseOut={handleHover} className="flex">
      <motion.span variants={variants} animate={isHovered ? "scaled" : "nonScaled"} className={`duraiton-200 flex items-center justify-center aspect-square rounded-full bg-gray-950 text-white`}>
        {leftIcon}
      </motion.span>
      <span className="text-sm px-4 py-1.5 bg-gray-950 text-white rounded-full">{text}</span>
      <motion.span variants={variants} animate={isHovered ? "nonScaled" : "scaled"} className={"duraiton-200 flex items-center justify-center aspect-square rounded-full bg-gray-950 text-white"}>
        {rightIcon}
      </motion.span>
    </button>
  );
}
