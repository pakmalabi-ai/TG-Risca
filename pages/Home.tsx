import React from 'react';
import { Layers, Scissors, Printer, PenTool, Award, Sparkles, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Background Elements - Subtle for high contrast */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-slate-100 rounded-full blur-3xl pointer-events-none"></div>

      {/* Hero Section */}
      <div className="relative z-10 px-6 py-16 md:py-24 text-center">
        <div className="inline-flex items-center space-x-2 bg-white border border-primary-200 px-5 py-2 rounded-full mb-8 shadow-sm animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-xs font-bold text-primary-800 tracking-wider uppercase">Konsentrasi Keahlian Teknik Grafika</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-sans font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
          Menuju Profesionalisme <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Industri Grafika</span> Masa Depan
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-700 leading-relaxed mb-10 font-medium">
          Selamat datang di Portal Pembelajaran Konsentrasi Keahlian Teknik Grafika SMK Negeri 1 Kaligondang.
          Website ini dirancang khusus untuk siswa-siswi Fase F (Kelas XI dan XII).
        </p>

        <div className="w-32 h-1.5 bg-gradient-to-r from-primary-400 to-primary-700 mx-auto rounded-full mb-16 opacity-90"></div>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 px-6 md:px-12 pb-24">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-primary-100/60 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
              <Layers className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 font-sans group-hover:text-primary-700 transition-colors">Pre-Press</h3>
            <p className="text-slate-600 leading-relaxed text-base font-medium">
              Mendalami persiapan cetak dengan standar industri, memastikan desain siap diproses tanpa kesalahan.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-primary-100/60 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-50 rounded-bl-full -mr-10 -mt-10 opacity-60"></div>
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300 relative z-10">
              <Printer className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 font-sans group-hover:text-primary-700 transition-colors relative z-10">Proses Produksi</h3>
            <p className="text-slate-600 leading-relaxed text-base font-medium relative z-10">
              Fokus pada penguasaan teknis tingkat lanjut mesin cetak dan standar operasional prosedur (SOP).
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-primary-100/60 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
              <Scissors className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 font-sans group-hover:text-primary-700 transition-colors">Post-Press</h3>
            <p className="text-slate-600 leading-relaxed text-base font-medium">
              Teknik penyelesaian grafika akhir yang rapi, presisi, dan memiliki nilai jual tinggi.
            </p>
          </div>
        </div>

        {/* Message Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-white">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary-600 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500 rounded-full blur-md opacity-30 transform scale-110"></div>
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczPp8pbpkkjbX3f4b3TTgj8r1XD8CHmlDgtyJsfwOubkK3tf76HygwdN4cXJM6-DKrQYoQotZ07ByT5vP5q5fWp2YQZEPuKsq3fa8vyk4gEO6zct_AU1hOXbDMFrSrr-CeWL5V1fxciQWMcTVswc0V7j=w462-h633-s-no-gm?authuser=0" 
                  alt="Illustration" 
                  className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full border-4 border-primary-500/50 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6 leading-tight">
                Mari Menajamkan <span className="text-primary-400">Kompetensi</span>
              </h2>
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8 font-light">
                "Di fase ini, kita akan fokus pada penguasaan teknis tingkat lanjut dan standar operasional prosedur (SOP) yang berlaku di dunia industri. Mari manfaatkan media ini untuk membangun etos kerja yang disiplin bersama saya."
              </p>
              
              <div className="flex flex-col md:flex-row items-center md:justify-start gap-5 mb-10">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg border-2 border-primary-400">R</div>
                    <div className="text-left">
                        <p className="text-base font-bold text-white">Risca Damayanti, M.Pd.</p>
                        <p className="text-sm text-primary-200 font-medium">Guru Produktif Teknik Grafika</p>
                    </div>
                 </div>
              </div>

              <div className="inline-block">
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {['Siap Kerja', 'Santun', 'Mandiri', 'Kreatif!'].map((tag, idx) => (
                    <span key={idx} className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-semibold shadow-sm flex items-center gap-2 hover:bg-white/20 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-primary-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;