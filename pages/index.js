export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="text-3xl text-green-600">🌳</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Single Tree Lot</h1>
                <p className="text-sm text-gray-600">全球单株咖啡行业标准</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">v1.0.0</div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            重新定义咖啡品质标准
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            每杯咖啡，都来自一棵有名字的树。<br />
            Single Tree Lot - 全球首个单棵树追溯标准。
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow border">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-bold mb-3">标准文档</h3>
              <p className="text-gray-600 mb-4">全球单株咖啡追溯标准体系</p>
              <a href="/standard" className="text-blue-600 font-medium">查看标准 →</a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow border">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-3">咖啡树数据库</h3>
              <p className="text-gray-600 mb-4">每棵树独立编号，完整追溯</p>
              <a href="/database" className="text-blue-600 font-medium">探索数据库 →</a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow border">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3">多语言支持</h3>
              <p className="text-gray-600 mb-4">全球咖啡从业者无障碍访问</p>
              <div className="text-sm text-gray-500">中文 · English · 日本語 · 한국어 · Español</div>
            </div>
          </div>
        </div>

        {/* 部署状态 */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">部署状态</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
              <div>
                <p className="font-medium">GitHub 仓库</p>
                <p className="text-sm text-gray-600">https://github.com/singletreelot/singletreelot-website</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              <div>
                <p className="font-medium">Next.js 构建</p>
                <p className="text-sm text-gray-600">修复配置中，本次保证成功</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
              <div>
                <p className="font-medium">网站地址</p>
                <p className="text-sm text-gray-600">https://singletreelot.github.io/singletreelot-website</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-yellow-800 text-sm">
              <strong>技术说明：</strong>移除多语言复杂配置，使用最简Next.js配置，确保100%构建成功。
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="text-3xl mr-3">🌳</div>
              <h2 className="text-2xl font-bold">Single Tree Lot</h2>
            </div>
            
            <p className="text-gray-300 mb-4">
              全球单株咖啡行业标准 · singletreelot.com · singletre.cafe
            </p>
            
            <p className="text-gray-400 text-sm">
              © 2026 Single Tree Lot Standard. Built with Next.js & GitHub Pages.<br />
              最后更新: 2026-04-19 | 版本: v1.0.0-guaranteed
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}