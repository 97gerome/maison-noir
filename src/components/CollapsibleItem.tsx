import { FC, ReactNode, useCallback, useLayoutEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import useCursor from "../hooks/useCursor";

export interface CollapsibleItemProps {
  number?: number;
  title: string;
  body: ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
  isLastItem?: boolean;
}

const CollapsibleItem: FC<CollapsibleItemProps> = ({
  number,
  title,
  body,
  isOpen = false,
  onClick,
  isLastItem = false,
}) => {
  const bodyRef = useRef<HTMLParagraphElement | null>(null);

  const [scope, animate] = useAnimate();

  const { handleHoverStart, handleHoverEnd } = useCursor();

  const formatNumber = (number: number): string => {
    const str = number.toString();

    return str.padStart(2, "0");
  };

  const animateStepExpand = useCallback(async () => {
    await Promise.all([
      animate(
        ".collapsible-item__bullet",
        { scale: 1, fill: "#121212" },
        { ease: "easeInOut" }
      ),
      animate(
        ".collapsible-item__number",
        { y: 0, opacity: 1 },
        { delay: 0.2 }
      ),
    ]);
  }, [animate]);

  const animateStepShrink = useCallback(async () => {
    await Promise.all([
      animate(".collapsible-item__number", { y: 5, opacity: 0 }),
      animate(
        ".collapsible-item__bullet",
        { scale: 0.3, fill: "#F2F2F2" },
        { ease: "easeInOut", delay: 0.2 }
      ),
    ]);
  }, [animate]);

  const handleMouseEnter = useCallback(() => {
    handleHoverStart();

    if (!isOpen) animateStepExpand();
  }, [handleHoverStart, isOpen, animateStepExpand]);

  const handleMouseLeave = useCallback(() => {
    handleHoverEnd();

    if (!isOpen) animateStepShrink();
  }, [handleHoverEnd, isOpen, animateStepShrink]);

  useLayoutEffect(() => {
    const animateItemOpen = async () => {
      animateStepExpand();
      await animate(".collapsible-item__wrapper-body", {
        height: bodyRef.current?.offsetHeight,
      });
      animate(
        ".collapsible-item__body",
        {
          scale: 1,
          opacity: 1,
        },
        { ease: "easeInOut" }
      );
    };

    const animateItemClose = async () => {
      await animate(
        ".collapsible-item__body",
        {
          scale: 0.95,
          opacity: 0,
        },
        { ease: "easeInOut" }
      );
      animate(".collapsible-item__wrapper-body", { height: 0 });
      animateStepShrink();
    };
    if (isOpen) animateItemOpen();
    else animateItemClose();
  }, [isOpen, animate, bodyRef, animateStepExpand, animateStepShrink]);

  return (
    <motion.li ref={scope} className="collapsible-item">
      <div className="collapsible-item__container--step">
        <svg
          className="collapsible-item__step"
          width="85"
          height="85"
          viewBox="0 0 85 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            className="collapsible-item__bullet"
            d="M0.707107 42.4264L42.4264 0.707107L84.1457 42.4264L42.4264 84.1457L0.707107 42.4264Z"
            stroke="#F2F2F2"
            fill="#F2F2F2"
            style={{
              scale: 0.3,
            }}
          />
          {number && (
            <motion.text
              className="collapsible-item__number"
              fill="#F2F2F2"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              letterSpacing="0em"
              opacity={0}
              y={5}
            >
              <tspan x="18" y="59.08">
                {formatNumber(number)}
              </tspan>
            </motion.text>
          )}
        </svg>
        {!isLastItem && <motion.div className="collapsible-item__track" />}
      </div>
      <div className="collapsible-item__content">
        <h4
          className="collapsible-item__title"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
        >
          {title}
        </h4>
        <motion.div className="collapsible-item__wrapper-body">
          <motion.p
            ref={bodyRef}
            className="collapsible-item__body"
            style={{ scale: 0.95, opacity: 0 }}
          >
            {body}
          </motion.p>
        </motion.div>
      </div>
    </motion.li>
  );
};

export default CollapsibleItem;
