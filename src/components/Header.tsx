import { AnimationProps, motion, stagger, useAnimate } from "framer-motion";
import Nav from "./Nav";
import { useEffect } from "react";

const logoDiamondInital: AnimationProps["initial"] = {
  pathLength: 0,
};

const logoLettersInitial: AnimationProps["initial"] = {
  opacity: 0,
};

const Header = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLogoEntrance = async () => {
      await animate(
        "#logo_diamond",
        { pathLength: 1 },
        { duration: 0.3, ease: "easeOut" }
      );
      await animate("#logo_letters", { opacity: 1 }, { ease: "easeOut" });
    };

    const animateNavEntrance = async () => {
      await animate(
        ".nav__link",
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: stagger(0.1), ease: "easeOut" }
      );
    };

    animateLogoEntrance();
    animateNavEntrance();
  }, [animate]);

  return (
    <header className="header" ref={scope}>
      <svg
        className="header__logo"
        width="59"
        height="59"
        viewBox="0 0 59 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          id="logo_diamond"
          x="1"
          y="29.2843"
          width="40"
          height="40"
          transform="rotate(-45 1 29.2843)"
          stroke="#AAAAAA"
          initial={logoDiamondInital}
        />
        <motion.path
          id="logo_letters"
          d="M29.48 40V18.688L19.4 35.52H18.888L8.808 18.688V40H8.168V17.28H8.68L19.144 34.752L29.608 17.28H30.12V40H29.48ZM32.2893 18.528V40H31.6493V17.28H32.1293L49.5053 39.072V17.28H50.1453V40H49.4093L32.2893 18.528Z"
          fill="#D2D2D2"
          initial={logoLettersInitial}
        />
      </svg>
      <Nav />
    </header>
  );
};

export default Header;
