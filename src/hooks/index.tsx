import { MutableRefObject, useEffect } from 'react';

export function useOnClickOutside({ refMenu, refBurger, callback }): void {
  useEffect(() => {
    const listener = (event: MouseEvent): void => {
      event.preventDefault();
      if (refMenu.current?.contains(event.target as Node) || refBurger.current?.contains(event.target as Node)) {
        return;
      }
      callback();
    };
    document.addEventListener(`mousedown`, listener);
    return () => {
      document.removeEventListener(`mousedown`, listener);
    };
  }, [refMenu.current, refBurger.current]);
}
export function useScrollEnd(ref: MutableRefObject<HTMLElement>) {
  useEffect(() => {
    const listener = () => {
      const { offsetHeight, scrollHeight } = ref.current;
      const scrollTop = Math.ceil(ref.current.scrollTop);
      if (scrollTop + offsetHeight >= scrollHeight) {
        ref.current.parentElement.classList.add(`scrollEnd`);
      } else {
        ref.current.parentElement.classList.remove(`scrollEnd`);
      }
    };
    ref.current.addEventListener(`scroll`, listener);
    return () => {
      ref.current.removeEventListener(`scroll`, listener);
    };
  }, [ref.current]);
}
