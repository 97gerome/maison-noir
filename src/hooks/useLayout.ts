import { useOutletContext } from "react-router-dom";
import { LayoutContext } from "../types/Context.types";

const useLayout = () => {
  return useOutletContext<LayoutContext>();
};

export default useLayout;
