import { useEffect } from 'react';

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
