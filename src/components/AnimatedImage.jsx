import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionImg = motion.img;

export default function AnimatedImage({
  src,
  alt,
  wrapperClassName,
  imageClassName,
  style,
  floating = true,
  floatingDistance = 8,
  floatingDelay = 0,
  disabled = false,
}) {
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolling(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 140);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <MotionDiv style={disabled ? undefined : style} className={wrapperClassName}>
      <MotionImg
        src={src}
        alt={alt}
        className={imageClassName}
        animate={!disabled && floating && !isScrolling ? { y: [0, -floatingDistance, 0] } : { y: 0 }}
        transition={
          !disabled && floating && !isScrolling
            ? {
                duration: 3.6,
                delay: floatingDelay,
                ease: "easeInOut",
                repeat: Infinity,
              }
            : { duration: 0.3, ease: "easeOut" }
        }
      />
    </MotionDiv>
  );
}