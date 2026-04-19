import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: '首页', href: '/' },
    { name: '标准体系', href: '/standard' },
    { name: '咖啡树数据库', href: '/database' },
    { name: '认证流程', href: '/certification' },
    { name: '会员服务', href: '/membership' },
    { name: '关于我们', href: '/about' },
    { name: '联系我们', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="text-3xl text-[#5D4037]">🌳</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Single Tree Lot</h1>
                <p className="text-xs text-gray-500">全球单株咖啡行业标准</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#7CB342] font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Selector */}
            <div className="flex items-center space-x-2 ml-4">
              <button className="px-3 py-1 bg-[#7CB342] text-white rounded-full text-sm font-medium">
                中文
              </button>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium">
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-[#7CB342]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}