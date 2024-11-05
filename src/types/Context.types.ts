import { CursorPosition } from "./Cursor.types";

export interface LayoutContext {
  isHeaderVisible: boolean;
  toggleIsHeaderVisible: () => void;
}

export interface CursorContext {
  position: CursorPosition;
  isHovering: boolean;
  handleHoverEnter: () => void;
  handleHoverLeave: () => void;
}
