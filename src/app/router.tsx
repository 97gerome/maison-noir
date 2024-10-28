import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/projects", Component: Projects },
  { path: "/contact", Component: Contact },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
