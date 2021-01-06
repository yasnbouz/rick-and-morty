import tw, { styled, css } from 'twin.macro';

type MenuProps = {
  open: boolean;
};

// common styles
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
const overlayStyle = css`
  :after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(90deg, hsla(222, 47%, 11%, 100%) 0%, hsla(222, 47%, 11%, 90%) 100%);
  }
`;

const containerStyle = css`
  max-width: 90%;
  margin: 0 auto;
  @media (min-width: 86.25em) {
    max-width: 80rem;
  }
`;

// common styles

// header styles
export const StyledHeader = styled.header`
  ${tw`bg-blueGray-900 text-white flex justify-between items-center text-2xl relative`}
  height:6.25rem;
  ${containerStyle}
`;
export const StyledNav = tw.nav`w-72 h-full flex justify-between items-center relative `;
export const StyledMenu = styled.ul<MenuProps>`
  ${tw`flex-1 flex flex-row justify-between z-40`}
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

// hero styles

export const StyledHero = styled.section`
  position: relative;
  object-fit: cover;
  z-index: 1;
  padding: 4rem 0;
  ${overlayStyle};
`;
export const StyledHeroContainer = styled.div`
  ${tw`relative z-10 flex flex-col md:(flex-row)`};
  ${containerStyle}
`;
export const StyledPoster = styled.div`
  ${tw`mr-0 mb-5 md:(mr-10 mb-0 block)`}
  > div {
    /* margin: 0 auto; */
  }
`;
export const StyledContent = styled.div`
  ${tw`flex flex-col items-start text-white`}

  .title {
    ${tw`font-bold text-3xl mb-2 lg:text-5xl`}
    span {
      ${tw`font-normal text-xl opacity-60 lg:text-4xl`}
    }
  }
  .subTitle {
    ${tw`text-xs text-coolGray-400 font-bold mb-10 leading-6`}
    span {
      ${tw`mr-2 uppercase border-2 border-coolGray-400 rounded-sm px-2 py-px text-xs`}
    }
  }
  .overview {
    ${tw`font-semibold mb-4 text-xl lg:(text-2xl)`};
  }
  .description {
    ${tw`font-serif text-white text-base text-opacity-80 mb-10 lg:(text-lg )`}
    max-width:70ch;
  }
  .info {
    ${tw`flex flex-row flex-wrap gap-x-10 gap-y-5  mb-10 lg:(gap-x-14)`}
  }
  .creator {
    ${tw`flex flex-col`}
    h2 {
      ${tw`font-medium mb-2 text-lg lg:text-2xl`}
    }
    span {
      ${tw`font-normal text-base text-coolGray-400`}
    }
  }
  .rating {
    ${tw`flex flex-row items-start self-start lg:-mt-1`}
    > div {
      ${tw`w-6 h-6 lg:( w-8 h-8 )`}
    }
    p {
      ${tw`font-semibold text-xl tracking-widest ml-4 lg:(text-3xl)`}
    }
  }
  button {
    ${tw`border-2 rounded uppercase font-bold tracking-widest relative overflow-hidden hover:text-black`}
    width:200px;
    height: 48px;
    transition: color 0.25s 0s ease-in;
    :after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      background: #fff;
      position: absolute;
      top: 0;
      left: -100%;
      transition: transform 0.25s ease-in;
      z-index: -1;
    }
    &:hover:after {
      transform: translateX(100%);
    }
  }
`;
// hero styles
