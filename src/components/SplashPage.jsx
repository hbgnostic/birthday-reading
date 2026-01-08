import { useState } from 'react';
import './SplashPage.css';

const SplashPage = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'jordansmith') {
      onPasswordCorrect();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
      setPassword('');
    }
  };

  return (
    <div className="splash-container">
      <div className="splash-content">
        <svg
          className="gift-icon"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gift box body */}
          <rect x="20" y="45" width="60" height="40" stroke="#3D4F5F" strokeWidth="1.5" fill="none" />

          {/* Gift box lid */}
          <rect x="15" y="35" width="70" height="12" stroke="#3D4F5F" strokeWidth="1.5" fill="none" />

          {/* Vertical ribbon */}
          <path d="M50 35 L50 85" stroke="#3D4F5F" strokeWidth="1.5" />

          {/* Horizontal ribbon */}
          <path d="M15 41 L85 41" stroke="#3D4F5F" strokeWidth="1.5" />

          {/* Gold bow - left loop */}
          <path
            d="M50 35 C45 28, 32 26, 28 32 C26 35, 30 38, 35 36 C40 34, 45 33, 50 35"
            stroke="#B8A88A"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Gold bow - right loop */}
          <path
            d="M50 35 C55 28, 68 26, 72 32 C74 35, 70 38, 65 36 C60 34, 55 33, 50 35"
            stroke="#B8A88A"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Gold bow - center knot */}
          <circle cx="50" cy="35" r="2.5" fill="#B8A88A" />

          {/* Gold bow - left ribbon tail */}
          <path
            d="M48 36 C45 40, 38 42, 35 40"
            stroke="#B8A88A"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Gold bow - right ribbon tail */}
          <path
            d="M52 36 C55 40, 62 42, 65 40"
            stroke="#B8A88A"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <form onSubmit={handleSubmit} className="password-form">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className={`password-input ${error ? 'error' : ''}`}
            autoFocus
          />
          {error && <p className="error-message">Incorrect password</p>}
        </form>
      </div>
    </div>
  );
};

export default SplashPage;
