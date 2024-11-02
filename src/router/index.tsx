import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", index: true, Component: Home },
      { path: "/about", Component: About },
      { path: "/projects", Component: Projects },
      { path: "/contact", Component: Contact },
    ],
  },
]);

export default router;
