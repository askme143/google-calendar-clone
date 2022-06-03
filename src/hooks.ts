import React, {useEffect, useRef} from "react";

export function useOutSideClick<T>(
    onClickOutside: () => any,
    onClickInside: () => any,
): React.MutableRefObject<T> {
  const ref = useRef<HTMLElement|null>(null);

  useEffect(() => {
    function handleCalendarClick(event: MouseEvent) {
      const target = event.target;
      if (target instanceof Node) {
        if (ref && ref.current && !ref.current.contains(target)) {
        // Click outside of the calendar.
          onClickOutside();
          return;
        }
      }
      onClickInside();
    }

    document.addEventListener("mousedown", handleCalendarClick);
    return () => {
      document.removeEventListener("mousedown", handleCalendarClick);
    };
  }, [ref]);

  return ref as unknown as React.MutableRefObject<T>;
}
