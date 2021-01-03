import tw, { styled } from 'twin.macro';

export const Heading = styled.h1`
  font-size: 62px;
  line-height: 1.15;
  ${tw`m-0 text-center text-blueGray-800 font-sans font-bold`}
`;
export const Anchor = tw.a`
text-green-500 no-underline hover:underline focus:underline active:underline
`;
