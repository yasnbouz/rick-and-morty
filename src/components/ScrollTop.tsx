import { useCallback, useEffect, useState } from 'preact/hooks';
import tw from 'twin.macro';

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const listener = () => {
      const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
      if (Math.ceil(scrollTop) + clientHeight < scrollHeight - 120) {
        setShow(false);
        return;
      }
      setShow(true);
    };
    window.addEventListener(`scroll`, listener);
    return () => {
      window.removeEventListener(`scroll`, listener);
    };
  }, [show]);

  const scrollTop = useCallback(() => {
    document.getElementById(`__next`).scrollIntoView({ behavior: `smooth`, block: `start` });
  }, []);
  return (
    <button
      type="button"
      onClick={() => scrollTop()}
      aria-label="scroll to top"
      tw="bg-transparent py-2 px-4 rounded-md absolute bottom-3 right-0 transition-all ease-linear transform -rotate-90"
      css={[show ? tw`opacity-100 -translate-x-8 scale-100` : tw`opacity-0 scale-0`]}
    >
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="#fff" width="24" height="24" viewBox="0 0 24 24">
        <path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" />
      </svg>
    </button>
  );
}
