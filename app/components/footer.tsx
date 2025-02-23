export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm leading-loose text-center text-muted-foreground md:text-left">
          Built with ❤️ using{' '}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Next.js
          </a>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Beer Log. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
