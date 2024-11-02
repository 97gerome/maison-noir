import { AnimationProps, motion } from "framer-motion";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const navLinkInitial: AnimationProps["initial"] = {
  opacity: 0,
  y: 25,
};

const Nav: FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <motion.a
            className="nav__link"
            onClick={() => navigate("/")}
            initial={navLinkInitial}
          >
            Home
          </motion.a>
        </li>
        <li className="nav__item">
          <motion.a
            className="nav__link"
            onClick={() => navigate("/about")}
            initial={navLinkInitial}
          >
            About
          </motion.a>
        </li>
        <li className="nav__item">
          <motion.a
            className="nav__link"
            onClick={() => navigate("/projects")}
            initial={navLinkInitial}
          >
            Projects
          </motion.a>
        </li>
        <li className="nav__item">
          <motion.a
            className="nav__link"
            onClick={() => navigate("/contact")}
            initial={navLinkInitial}
          >
            Contact
          </motion.a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
