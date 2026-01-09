'use client';

import { debounce } from '@/lib/utils';
import { Search } from './icons/search';
import type { ChangeEvent } from 'react';

interface SearchbarProps {
  onChange: (value: string) => void;
}

export function Searchbar({ onChange }: SearchbarProps) {
  const debouncedSearch = debounce((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
  }, 300);

  return (
    <div className='max-w-150 w-full border-neutral-400 bg-neutral-100 border rounded-[8px] py-2xs px-xs flex gap-x-2.5'>
      <Search width={24} height={24} className='shrink-0' />
      <input
        onChange={debouncedSearch}
        name='search'
        type='search'
        placeholder='Busca en nuestra tienda'
        className='w-full b-1 text-neutral-800 placeholder:text-neutral-800 appearance-none outline-0'
      />
    </div>
  );
}
