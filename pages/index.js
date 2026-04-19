import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Single Tree Lot - 全球单株咖啡行业标准</title>
        <meta name="description" content="Single Tree Lot - 全球首个单株咖啡追溯标准，重新定义咖啡品质。" />
        <meta name="keywords" content="咖啡,单株,行业标准,追溯,精品咖啡" />
      </Head>

      {/* 导航栏 */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="text-3xl text-emerald-600">🌳</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Single Tree Lot</h1>
                <p className="text-sm text-gray-500">全球单株咖啡行业标准</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-emerald-700 font-medium border-b-2 border-emerald-600 pb-1">首页</Link>
              <Link href="/standard" className="text-gray-700 hover:text-emerald-700 font-medium">标准</Link>
              <Link href="/database" className="text-gray-700 hover:text-emerald-700 font-medium">数据库</Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-700 font-medium">关于</Link>
              <Link href="/contact" className="text-gray-700 hover:text-emerald-700 font-medium">联系</Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">中文</span>
              <span className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium">EN</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#5D4037] via-[#6B8E23] to-[#7CB342]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              重新定义<br />咖啡品质标准
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto">
              每杯咖啡，都来自一棵有名字的树。<br />
              Single Tree Lot - 全球首个单棵树追溯标准。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/standard" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-900 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="mr-2">📜</span>
                查看完整标准文档
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link 
                href="/database" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="mr-2">🌱</span>
                探索咖啡树数据库
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* 装饰波浪 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* 核心价值 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">为什么需要 Single Tree Lot 标准？</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              在精品咖啡行业，透明度、可追溯性和独特性是品质的核心。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl text-emerald-600 mb-6">
                🔍
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">完全透明追溯</h3>
              <p className="text-gray-600 mb-6">
                从单棵咖啡树到你的杯子，每一步都可追溯。知道你的咖啡来自哪棵树，生长在哪里，如何处理。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  树级追溯编号
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  完整生长记录
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  处理过程透明
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-100">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center text-2xl text-amber-600 mb-6">
                🌱
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">独特风味体验</h3>
              <p className="text-gray-600 mb-6">
                每棵咖啡树都有其独特的风味特征。Single Tree Lot 让你体验真正独特的咖啡风味。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  树级风味档案
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  专业品鉴评分
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  限量独特批次
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-2xl text-blue-600 mb-6">
                🤝
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">公平可持续</h3>
              <p className="text-gray-600 mb-6">
                保护咖啡种植者权益，推动可持续发展，为消费者提供真正有价值的咖啡体验。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  种植者合理回报
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  生态友好种植
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  社区支持发展
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 咖啡树数据库预览 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">咖啡树数据库</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              探索全球单株咖啡树，每棵树都有其独特的故事和风味。
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">精选咖啡树</h3>
