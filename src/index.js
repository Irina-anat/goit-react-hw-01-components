import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';


const theme = {
  colors: {
    backgroundColorCard: "#d7feff",
    borderColor: "#b2b2a5",
    backgroundColorAvatar: "#ffffff",
    tagLocationColor: "#7c7c8f",
    backgroundColorStats: "#7c7c8f",
    labelColor: "#7c7c8f"
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>     
  </React.StrictMode>
);
