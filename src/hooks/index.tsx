import { useEffect } from 'react';
import { RefObject } from 'preact';
import { useQuery } from 'react-query';

export function useOnClickOutside({ refMenu, refBurger, callback }): void {
  useEffect(() => {
    const listener = (event: MouseEvent): void => {
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
export function useScrollEnd(ref: RefObject<HTMLElement>) {
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
      if (ref.current) {
        ref.current.removeEventListener(`scroll`, listener);
      }
    };
  }, [ref.current]);
}
export function getAllEpisodes() {
  return fetch(`http://localhost:3000/api/episodes/watch`).then((res) => res.json());
}
export function useGetAllEpisodes() {
  return useQuery(`getAllEpisodes`, getAllEpisodes);
}
