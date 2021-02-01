import { StyledHeader } from '@/styles/index';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from '@/components';

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <Link href="/">
          <a>
            <Image src="/logo.png" width="164" quality={75} height="52" alt="rick and morty" layout="fixed" priority />
          </a>
        </Link>
      </div>
      <Menu />
    </StyledHeader>
  );
}
