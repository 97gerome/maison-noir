import { AnimationProps, motion } from "framer-motion";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useCursor from "../hooks/useCursor";

const pages: Array<{ title: string; url: string }> = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
  { title: "Contact", url: "/contact" },
];

const navLinkInitial: AnimationProps["initial"] = {
  opacity: 0,
  y: 25,
};

const Nav: FC = () => {
  const { handleHoverEnter, handleHoverLeave } = useCursor();

  const navigate = useNavigate();

  return (
    <nav className="nav">
      <ul className="nav__list">
        {pages.map(({ title, url }) => (
          <li key={url} className="nav__item">
            <motion.a
              className="nav__link"
              onClick={() => navigate(url)}
              initial={navLinkInitial}
              onHoverStart={handleHoverEnter}
              onHoverEnd={handleHoverLeave}
            >
              {title}
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
