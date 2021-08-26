import React from 'react'
import './style/app.scss'
import PokemonProvider from './contexts/PokemonContext'
import Home from './pages/Home'

function App() {
  return (
    <PokemonProvider>
      <Home />
    </PokemonProvider>
  );
}

export default App;
