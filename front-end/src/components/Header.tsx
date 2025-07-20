'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Upload', href: '/upload' },
  { label: 'Reader', href: '/reader' },
  { label: 'Tools', href: '/tools' },
  { label: 'History', href: '/history' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">
          Read<span className="text-blue-400">ForMe</span>
        </h1>

        <nav className="space-x-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
             
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
