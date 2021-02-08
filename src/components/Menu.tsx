import { useState, useRef, useCallback } from 'preact/hooks';
import { StyledBurger, StyledNav, StyledMenu } from '@/styles/index';
import { useOnClickOutside } from '@/hooks';
import { BlockReveal } from './animations';

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
      <StyledBurger ref={refBurger} open={open} onClick={() => setOpen(!open)} aria-label="open the menu">
        <div aria-hidden="true" />
        <div aria-hidden="true" />
        <div aria-hidden="true" />
      </StyledBurger>
      <StyledMenu ref={refMenu} open={open}>
        <li>
          <BlockReveal delay={0.25}>
            <button type="button" onClick={() => scrollIntoView(`episodes`)}>
              Episodes
            </button>
          </BlockReveal>
        </li>
        <li>
          <BlockReveal delay={0.5}>
            <button type="button" onClick={() => scrollIntoView(`characters`)}>
              Characters
            </button>
          </BlockReveal>
        </li>
      </StyledMenu>
    </StyledNav>
  );
}
