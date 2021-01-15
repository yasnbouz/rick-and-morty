import { StyledFooter } from '@/styles/';
import { HeartIcon } from '@/components';

export default function Footer() {
  return (
    <StyledFooter>
      <>
        <p>Made with</p>
        <HeartIcon />
        <p>
          by&nbsp;
          <a href="https://github.com/yasnbouzi" target="_blank" rel="noreferrer noopener" aria-label="developer github">
            @yasnbouzi
          </a>
        </p>
      </>
    </StyledFooter>
  );
}
