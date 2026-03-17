/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  BookOpen, 
  Briefcase, 
  Award, 
  Globe, 
  Code, 
  Users,
  CheckCircle2,
  ChevronRight,
  Linkedin,
  Github
} from 'lucide-react';

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    {subtitle && <span className="text-brand-yellow font-bold tracking-widest uppercase text-xs mb-2 block">{subtitle}</span>}
    <h2 className="text-4xl font-bold tracking-tight">{children}</h2>
    <div className="h-1.5 w-20 bg-brand-yellow mt-4 rounded-full"></div>
  </div>
);

const ExperienceCard = ({ title, company, period, description, items }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm card-hover mb-6"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-brand-dark">{title}</h3>
        <p className="text-brand-yellow font-semibold">{company}</p>
      </div>
      <span className="text-sm text-gray-400 font-medium mt-2 md:mt-0">{period}</span>
    </div>
    <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
    {items && (
      <ul className="space-y-2">
        {items.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
            <ChevronRight className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-yellow/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter">
            SANDRA<span className="text-brand-yellow">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#home" className="hover:text-brand-yellow transition-colors">首頁</a>
            <a href="#about" className="hover:text-brand-yellow transition-colors">關於我</a>
            <a href="#experience" className="hover:text-brand-yellow transition-colors">經歷</a>
            <a href="#skills" className="hover:text-brand-yellow transition-colors">技能</a>
            <button className="bg-brand-dark text-white px-6 py-2.5 rounded-full hover:bg-brand-yellow hover:text-brand-dark transition-all font-bold">
              聯絡我
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Blobs */}
        <div className="blob w-[600px] h-[600px] bg-brand-yellow rounded-full -top-20 -right-20 blur-3xl opacity-20"></div>
        <div className="blob w-[400px] h-[400px] bg-brand-yellow rounded-full top-1/2 -left-20 blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] mb-6">
              Hi! I'm <br />
              <span className="text-brand-yellow">Sandra Wang</span>
            </h1>
            <p className="text-2xl font-serif italic text-gray-400 mb-8">
              Accounting Student & Aspiring Consultant
            </p>
            <p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed">
              就讀於國立台灣大學會計學系，具備審計實習、商業競賽與跨領域活動經驗。
              熱衷於財務分析、永續發展與問題解決。
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2 text-gray-500 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                <Mail className="w-4 h-4" />
                <span className="text-sm">sandra920615@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                <Phone className="w-4 h-4" />
                <span className="text-sm">0975-180-756</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-brand-yellow text-brand-dark px-8 py-4 rounded-2xl font-bold shadow-lg shadow-brand-yellow/20 hover:scale-105 transition-transform flex items-center gap-2">
                <Download className="w-5 h-5" /> 下載履歷
              </button>
              <button className="bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-colors">
                了解更多
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Organic Shape for Image */}
            <div className="relative z-10 aspect-square rounded-[40%_60%_70%_30%/40%_50%_60%_40%] overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://picsum.photos/seed/sandra/800/800" 
                alt="Sandra Wang" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Blobs */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-yellow rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-dark rounded-full -z-10 opacity-5"></div>
          </motion.div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <BookOpen className="w-6 h-6" />, title: "會計專業", desc: "國立台灣大學會計學系" },
            { icon: <Briefcase className="w-6 h-6" />, title: "實務經驗", desc: "PwC 審計實習生" },
            { icon: <Award className="w-6 h-6" />, title: "競賽表現", desc: "ATCC 全國商業競賽" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center text-brand-yellow">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About & Education */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://picsum.photos/seed/ntu/800/1000" 
                  alt="NTU Campus" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 bg-brand-yellow p-8 rounded-3xl shadow-xl z-20 hidden md:block">
                <p className="text-4xl font-bold">GPA 4.17</p>
                <p className="text-sm font-bold uppercase tracking-widest">Academic Excellence</p>
              </div>
            </div>

            <div>
              <SectionTitle subtitle="About Me">教育背景</SectionTitle>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">國立台灣大學</h3>
                  <p className="text-brand-yellow font-semibold text-lg mb-4">會計學系 | 2021.09 - 現在</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                      <span>110-1 學期書卷獎 (GPA: 4.17/4.3)</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                      <span>110-2 學期書香獎 (GPA: 4.17/4.3)</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  在學期間不僅專注於會計專業知識的累積，更積極參與各類商業競賽與社團活動，
                  培養了跨領域的思考能力與團隊協作技巧。我致力於將會計專業與永續發展議題結合，
                  尋求更具影響力的商業解決方案。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Career">專業經歷</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            <ExperienceCard 
              title="審計實習生"
              company="資誠聯合會計師事務所 (PwC)"
              period="2024.01 - 2024.03"
              description="應用所學至實務面，參與實際審計流程，深入了解企業內部循環與產業特性。"
              items={[
                "核對憑證、檢查總帳，並編製財務報表工作底稿",
                "實地觀察客戶內部控制與產業營運循環",
                "快速接觸多樣化產業，提升專業判斷能力"
              ]}
            />
            <ExperienceCard 
              title="英文導師與教育顧問"
              company="個人工作室"
              period="2022.07 - 2022.08"
              description="負責高三學生讀書計畫輔導及英檢初級、中級教學。"
              items={[
                "協助數十位學生制定個人化讀書計劃",
                "英檢中級學生平均成績從 60-70 提升至 90-100 分",
                "根據學生特質給予建議，系統化整理知識"
              ]}
            />
          </div>

          <div className="mt-20">
            <SectionTitle subtitle="Activities">課外活動</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "ATCC 全國商業個案大賽",
                  role: "隊員",
                  period: "2022.02 - 2022.04",
                  desc: "負責財報分析與資訊彙整，協助拆解問題並提出解決方案，進入比賽第三階段。"
                },
                {
                  title: "金融證券競賽",
                  role: "隊員",
                  period: "2023.07",
                  desc: "觀察通膨、債券殖利率趨勢，預測聯準會利率政策，分析總體經濟環境。"
                },
                {
                  title: "台大英語演講社 (Toastmasters)",
                  role: "財務長與活動幹部",
                  period: "2022.09 - 2023.01",
                  desc: "提升社團總資產約 3%，規劃並帶領 21 位社員參與兩天一夜社遊。"
                },
                {
                  title: "ICL 國際學伴計畫",
                  role: "志工",
                  period: "2023.09 - 2023.12",
                  desc: "協助偏鄉小朋友了解多元文化，與不同國家的學生交流，拓展國際視野。"
                },
                {
                  title: "氣候變遷對策課程",
                  role: "學員",
                  period: "2022.07 - 2022.08",
                  desc: "研究綠電發展與永續方案，訓練快速統整大量資料與簡報能力。"
                }
              ].map((act, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm card-hover"
                >
                  <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">{act.period}</span>
                  <h4 className="text-lg font-bold mt-2 mb-1">{act.title}</h4>
                  <p className="text-sm text-gray-400 font-medium mb-3">{act.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{act.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <SectionTitle subtitle="Expertise">專業技能</SectionTitle>
              <div className="space-y-6">
                {[
                  { name: "English (TOEIC 945)", level: 95 },
                  { name: "R Language", level: 75 },
                  { name: "Tableau", level: 70 },
                  { name: "Microsoft Office", level: 90 },
                  { name: "Canva", level: 85 }
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-brand-yellow"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle subtitle="Soft Skills">核心優勢</SectionTitle>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Users />, title: "團隊合作" },
                  { icon: <Globe />, title: "跨文化溝通" },
                  { icon: <Code />, title: "資料分析" },
                  { icon: <CheckCircle2 />, title: "問題解決" }
                ].map((skill, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-brand-dark text-white p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3"
                  >
                    <div className="text-brand-yellow">{skill.icon}</div>
                    <span className="font-bold">{skill.title}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-brand-yellow/5 rounded-2xl border border-brand-yellow/20">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-yellow" /> 其他成就
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 金融市場常識與職業道德證書</li>
                  <li>• 110 學年度學測國寫作文佳作</li>
                  <li>• 基礎法文能力</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">準備好開始 <br /><span className="text-brand-yellow">下一個合作了嗎？</span></h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                如果您對我的背景感興趣，或有任何合作機會，歡迎隨時與我聯繫。
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:sandra920615@gmail.com" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-1">Email</p>
                  <p className="text-xl font-medium">sandra920615@gmail.com</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-1">Phone</p>
                  <p className="text-xl font-medium">0975-180-756</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-1">Location</p>
                  <p className="text-xl font-medium">Taipei, Taiwan</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 Sandra Wang. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
