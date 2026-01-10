'use client';

import type { Flower } from '@/lib/types';
import { FlowerCard } from './flower-card';
import { Searchbar } from './searchbar';
import { useState } from 'react';

interface FlowersListProps {
  flowers: Flower[];
}

export function FlowersList({ flowers: _flowers }: FlowersListProps) {
  const [flowers, setFlowers] = useState<Flower[]>(_flowers);

  function handleSearchbarChange(value: string) {
    const filteredFlowers = _flowers.filter(
      (flower) =>
        flower.name.toLowerCase().includes(value.toLowerCase()) ||
        flower.binomialName.toLowerCase().includes(value.toLowerCase())
    );

    setFlowers(filteredFlowers);
  }

  return (
    <div className='flex flex-col items-center gap-xl max-w-300 mx-auto my-[48px]'>
      <Searchbar onChange={handleSearchbarChange} />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-s w-full justify-items-center'>
        {flowers.map((flower, index) => (
          <FlowerCard key={flower.id} isNew={index === 0} {...flower} />
        ))}
      </div>
    </div>
  );
}
