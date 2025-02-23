import { mockBeers } from './data/mock-beers';
import { PhotoGrid } from './components/photo-grid';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">最近のビール</h1>
        <p className="text-muted-foreground">
          最近飲んだビールの記録を写真で振り返ります
        </p>
      </div>
      <PhotoGrid beers={mockBeers} />
    </div>
  );
}
