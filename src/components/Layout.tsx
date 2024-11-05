import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { LayoutContext } from "../types/Context.types";

const Layout: FC = () => {
  const [isHeaderVisible, setisHeaderVisible] = useState<boolean>(false);

  const toggleIsHeaderVisible = (): void => {
    setisHeaderVisible((current) => !current);
  };

  return (
    <div className="layout">
      {isHeaderVisible && <Header />}
      <main>
        <Outlet
          context={
            { isHeaderVisible, toggleIsHeaderVisible } satisfies LayoutContext
          }
        />
      </main>
    </div>
  );
};

export default Layout;
