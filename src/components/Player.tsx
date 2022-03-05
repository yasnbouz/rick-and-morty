import { useEffect } from 'react';

export default function Player({ url, title }: { url: string; title: string }) {
  useEffect(() => {
    const scrollToTop = () => {
      if (!document.fullscreenElement) {
        document.getElementById(`episodes`).scrollIntoView({ behavior: `auto` });
      }
    };
    document.addEventListener(`fullscreenchange`, scrollToTop);
    return () => {
      document.removeEventListener(`fullscreenchange`, scrollToTop);
    };
  }, []);

  return (
    <div className="aspect-ratio" style={{ backgroundColor: `black` }}>
      <iframe sandbox="allow-scripts" src={url} scrolling="no" frameBorder="1" height="100%" width="100%" allowFullScreen title={title} />
    </div>
  );
}
