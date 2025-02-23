import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">🍺 Beer Log</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/beers"
            className="transition-colors hover:text-foreground/80 text-foreground"
          >
            Beers
          </Link>
          <Link href="/add" className="transition-colors hover:text-foreground/80 text-foreground">
            Add Beer
          </Link>
        </nav>
      </div>
    </header>
  );
}
