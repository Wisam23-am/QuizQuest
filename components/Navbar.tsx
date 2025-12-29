'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
            </div>
            <span className="text-xl font-bold text-slate-800">UTBK Simulator</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Fitur</a>
            <a href="#stats" className="text-slate-600 hover:text-blue-600 transition-colors">Statistik</a>
            <Link href="/login" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
