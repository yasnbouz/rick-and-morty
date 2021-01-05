import { FC } from 'react';
import { StyledHeader } from '@/styles/index';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from '@/components';

const Header: FC = () => (
  <StyledHeader>
    <div>
      <Link href="/">
        <a>
          <Image src="/logo.png" width="164" height="52" alt="rick and morty" layout="fixed" priority />
        </a>
      </Link>
    </div>
    <Menu />
  </StyledHeader>
);

export default Header;
