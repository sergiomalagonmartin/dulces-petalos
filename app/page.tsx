import { FlowersList } from '@/components/flowers-list';
import type { Flower } from '@/lib/types';

export default async function Home() {
  const flowers: Flower[] = await fetch('https://dulces-petalos.jakala.es/api/v1/product').then((res) => res.json());

  return (
    <main className='px-xs'>
      <FlowersList flowers={flowers} />
    </main>
  );
}
