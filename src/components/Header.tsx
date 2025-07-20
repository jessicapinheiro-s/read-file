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
      <div className="w-full  px-5 md:px-60 py-5 flex items-center justify-between">
        <div className=' w-2/5'>
          <h1 className="text-xl font-bold tracking-tight">
            Read<span className="text-blue-400">ForMe</span>
          </h1>
        </div>

        <div className=' w-4/5 flex flex-row justify-end'>
          <nav className="flex flex-row justify-between items-center  ">
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
      </div>
    </header>
  );
}
