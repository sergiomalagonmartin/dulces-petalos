import { Breadcrumb, Breadcrumbs } from '@/components/breadcrumbs';
import type { Flower } from '@/lib/types';
import Image from 'next/image';

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const flowers: Flower[] = await fetch('https://dulces-petalos.jakala.es/api/v1/product').then((res) => res.json());

  return flowers.map((flower) => ({ id: flower.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const flower: Flower = await fetch(`https://dulces-petalos.jakala.es/api/v1/product/${id}`).then((res) => res.json());

  let fertilizer = flower.fertilizerType;
  if (fertilizer === 'nitrogen') {
    fertilizer = 'nitrógeno';
  } else if (fertilizer === 'phosphorus') {
    fertilizer = 'fósforo';
  }

  return (
    <main className='w-full max-w-300 px-xs py-m mx-auto flex flex-col gap-xl'>
      <Breadcrumbs>
        <Breadcrumb title='Incio' href='/' />
        <Breadcrumb title={flower.name} />
      </Breadcrumbs>

      <div className='flex flex-col md:flex-row gap-l md:gap-xl'>
        <Image
          src={flower.imgUrl}
          alt={flower.name}
          width={600}
          height={905}
          priority
          loading='eager'
          className='object-center object-cover rounded-xs w-full max-md:h-62.5'
        />

        <div className='flex flex-col gap-s w-full'>
          <div className='flex flex-col gap-3xs'>
            <h1 className='text-neutral-1000'>{flower.name}</h1>
            <p className='b-1 text-neutral-800'>{flower.binomialName}</p>
          </div>

          <h4>€{flower.price}</h4>

          <ul className='list-inside list-disc b-2 text-neutral-1000'>
            <li>Regar {flower.wateringsPerWeek} vez por semana</li>
            <li>Fertilizar con {fertilizer}</li>
          </ul>

          <button
            type='button'
            className='b-2 text-neutral-100 h-11 bg-accent-600 rounded-full w-full md:w-fit py-2xs px-xs cursor-pointer'
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </main>
  );
}
