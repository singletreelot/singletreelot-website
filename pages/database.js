import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import { useState } from 'react';

export default function Database() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // 模拟咖啡树数据
  const coffeeTrees = [
    {
      id: 'ST-2026-YN-038',
      name: 'Misty Jasmine',
      region: '云南，中国',
      variety: 'Typica',
      age: 8,
      altitude: 1600,
      flavorProfile: ['茉莉花', '柑橘', '蜂蜜'],
      status: '认证中',
      lastHarvest: '2025-12'
    },
    {
      id: 'ST-2026-ET-127',
      name: 'Blue Mountain Heritage',
      region: '耶加雪菲，埃塞俄比亚',
      variety: 'Heirloom',
      age: 12,
      altitude: 2100,
      flavorProfile: ['蓝莓', '黑巧克力', '香料'],
      status: '已认证',
      lastHarvest: '2025-11'
    },
    {
      id: 'ST-2026-CO-042',
      name: 'Andean Sunrise',
      region: 'Huila，哥伦比亚',
      variety: 'Caturra',
      age: 6,
      altitude: 1800,
      flavorProfile: ['焦糖', '坚果', '红色水果'],
      status: '已认证',
      lastHarvest: '2025-10'
    },
    {
      id: 'ST-2026-BR-089',
      name: 'Cerrado Gold',
      region: 'Cerrado，巴西',
      variety: 'Bourbon',
      age: 10,
      altitude: 1100,
      flavorProfile: ['牛奶巧克力', '坚果', '焦糖'],
      status: '监测中',
      lastHarvest: '2025-09'
    },
    {
      id: 'ST-2026-CR-015',
      name: 'Tarrazú Cloud',
      region: 'Tarrazú，哥斯达黎加',
      variety: 'Catuai',
      age: 7,
      altitude: 1900,
      flavorProfile: ['苹果', '蜂蜜', '香料'],
      status: '已认证',
      lastHarvest: '2025-12'
    },
    {
      id: 'ST-2026-GT-063',
      name: 'Antigua Volcano',
      region: 'Antigua，危地马拉',
      variety: 'Bourbon',
      age: 9,
      altitude: 1700,
      flavorProfile: ['可可', '香料', '柑橘'],
      status: '认证中',
      lastHarvest: '2025-11'
    }
  ];

  const filteredTrees = coffeeTrees.filter(tree =>
    tree.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tree.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tree.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>咖啡树数据库 - Single Tree Lot</title>
        <meta name="description" content="全球单株咖啡树数据库，每棵树独立编号，完整追溯记录。" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* 数据库标题 */}
        <section className="bg-gradient-to-r from-[#5D4037] to-[#7CB342] text-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">咖啡树数据库</h1>
            <p className="text-xl max-w-3xl">
              探索全球单株咖啡树，每棵树都有其独特的故事、风味和生长记录。
            </p>
          </div>
        </section>

        {/* 数据库统计 */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: '总咖啡树数', value: '1,247', color: 'bg-emerald-100 text-emerald-800' },
                { label: '已认证树木', value: '892', color: 'bg-blue-100 text-blue-800' },
                { label: '产地国家', value: '18', color: 'bg-amber-100 text-amber-800' },
                { label: '独特风味', value: '42', color: 'bg-purple-100 text-purple-800' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl border border-gray-200">
                  <div className={`text-3xl font-bold mb-2 ${stat.color.split(' ')[1]}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 搜索和筛选 */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="搜索咖啡树编号、名称或产地..."
                      className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:border-[#7CB342] focus:ring-2 focus:ring-[#7CB342]/20"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <select className="px-4 py-3 rounded-lg border border-gray-300 bg-white">
                    <option>所有状态</option>
                    <option>已认证</option>
                    <option>认证中</option>
                    <option>监测中</option>
                  </select>
                  <select className="px-4 py-3 rounded-lg border border-gray-300 bg-white">
                    <option>所有产地</option>
                    <option>中国</option>
                    <option>埃塞俄比亚</option>
                    <option>哥伦比亚</option>
                    <option>巴西</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 咖啡树列表 */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">树编号</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">名称</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">产地</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">品种</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">海拔</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">风味特征</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredTrees.map((tree) => (
                      <tr key={tree.id} className="hover:bg-gray-50 cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-mono font-bold text-gray-900">{tree.id}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-900">{tree.name}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-gray-900">{tree.region}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                            {tree.variety}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-gray-900">{tree.altitude}m</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {tree.flavorProfile.map((flavor, index) => (
                              <span key={index} className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs">
                                {flavor}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            tree.status === '已认证' ? 'bg-green-100 text-green-800' :
                            tree.status === '认证中' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {tree.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* 分页 */}
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  显示 <span className="font-medium">1-6</span> 条，共 <span className="font-medium">1,247</span> 条
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    上一页
                  </button>
                  <button className="px-3 py-2 bg-[#7CB342] text-white rounded text-sm hover:bg-[#689F38]">
                    1
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    下一页
                  </button>
                </div>
              </div>
            </div>

            {/* 数据库说明 */}
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4">关于咖啡树数据库</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">数据来源</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• 认证种植者直接提交</li>
                    <li>• 现场审核团队验证</li>
                    <li>• 年度更新和维护</li>
                    <li>• 第三方实验室检测</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">数据用途</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• 咖啡追溯验证</li>
                    <li>• 风味研究和匹配</li>
                    <li>• 可持续性评估</li>
                    <li>• 市场透明化</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 Single Tree Lot Standard. 数据库版本：v1.0.0</p>
          <p className="text-gray-500 text-sm mt-2">最后更新：2026-04-19 | 数据量：1,247棵咖啡树</p>
        </div>
      </footer>
    </>
  );
}