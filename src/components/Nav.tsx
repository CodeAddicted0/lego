import { FC, useState, useEffect, useRef } from "react";
import { FcHome } from "react-icons/fc";
import { useMediaQuery } from "react-responsive";
import { AiOutlineMenu } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import { useAppDispatch } from "../redux/reduxHooks";
import { setNavHeight } from "../redux/navHeight";

const Nav: FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (navRef.current) {
      if (typeof window !== "undefined") {
        dispatch(
          setNavHeight(parseInt(window.getComputedStyle(navRef.current).height))
        );
      }
    }
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <nav
        className="px-8 flex justify-between items-center py-8 md:px-20 lg:px-28 sticky  border-gray-500 top-0"
        style={{
          zIndex: 4,
          background: "rgba(6, 10, 17, 1)",
          transition: "0.4s",
        }}
        ref={navRef}
      >
        <h1 className="font-openSans text-white font-bold text-2xl flex items-center space-x-3">
          <FcHome /> <span>Lego</span>
        </h1>

        {isMobile && hasMounted && (
          <button onClick={() => setNavOpen(true)} aria-label="menu">
            <AiOutlineMenu color="#fff" fontSize="2rem" />
          </button>
        )}

        {!isMobile && hasMounted && (
          <ul className="flex space-x-8 lg:space-x-16 items-center font-medium text-dim-white">
            <li>
              <a href="#properties">Properties</a>
            </li>
            <li>
              <a href="#special">Special</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </nav>
      {isMobile && hasMounted && (
        <div
          className={`fixed ${
            navOpen ? "left-0" : "left-full"
          } from-gray-800 to-gray-900 bg-gradient-to-br py-8 top-0 h-full w-full flex-col flex items-end px-8 justify-center transition-all duration-300`}
          style={{ zIndex: 11 }}
        >
          <div className="flex justify-between items-center w-full">
            <h1 className="font-openSans text-white font-bold text-2xl flex items-center space-x-3">
              <FcHome /> <span>Lego</span>
            </h1>
            <button onClick={() => setNavOpen(false)} aria-label="close">
              <VscClose color="#fff" fontSize="2rem" />
            </button>
          </div>
          <ul className="flex flex-col h-full w-full space-y-8 items-center font-medium justify-center text-dim-white text-2xl">
            <li onClick={() => setNavOpen(false)}>
              <a href="#properties">Properties</a>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <a href="#special">Special</a>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
