import { Global, css } from '@emotion/react';
import tw, { theme } from 'twin.macro';

export default function GlobalCss() {
  return (
    <Global
      styles={css`
        :root {
          --plyr-color-main: ${theme`colors.amber.400`};
        }
        html {
          ${tw`h-full`}
        }
        body {
          ${tw`bg-background-100 overflow-x-hidden h-full`}
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: ${theme`colors.coolGray.700`} transparent;
        }
        *::-webkit-scrollbar {
          width: 8px; /* width of the entire scrollbar */
        }

        *::-webkit-scrollbar-track {
          background: transparent; /* color of the tracking area */
        }

        *::-webkit-scrollbar-thumb {
          background-color: ${theme`colors.coolGray.700`}; /* color of the scroll thumb */
          border-radius: 20px; /* roundness of the scroll thumb */
          &:hover {
            background-color: ${theme`colors.amber.400`}; /* color of the scroll thumb */
          }
        }

        #__next {
          min-height: 100%;
          display: flex;
          flex-direction: column;
        }
        main {
          position: relative;
          flex: 1;
        }
        :focus:not(:focus-visible) {
          outline: 0 !important;
        }
        ::selection {
          background-color: ${theme`colors.purple.700`};
        }
      `}
    />
  );
}
