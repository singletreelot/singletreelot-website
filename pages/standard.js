import Head from 'next/head';
import Link from 'next/link';

export default function Standard() {
  return (
    <>
      <Head>
        <title>标准文档 - Single Tree Lot</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-800">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回首页
            </Link>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white rounded-2xl p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Single Tree Lot 标准文档</h1>
            <p className="text-emerald-100 text-xl">全球单株咖啡追溯与品质标准体系 v1.0</p>
            <div className="mt-4 inline-block bg-white/20 px-4 py-2 rounded-full text-sm">
              正式版本 · 2026年4月发布
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="prose max-w-none">
              <h2>1. 标准介绍</h2>
              <p>Single Tree Lot（单株批次）标准旨在建立全球统一的单株咖啡追溯与品质评价体系，实现从单棵咖啡树到最终杯子的全程透明追溯。</p>
              
              <h3>核心原则</h3>
              <ul>
                <li><strong>可追溯性</strong>：每杯咖啡可追溯到具体的单株咖啡树</li>
                <li><strong>独特性</strong>：尊重每棵咖啡树的独特风味特征</li>
                <li><strong>可持续性</strong>：促进生态友好型种植实践</li>
                <li><strong>公平性</strong>：确保种植者获得合理回报</li>
              </ul>

              <h2>2. 追溯要求</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">追溯要素</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">要求</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">等级</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">树编号</td>
                      <td className="px-6 py-4 text-sm text-gray-500">唯一编号，格式：ST-YYYY-REGION-NNN</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">必需</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">地理位置</td>
                      <td className="px-6 py-4 text-sm text-gray-500">经纬度坐标，精度±10米</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">必需</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">种植信息</td>
                      <td className="px-6 py-4 text-sm text-gray-500">品种、树龄、海拔、土壤类型</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">必需</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-12 p-6 bg-emerald-50 border border-emerald-200 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-900 mb-4">📥 下载完整标准文档</h3>
                <p className="text-gray-700 mb-4">获取完整的 Single Tree Lot 标准文档，包含详细的技术规范、实施指南和认证要求。</p>
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
                  下载PDF版本 (v1.0)
                </button>
                <p className="mt-4 text-sm text-gray-500">文件大小：约2.5MB | 页数：48页 | 语言：中文/英文</p>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-gray-900 text-white mt-12">
          <div className="max-w-7xl mx-auto px-4 py-12 text-center">
            <p className="text-gray-400">© 2026 Single Tree Lot Standard. 本文档为公开版本。</p>
            <p className="text-gray-500 text-sm mt-2">最后更新：2026-04-19 | 文档版本：v1.0.0</p>
          </div>
        </footer>
      </div>
    </>
  );
}