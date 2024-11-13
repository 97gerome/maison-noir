import { FC, useEffect } from "react";
import { motion, useAnimate, useMotionValue, usePresence } from "framer-motion";
import { CursorPosition } from "../types/Cursor.types";

interface CursorProps {
  position: CursorPosition;
  isHovering: boolean;
}

const Cursor: FC<CursorProps> = (props) => {
  const { position, isHovering } = props;

  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position, x, y]);

  useEffect(() => {
    if (isHovering) {
      animate(scope.current, { scale: 2, strokeWidth: 0.5 });
      animate("#cursor_inner_diamond", { opacity: 0 });
    } else {
      animate(scope.current, { scale: 1, strokeWidth: 1 });
      animate("#cursor_inner_diamond", { opacity: 1 });
    }
  }, [animate, scope, isHovering]);

  useEffect(() => {
    if (isPresent) {
      const animateEntrance = async () => {
        await animate(scope.current, { scale: 1 }, { ease: "backIn" });
      };
      animateEntrance();
    } else {
      const animateExit = async () => {
        await animate(scope.current, { scale: 0 }, { ease: "backOut" });
        safeToRemove();
      };
      animateExit();
    }
  }, [isPresent, safeToRemove, animate, scope]);

  return (
    <motion.svg
      ref={scope}
      className="cursor"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ x, y, scale: 0 }}
    >
      <motion.path d="M1 16L16 1L31 16L16 31L1 16Z" stroke="#F2F2F2" />
      <motion.path
        id="cursor_inner_diamond"
        d="M13 16L16 13L19 16L16 19L13 16Z"
        fill="#F2F2F2"
        opacity={1}
      />
    </motion.svg>
  );
};

export default Cursor;
