import tw, { styled, css } from 'twin.macro';

type MenuProps = {
  open: boolean;
};

// header styles
export const StyledHeader = styled.header`
  ${tw`bg-blueGray-900 text-white font-sans flex justify-between items-center text-2xl px-8 relative`}
  height:6.25rem;
`;
const dividerStyle = css`
  :after {
    content: '';
    display: block;
    height: 1px;
    width: 70%;
    background: rgba(255, 255, 255, 10%);
    position: absolute;
  }
`;
export const StyledNav = tw.nav`w-80 h-full flex justify-between items-center relative `;
export const StyledMenu = styled.ul<MenuProps>`
  ${tw`flex-1 flex flex-row justify-between`}
  @media screen and (max-width: 768px) {
    width: 220px;
    height: 200px;
    ${tw`flex flex-col justify-center items-center rounded-2xl absolute top-full left-full bg-bg transform transition mt-2`}
    ${({ open }) => (open ? tw`opacity-100 -translate-x-full` : tw`opacity-0 translate-x-0`)}
      ${({ open }) => open && dividerStyle}
      li:first-of-type {
      ${tw`mb-12`};
    }
  }
`;
export const StyledBurger = styled.button<MenuProps>`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  ${tw`flex md:hidden`}
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: #effffa;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => (open ? `rotate(45deg)` : `rotate(0)`)};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? `0` : `1`)};
      transform: ${({ open }) => (open ? `translateX(20px)` : `translateX(0)`)};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => (open ? `rotate(-45deg)` : `rotate(0)`)};
    }
  }
`;
// header styles
