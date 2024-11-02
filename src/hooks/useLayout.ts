import { useOutletContext } from "react-router-dom";

export interface LayoutContext {
  isHeaderVisible: boolean;
  toggleIsHeaderVisible: () => void;
}

const useLayout = () => {
  return useOutletContext<LayoutContext>();
};

export default useLayout;
