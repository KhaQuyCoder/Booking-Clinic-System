import React from 'react';
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import './App.css';
import { Routing } from './Routing/Routing';

function App() {
  return (
      <div className="App">
        <Header />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Routing />
          </div>
        </div>
      </div>
  );
}

export default App;
