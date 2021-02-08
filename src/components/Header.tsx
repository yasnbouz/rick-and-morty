import { StyledHeader } from '@/styles/index';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from '@/components';
import { BlockReveal } from '@/components/animations';

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <a>
          <BlockReveal>
            <Image src="/logo.png" width="164" quality={75} height="52" alt="rick and morty" layout="fixed" priority />
          </BlockReveal>
        </a>
      </Link>
      <Menu />
    </StyledHeader>
  );
}
