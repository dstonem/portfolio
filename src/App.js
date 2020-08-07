import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Skills from './components/Skills'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="App">

      <Sidebar />
	    <Main />
      <Skills />
	    <Gallery />
    </div>
  );
}

export default App;
