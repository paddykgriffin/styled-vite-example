import { useEffect, useState } from "react";

interface ScrollTriggerProps {
  disableHysteresis?: boolean;
  target?: Node | Window;
  threshold?: number;
}

const useScrollTrigger = ({
  disableHysteresis = false,
  target = window,
  threshold = 100,
}: ScrollTriggerProps = {}) => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset =
        (target instanceof Window
          ? target.scrollY
          : (target as HTMLElement).scrollTop) || 0;
      if (disableHysteresis) {
        setTrigger(offset > threshold);
      } else {
        setTrigger((prev) =>
          offset > threshold ? true : offset < threshold ? false : prev,
        );
      }
    };

    target.addEventListener("scroll", handleScroll);
    return () => {
      target.removeEventListener("scroll", handleScroll);
    };
  }, [disableHysteresis, target, threshold]);

  return trigger;
};

export default useScrollTrigger;
