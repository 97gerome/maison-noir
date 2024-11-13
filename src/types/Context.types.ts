import { CursorPosition } from "./Cursor.types";

export interface LayoutContext {
  isHeaderVisible: boolean;
  showHeader: () => void;
  hideHeader: () => void;
}

export interface CursorContext {
  position: CursorPosition;
  isHovering: boolean;
  handleHoverStart: () => void;
  handleHoverEnd: () => void;
}
