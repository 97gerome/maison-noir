import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { LayoutContext } from "../types/Context.types";

const Layout: FC = () => {
  const [isHeaderVisible, setisHeaderVisible] = useState<boolean>(false);

  const showHeader = (): void => {
    setisHeaderVisible(true);
  };
  const hideHeader = (): void => {
    setisHeaderVisible(false);
  };

  return (
    <div className="layout">
      {isHeaderVisible && <Header />}
      <Outlet
        context={
          { isHeaderVisible, showHeader, hideHeader } satisfies LayoutContext
        }
      />
    </div>
  );
};

export default Layout;
