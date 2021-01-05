import { useState, useRef, useCallback } from 'react';
import { StyledBurger, StyledNav, StyledMenu } from '@/styles/index';
import { useOnClickOutside } from '@/hooks';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const refMenu = useRef<HTMLUListElement>(null);
  const refBurger = useRef<HTMLButtonElement>(null);
  useOnClickOutside({ refMenu, refBurger, callback: useCallback(() => setOpen(false), [open]) });
  return (
    <StyledNav>
      <StyledBurger ref={refBurger} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledMenu ref={refMenu} open={open}>
        <li>
          <a href="#episodes">Episodes</a>
        </li>
        <li>
          <a href="#charcters">Characters</a>
        </li>
      </StyledMenu>
    </StyledNav>
  );
};

export default Menu;
