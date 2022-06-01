import Link from 'next/link';
import Image from 'next/image';
import { StyledHeader } from '@/styles/index';
import { Menu } from '@/components';

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <a>
          <Image src="/logo.webp" width="164" quality={75} height="52" alt="rick and morty" layout="fixed" loading="eager" />
        </a>
      </Link>
      <Menu />
    </StyledHeader>
  );
}
