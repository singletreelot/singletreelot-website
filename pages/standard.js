import Head from 'next/head';
import Navbar from '../components/layout/Navbar';

export default function Standard() {
  const standards = [
    {
      category: '追溯标准',
      items: [
        { title: '树编号系统', description: '唯一编号格式：ST-YYYY-REGION-NNN', required: true },
        { title: '地理位置记录', description: '经纬度坐标，海拔高度，土壤类型', required: true },
        { title: '种植信息档案', description: '品种、树龄、种植日期、养护记录', required: true },
        { title: '处理过程追溯', description: '采摘、处理、干燥、储存全流程记录', required: true },
      ]
    },
    {
      category: '品质标准',
      items: [
        { title: '杯测评分体系', description: 'SCA标准+风味特征描述', required: true },
        { title: '缺陷检测标准', description: '一级瑕疵率＜5%，无二级瑕疵', required: true },
        { title: '水分含量标准', description: '10-12%理想范围', required: true },
        { title: '密度分级标准', description: '基于海拔和豆体密度', required: true },
      ]
    },
    {
      category: '可持续标准',
      items: [
        { title: '生态种植实践', description: '有机肥料，生物防治，水土保持', required: true },
        { title: '公平贸易认证', description: '种植者合理回报，社区支持', required: true },
        { title: '碳足迹追踪', description: '从种植到运输的碳排放记录', required: false },
        { title: '水资源管理', description: '节水灌溉，雨水收集', required: false },
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>标准体系 - Single Tree Lot</title>
        <meta name="description" content="Single Tree Lot 完整标准体系，涵盖追溯、品质、可持续性全方面要求。" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* 页面标题 */}
        <section className="bg-gradient-to-r from-[#5D4037] to-[#7CB342] text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Single Tree Lot 标准体系</h1>
            <p className="text-xl max-w-3xl mx-auto">
              全球首个单株咖啡追溯与品质标准体系，重新定义精品咖啡行业标准。
            </p>
            <div className="mt-8 inline-flex items-center space-x-4">
              <span className="px-4 py-2 bg-white/20 rounded-full">版本 v1.0</span>
              <span className="px-4 py-2 bg-white/20 rounded-full">2026年4月发布</span>
              <span className="px-4 py-2 bg-white/20 rounded-full">正式标准</span>
            </div>
          </div>
        </section>

        {/* 标准体系概览 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {standards.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 ${
                    index === 0 ? 'bg-amber-100 text-amber-600' :
                    index === 1 ? 'bg-emerald-100 text-emerald-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {index === 0 ? '🔍' : index === 1 ? '⭐' : '🌱'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.category}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className={`w-2 h-2 mt-2 rounded-full mr-3 ${
                          item.required ? 'bg-red-500' : 'bg-gray-400'
                        }`}></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                          {item.required && (
                            <span className="inline-block mt-1 px-2 py-1 text-xs bg-red-100 text-red-800 rounded">
                              必需
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 标准文档下载 */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">📥 下载完整标准文档</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">标准文档包</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>完整标准文档 (PDF, 48页)</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>实施指南 (Word, 可编辑)</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>认证申请表 (Excel)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">立即获取</h4>
                  <p className="text-gray-300 mb-6">填写基本信息，立即下载完整标准文档包。</p>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="您的邮箱"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
                    />
                    <button className="w-full bg-[#7CB342] text-white py-3 rounded-lg font-semibold hover:bg-[#689F38] transition">
                      发送下载链接
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 认证流程 */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">认证流程</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: 1, title: '申请提交', desc: '填写申请表，提交基本信息' },
                { step: 2, title: '文档审核', desc: '标准委员会审核申请材料' },
                { step: 3, title: '现场审核', desc: '专家团队现场考察验证' },
                { step: 4, title: '认证颁发', desc: '通过审核，颁发认证证书' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-[#7CB342] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 Single Tree Lot Standard. 保留所有权利。</p>
          <p className="text-gray-500 text-sm mt-2">标准文档版本：v1.0.0 | 最后更新：2026-04-19</p>
        </div>
      </footer>
    </>
  );
}