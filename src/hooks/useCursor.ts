import { useContext } from "react";
import CursorContext from "../contexts/CursorContext";

const useCursor = () => {
  return useContext(CursorContext);
};

export default useCursor;
