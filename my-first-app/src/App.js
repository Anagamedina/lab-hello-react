import React from 'react';
import './App.css';
import Header from './components/Header';
import ImageSection from './components/ImageSection';

function App() {
  return (
    <div className="App"> 
    <Header/>
      <ImageSection />  
      <main className="content">
        {/* Contenido de la página */}
      </main>
    </div>
  );
}

export default App;

  

