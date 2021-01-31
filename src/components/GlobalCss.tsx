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
          ${tw`font-sans h-full`}
        }
        body {
          ${tw`bg-blueGray-900 overflow-x-hidden h-full`}
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
        @font-face {
          font-family: 'Georgia';
          src: url('/fonts/Georgia/Georgia.ttf') format('truetype');
          font-style: normal;
          font-weight: 400;
          font-display: optional;
        }
        @font-face {
          font-family: 'Poppins';
          src: url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
          font-style: normal;
          font-weight: 400;
          font-display: optional;
        }
        @font-face {
          font-family: 'Poppins';
          src: url('/fonts/Poppins/Poppins-Medium.ttf') format('truetype');
          font-style: normal;
          font-weight: 500;
          font-display: optional;
        }
        @font-face {
          font-family: 'Poppins';
          src: url('/fonts/Poppins/Poppins-SemiBold.ttf') format('truetype');
          font-style: normal;
          font-weight: 600;
          font-display: optional;
        }

        @font-face {
          font-family: 'Poppins';
          src: url('/fonts/Poppins/Poppins-Bold.ttf') format('truetype');
          font-style: normal;
          font-weight: 700;
          font-display: optional;
        }
      `}
    />
  );
}
