import React from 'react';
import { Clock, Construction } from 'lucide-react';

interface ComingSoonProps {
  pageName: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ pageName }) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="text-center px-6 relative z-10">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-50 rounded-full mb-8 shadow-inner ring-1 ring-primary-100">
          <Clock className="h-10 w-10 text-primary-600 animate-pulse" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-slate-900 mb-6 tracking-tight">
          {pageName}
        </h2>
        
        <div className="h-1.5 w-24 bg-primary-500 mx-auto rounded-full mb-8"></div>
        
        <p className="text-xl text-slate-600 font-medium mb-10 max-w-lg mx-auto leading-relaxed">
          Halaman ini sedang dalam tahap pengembangan. Materi pembelajaran akan segera tersedia.
        </p>

        <div className="inline-flex items-center gap-2.5 px-6 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-sm font-bold shadow-sm">
           <Construction className="h-5 w-5 text-primary-600" />
           <span>Coming Soon</span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;