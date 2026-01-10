import type { ReactNode } from 'react';
import { AngleRight } from './icons/angle-right';
import Link from 'next/link';

interface BreadcrumbProps {
  title: string;
  href?: string;
}

export function Breadcrumbs({ children }: { children: ReactNode[] }) {
  const breadcrumbs = [];

  for (let i = 0; i < children.length; ++i) {
    const child = children[i];

    breadcrumbs.push(child);

    if (i < children.length - 1) breadcrumbs.push(<AngleRight key='breadcrumb-separator' />);
  }

  return <div className='flex gap-3xs'>{breadcrumbs}</div>;
}

export function Breadcrumb({ title, href }: BreadcrumbProps) {
  if (href) {
    return (
      <Link href={href} className='b-1 text-neutral-800'>
        {title}
      </Link>
    );
  }

  return <p className='b-1 text-neutral-800'>{title}</p>;
}
