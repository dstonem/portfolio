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
      <Skills 
        skills={[
          'React Native',
          'React',
          'Redux',
          'Expo',
          'Node',
          'PostgreSQL',
          'AWS',
          'Express',
          'Python',
          'JavaScript',
          'jQuery',
          'CSS',
          'Bootstrap',
          'HTML',
          'Ubuntu',
          'Figma',
          'JWT',
          'Websockets',
          'GraphQL',
          'Electron'
        ]}
      />
	    <Gallery />
    </div>
  );
}

export default App;
