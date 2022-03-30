import { useState } from 'react';
import { ThemeProvider } from '@mui/material';

import logo from 'assets/logo.svg';
import theme from './utils/MuiTheme';

import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button type="button" onClick={() => setCount(count + 1)}>
              count is: {count}
            </button>
          </p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
