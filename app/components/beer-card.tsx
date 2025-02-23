import Image from 'next/image';
import Link from 'next/link';
import { Star, StarHalf } from 'lucide-react';

import { Beer } from '../types/database';

interface BeerCardProps {
  beer: Beer;
}

export function BeerCard({ beer }: BeerCardProps) {
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="h-4 w-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="star-half"
          className="h-4 w-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    return stars;
  };

  return (
    <Link href={`/beers/${beer.id}`} className="group relative aspect-square">
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <Image
          src={beer.image_url}
          alt={beer.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-lg font-bold">{beer.name}</h3>
          <p className="text-sm text-gray-200">{beer.brewery}</p>
          <div className="mt-1 flex items-center gap-0.5">
            {renderRating(beer.rating)}
          </div>
          <p className="mt-1 text-sm text-gray-200">{beer.style}</p>
        </div>
      </div>
    </Link>
  );
}
