import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Introduction from './components/Introduction'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import TodoPlus from './components/TodoPlus'

function App() {
  return (
    <div className="App">

      <Sidebar />
	    <Main />
	    <Gallery />
    </div>
  );
}

export default App;
