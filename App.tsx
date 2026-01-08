import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';
import { NAV_ITEMS } from './types';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Generate routes for Pages 2-10 dynamically based on types or manually */}
        {NAV_ITEMS.filter(item => !item.isHome).map((item) => (
            <Route 
                key={item.path} 
                path={item.path} 
                element={<ComingSoon pageName={item.label} />} 
            />
        ))}
        {/* Fallback for unknown routes */}
        <Route path="*" element={<ComingSoon pageName="Halaman Tidak Ditemukan" />} />
      </Routes>
    </Layout>
  );
};

export default App;