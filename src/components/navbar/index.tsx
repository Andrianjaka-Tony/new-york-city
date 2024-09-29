import { useState } from "react";
import Menu from "../menu";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenu((previous: boolean) => !previous);
  };

  return (
    <>
      <nav className="fixed z-10 w-screen top-0 left-0 py-3 px-5 flex justify-center items-center">
        <button onClick={toggleMenu} className="cursor-pointer">
          Menu
        </button>
      </nav>
      <AnimatePresence mode="wait">{isMenu && <Menu toggleMenu={toggleMenu} />}</AnimatePresence>
    </>
  );
}
