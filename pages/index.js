import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('site.title')} - {t('site.description')}</title>
        <meta name="description" content={t('site.description')} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* 导航栏 */}
        <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="text-3xl text-emerald-600 mr-3">🌳</div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Single Tree Lot</h1>
                  <p className="text-xs text-gray-500">{t('site.tagline')}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link href="/standard" className="text-gray-700 hover:text-emerald-700 font-medium">
                  {t('nav.standard')}
                </Link>
                <Link href="/database" className="text-gray-700 hover:text-emerald-700 font-medium">
                  {t('nav.database')}
                </Link>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-emerald-100 text-emerald-800 rounded-full font-medium">
                    中文
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-full font-medium">
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* 英雄区域 */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/standard" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-900 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t('hero.cta_standard')}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link 
                  href="/database" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  {t('hero.cta_database')}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* 装饰元素 */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </header>

        {/* 功能卡片 */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* 标准文档卡片 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="absolute -top-4 left-8 w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-2xl text-white">
                📜
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-4">标准文档</h3>
              <p className="text-gray-600 mb-6">
                完整的Single Tree Lot行业标准体系，涵盖种植、处理、品鉴全流程。
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                  <span>追溯标准</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                  <span>种植规范</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                  <span>品鉴体系</span>
                </div>
              </div>
              <Link href="/standard" className="inline-flex items-center mt-6 text-emerald-600 font-semibold group-hover:text-emerald-700">
                查看完整标准
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* 数据库卡片 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="absolute -top-4 left-8 w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-2xl text-white">
                🌱
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-4">咖啡树数据库</h3>
              <p className="text-gray-600 mb-6">
                全球单株咖啡树数据库，每棵树独立编号，完整生长记录和风味特征。
              </p>
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">数据库统计</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-amber-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-amber-700">1,247</div>
                    <div className="text-xs text-amber-600">咖啡树</div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-emerald-700">18</div>
                    <div className="text-xs text-emerald-600">产地</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-700">42</div>
                    <div className="text-xs text-blue-600">风味</div>
                  </div>
                </div>
              </div>
              <Link href="/database" className="inline-flex items-center mt-4 text-amber-600 font-semibold group-hover:text-amber-700">
                探索数据库
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* 多语言卡片 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="absolute -top-4 left-8 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl text-white">
                🌐
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-4">多语言支持</h3>
              <p className="text-gray-600 mb-6">
                全球咖啡从业者无障碍访问，支持5种语言，专业翻译确保准确性。
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">中文</span>
                <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">English</span>
                <span className="px-3 py-1.5 bg-rose-100 text-rose-800 rounded-full text-sm font-medium">日本語</span>
                <span className="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">한국어</span>
                <span className="px-3 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Español</span>
              </div>
              <div className="text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>中文：完整内容</span>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <span>英文：翻译中</span>
                </div>
              </div>
            </div>
          </div>

          {/* 实时状态面板 */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              实时部署状态
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="text-sm text-gray-300 mb-2">GitHub仓库</div>
                <div className="font-mono text-sm truncate">singletreelot/singletreelot-website</div>
                <div className="mt-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
                    <svg className="mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    活跃
                  </span>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="text-sm text-gray-300 mb-2">网站版本</div>
                <div className="text-2xl font-bold">v1.0.0</div>
                <div className="mt-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-200">
                    生产环境
                  </span>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="text-sm text-gray-300 mb-2">最后更新</div>
                <div className="text-lg font-semibold">2026-04-19</div>
                <div className="mt-3 text-sm text-gray-300">
                  <span className="inline-flex items-center">
                    <svg className="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    21:18 CST
                  </span>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="text-sm text-gray-300 mb-2">访问地址</div>
                <a 
                  href="https://singletreelot.github.io/singletreelot-website" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-emerald-300 hover:text-emerald-200 underline break-all"
                >
                  singletreelot.github.io
                </a>
                <div className="mt-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900 text-purple-200">
                    GitHub Pages
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-300">
                  <span className="inline-flex items-center">
                    <svg className="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    技术栈：Next.js 13 + Tailwind CSS + i18n
                  </span>
                </div>
                <div className="text-sm text-gray-300">
                  <span className="inline-flex items-center">
                    <svg className="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    自动部署：GitHub Actions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* 页脚 */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">🌳</div>
                  <div>
                    <h2 className="text-xl font-bold">Single Tree Lot</h2>
                    <p className="text-sm text-gray-400">全球单株咖啡行业标准</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  建立透明、可追溯的咖啡供应链，保护种植者权益，为消费者提供独特咖啡体验。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">快速链接</h3>
                <ul className="space-y-2">
                  <li><Link href="/standard" className="text-gray-400 hover:text-white transition">标准文档</Link></li>
                  <li><Link href="/database" className="text-gray-400 hover:text-white transition">咖啡树数据库</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition">关于我们</Link