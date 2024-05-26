import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import MainLinks from './components/MainLinks'
import CallNow from './components/CallNow'
import Images from './components/Images'
import Banner from './components/Banner'
// import '../public/Images/2.png'
import ImageSlider from './components/ImageSlider'

const app = () => {
  return (
    <div>
        {/* <Banner/> */}
        <Header/>
        {/* <Images/> */}
        <ImageSlider/>
        <MainLinks/>
        <CallNow/>
        <Footer/>
    </div>
  )
}

export default app
