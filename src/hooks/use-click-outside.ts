import { MutableRefObject, useEffect } from "react";

export const useClickOutside = ({
  ref,
  toggle,
}: {
  ref: MutableRefObject<any>;
  toggle: VoidFunction;
}) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event?.target)) {
        toggle();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};
