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
          <a href="https://github.com/yasnbouz" target="_blank" rel="noreferrer noopener" aria-label="developer github">
            @yasnbouz
          </a>
        </p>
      </>
    </StyledFooter>
  );
}
