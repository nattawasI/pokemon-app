import React from 'react'
import Heading from '../components/Heading'
import FormSearch from '../components/FormSearch'
import ListCardPokemon from '../components/ListCardPokemon'
import Footer from '../components/Footer'
import IconPokeBall from '../assets/icon/pokeball.png'

const Home = () => {
  return (
    <div className="page">
      <div className="page__container home">
        <div className="home__heading">
          <Heading tag="h1" size="xxxl">
            <img src={ IconPokeBall } alt="PokeBall" />
            Pokemon Kanto
          </Heading>
        </div>
        <div className="home__form">
          <FormSearch />
        </div>
        <div className="line"></div>
        <ListCardPokemon />
        <div className="home__footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
