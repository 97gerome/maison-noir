import { FC, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import Cursor from "./components/Cursor";
import CursorContext from "./contexts/CursorContext";
import { AnimatePresence } from "framer-motion";
import { CursorPosition } from "./types/Cursor.types";

const App: FC = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

  const [isCursorVisible, setIsCursorVisible] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleHoverEnter = (): void => {
    setIsHovering(true);
  };

  const handleHoverLeave = (): void => {
    setIsHovering(false);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent): void => {
      if (!isCursorVisible) {
        setIsCursorVisible(true);
      }

      setCursorPosition({ x: e.clientX - 16, y: e.clientY - 16 });
    };

    const onMouseLeave = (): void => {
      setIsCursorVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isCursorVisible]);

  return (
    <div className="app">
      <AnimatePresence>
        {isCursorVisible && (
          <Cursor
            key="cursor"
            position={cursorPosition}
            isHovering={isHovering}
          />
        )}
        <CursorContext.Provider
          value={{
            position: cursorPosition,
            isHovering,
            handleHoverEnter,
            handleHoverLeave,
          }}
        >
          <RouterProvider router={router} />
        </CursorContext.Provider>
      </AnimatePresence>
    </div>
  );
};

export default App;
