import React, { useEffect } from 'react';
import AOS from 'aos';
import Router from 'Router';

declare global {
  interface Window {
    analytics: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
