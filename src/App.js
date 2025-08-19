import React from 'react';
import './App.css';
import { Routing } from './Routing/Routing';
import { Header } from './layouts/header/Header';
import { Sidebar } from './layouts/Sidebar/Sidebar';
import { CommonProvider } from './components/CommonContext';

function App() {
  return (
    <div className="App">
      <CommonProvider>
        <Sidebar />
        <div className="main-layout">
          <Header />
          <div className="content">
            <Routing />
          </div>
        </div>
      </CommonProvider>
    </div>
  );
}

export default App;
