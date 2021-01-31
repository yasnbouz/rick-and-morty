import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import { useEffect } from 'react';

export default function Player({ url }) {
  useEffect(() => {
    const player = new Plyr(`#video-plyr`, { volume: 0.3 });
    player.on(`exitfullscreen`, () => {
      document.getElementById(`episodes`).scrollIntoView({ behavior: `auto` });
    });
    return () => {
      player.destroy();
    };
  }, []);
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video id="video-plyr" playsInline controls>
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
}
