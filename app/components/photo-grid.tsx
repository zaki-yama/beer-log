import { Beer } from '../types/database';
import { BeerCard } from './beer-card';

interface PhotoGridProps {
  beers: Beer[];
}

export function PhotoGrid({ beers }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {beers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
}
