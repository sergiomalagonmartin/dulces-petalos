import Image from 'next/image';
import { Pill } from './pill';
import Link from 'next/link';
import { Arrow } from './icons/arrow';
import { Tag } from './tag';
import type { Flower } from '@/lib/types';

type FlowerCardProps = Flower & { isNew: boolean; className?: string };

export function FlowerCard({ id, name, binomialName, price, imgUrl, isNew, className = '' }: FlowerCardProps) {
  return (
    <div
      className={`flex flex-col w-full max-w-[384px] rounded-[32px] p-xs gap-xs bg-neutral-100 shadow-300 ${className}`}
    >
      <div className='flex flex-col gap-2xs w-fit'>
        <h4 className='text-neutral-1000'>{name}</h4>
        <p className='b-1 text-neutral-800'>{binomialName}</p>
      </div>

      <div className='relative h-75 w-full'>
        <Image
          src={imgUrl}
          alt={name}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          loading='eager'
          className='object-center object-cover rounded-xs'
        />

        {isNew && <Tag content='Nuevo' variant='success' className='absolute right-2.5 top-2.5' />}

        <Pill className='h6 bottom-2.5 left-2.5 absolute'>€{price}</Pill>

        <Link className='absolute bottom-2.5 right-2.5 size-10' href={`/flower/${id}`}>
          <Pill>
            <Arrow width={24} height={24} className='shrink-0' />
          </Pill>
        </Link>
      </div>
    </div>
  );
}
