import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LoginPanel } from './components/LoginPanel';

// Dark theme customized for BOSS platform
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1272f3',
      light: '#44a5ff',
      dark: '#0960d7'
    },
    background: {
      default: '#000c1d',
      paper: 'rgba(7, 21, 56, 0.45)'
    },
    text: {
      primary: '#ffffff',
      secondary: '#a6bbd6'
    }
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif'
  }
});

export function App() {
  const handleLoginSuccess = () => {
    console.log('Login success triggered (ready for backend redirection).');
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="boss-bg-container">
        {/* Background Visual Effects */}
        <BackgroundEffects />

        {/* Top Header */}
        <Header />

        {/* Main Content Area */}
        <main
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px 80px 80px 80px',
            position: 'relative',
            zIndex: 10,
            maxWidth: '1600px',
            width: '100%',
            margin: '0 auto',
            boxSizing: 'border-box'
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '60px',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {/* Left Hero Column */}
            <div style={{ flex: '1 1 500px', maxWidth: '700px' }}>
              <HeroSection />
            </div>

            {/* Right Login Panel Column */}
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'flex-end', maxWidth: '500px' }}>
              <LoginPanel onLoginSuccess={handleLoginSuccess} />
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
