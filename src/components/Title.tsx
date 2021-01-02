import styled from '@emotion/styled';
import React from 'react';
import tw, { theme } from 'twin.macro';

const Heading = styled.h1`
  font-size: 4rem;
  line-height: 1.15;
  ${tw`m-0 text-center text-black`}
`;
const Anchor = styled.a`
  color: ${theme`colors.primary`};
  ${tw`no-underline hover:underline focus:underline active:underline`};
`;
const Title: React.FC = () => (
  <>
    <Heading>
      Welcome to <Anchor href="https://nextjs.org">Next.js!</Anchor>
    </Heading>
  </>
);

export default Title;
