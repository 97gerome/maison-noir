import { createContext } from "react";
import type { CursorContext } from "../types/Context.types";

const CursorContext = createContext<CursorContext>({
  position: { x: 0, y: 0 },
  isHovering: false,
  handleHoverStart: () => {},
  handleHoverEnd: () => {},
});

export default CursorContext;
