import { useState, useRef, useCallback } from 'react';
import { StyledBurger, StyledNav, StyledMenu } from '@/styles/index';
import { useOnClickOutside } from '@/hooks';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const refMenu = useRef<HTMLUListElement>(null);
  const refBurger = useRef<HTMLButtonElement>(null);
  useOnClickOutside({ refMenu, refBurger, callback: useCallback(() => setOpen(false), [open]) });
  const scrollIntoView = useCallback((id: string) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: `smooth` });
  }, []);
  return (
    <StyledNav>
      <StyledBurger ref={refBurger} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledMenu ref={refMenu} open={open}>
        <li>
          <button type="button" onClick={() => scrollIntoView(`episodes`)}>
            Episodes
          </button>
        </li>
        <li>
          <button type="button" onClick={() => scrollIntoView(`characters`)}>
            Characters
          </button>
        </li>
      </StyledMenu>
    </StyledNav>
  );
}
