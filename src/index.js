import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  AuthContext  from './components/Context/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from "./components/Context/ContextProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext>
      <ContextProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </ContextProvider>
    </AuthContext>
  </React.StrictMode>
);
