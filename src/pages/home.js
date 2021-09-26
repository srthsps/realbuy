import React from 'react'
import Navbar from '../components/navbar'
import HeroSlider from '../components/heroSlider'
import ProductsPage from '../components/productsPage'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSlider />
            <ProductsPage />
        </div>
    )
}

export default Home
