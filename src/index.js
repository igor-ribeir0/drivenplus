import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { StyledMain } from './styles/constants/styledComponents';
import { AuthProvider } from './components/providers/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>

      <StyledMain>
        <App />
      </StyledMain>

    </AuthProvider>
  </React.StrictMode>
);