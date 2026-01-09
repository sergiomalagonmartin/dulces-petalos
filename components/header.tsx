import Link from 'next/link';
import { Logo } from './icons/logo';

export function Header() {
  return (
    <header className='py-2xs px-3xs gap-3xs bg-neutral-100 flex justify-center'>
      <Link href={'/'}>
        <Logo width={50} height={50} />
      </Link>
    </header>
  );
}
