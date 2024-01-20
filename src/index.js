import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';


const theme = {
  colors: {
    bgColorCard: "#d7feff",
    borderColor: "#b2b2a5",
    bgColorAvatar: "#ffffff",
    greyColor: "#7c7c8f",
    bgColorStats: "#ffffa4",
    colorStatsText: "#FFFAF0"
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>     
  </React.StrictMode>
);
