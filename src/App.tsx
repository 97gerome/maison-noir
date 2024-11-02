import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App: FC = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />;
    </div>
  );
};

export default App;
