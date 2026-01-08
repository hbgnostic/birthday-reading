import { useState } from 'react';
import SplashPage from './components/SplashPage';
import ReadingPage from './components/ReadingPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordCorrect = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="app">
      {!isAuthenticated ? (
        <SplashPage onPasswordCorrect={handlePasswordCorrect} />
      ) : (
        <ReadingPage />
      )}
    </div>
  );
}

export default App;
