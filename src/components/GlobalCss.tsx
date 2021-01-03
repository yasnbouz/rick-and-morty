import { Global, css } from '@emotion/react';

export default function GlobalCss() {
  return (
    <Global
      styles={css`
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
