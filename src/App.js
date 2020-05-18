import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Introduction from './components/Introduction'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
      <Sidebar />
	    <Main />
	    <Gallery />
    </div>
  );
}

export default App;
