/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef } from 'preact/hooks';

export default function Player({ url }: { url: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const stopScrolling = () => {
      if (!document.fullscreenElement) {
        document.getElementById(`episodes`).scrollIntoView({ behavior: `auto` });
      }
    };
    videoRef.current.addEventListener(`webkitfullscreenchange`, stopScrolling);
  }, []);
  return (
    <div className="aspect-ratio">
      <video preload="auto" ref={videoRef} playsInline controls width="100%" height="100%">
        <source type="video/mp4" src={url} />
      </video>
    </div>
  );
}
