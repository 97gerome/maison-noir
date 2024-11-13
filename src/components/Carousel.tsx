import clsx from "clsx";
import { motion, PanInfo, useAnimate } from "framer-motion";
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import useCursor from "../hooks/useCursor";

export interface CarouselProps<T> {
  className: string;
  data: Array<T>;
  renderComponent: (item: T) => ReactElement;
}

type ControlType = "prev" | "next";

function Carousel<T>({ data, renderComponent, className }: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [scope, animate] = useAnimate();

  const { handleHoverStart, handleHoverEnd } = useCursor();

  const pages = useMemo(() => Math.ceil(data.length / 3), [data]);

  const isControlDisabled = useCallback(
    (type: ControlType) => {
      if (type === "prev") return currentIndex <= 0;
      else return currentIndex >= pages - 1;
    },
    [currentIndex, pages]
  );

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -150 && currentIndex < pages - 1)
      setCurrentIndex((current) => current + 1);
    else if (info.offset.x > 150 && currentIndex > 0)
      setCurrentIndex((current) => current - 1);
  };

  const handleControlClick = (type: ControlType) => {
    if (type === "prev") {
      if (currentIndex === 1) handleHoverEnd();

      setCurrentIndex((current) => current - 1);
    } else if (type === "next") {
      if (currentIndex === pages - 2) handleHoverEnd();

      setCurrentIndex((current) => current + 1);
    }
  };

  useEffect(() => {
    animate(
      scope.current,
      { translateX: `-${currentIndex * 100}%` },
      { ease: "easeInOut" }
    );
  }, [scope, animate, currentIndex]);

  return (
    <div className={clsx("carousel", className)}>
      <div className="carousel__wrapper--list">
        <motion.ul
          ref={scope}
          className="carousel__list"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          {data.map((current, index) => (
            <li key={index} className="carousel__item">
              {renderComponent(current)}
            </li>
          ))}
        </motion.ul>
      </div>
      <div className="carousel__container--controls">
        <button
          className="carousel__control carousel__control--prev"
          onClick={() => handleControlClick("prev")}
          disabled={isControlDisabled("prev")}
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
        >
          <svg
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke={isControlDisabled("prev") ? "#BDBDBD" : "#121212"}>
              <rect
                x="-0.707107"
                width="39"
                height="39"
                transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 55.3615 27.7843)"
              />
              <path d="M25.9685 24.0001L21.9685 28.0001M25.9685 32.0001L21.9685 28.0001M21.9685 28.0001H35.5685" />
            </g>
          </svg>
        </button>
        <button
          className="carousel__control"
          onClick={() => handleControlClick("next")}
          disabled={isControlDisabled("next")}
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
        >
          <svg
            width="58"
            height="57"
            viewBox="0 0 58 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke={isControlDisabled("next") ? "#BDBDBD" : "#121212"}>
              <rect
                x="1.27571"
                y="28.2843"
                width="39"
                height="39"
                transform="rotate(-45 1.27571 28.2843)"
              />
              <path d="M31.1687 24.0001L35.1687 28.0001M31.1687 32.0001L35.1687 28.0001M35.1687 28.0001H21.5687" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
