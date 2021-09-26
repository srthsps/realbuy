import React from 'react'
import Navbar from '../components/navbar'
import HeroSlider from '../components/heroSlider'
import CategoryPage from '../components/categoryPage'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSlider />
            <CategoryPage />
        </div>
    )
}

export default Home
