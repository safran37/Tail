import "./index.css"
import React from "react"
import Header from './components/Header'
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import Campaigns from "./components/Campaigns"
import Favorites from "./components/Favorites"
import MobileApp from "./components/MobileApp"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import { useWindowWidth,} from '@react-hook/window-size'
// importing header,hero,categories,campaigns,favorites,mobileApp,Cards,Footer Components //
// useWindowsWidth is a library hook that allows you to determinate the window width //

function App() {
  const windowsWidth = useWindowWidth() // Setting up the window width //

  return (
    <div className="">
        <Header/>
        {windowsWidth <= 768 && <Campaigns/>}
        <Hero/>
        <Categories/>
        {windowsWidth > 768 && <Campaigns/>}
        {/* adding a container with margin left-right auto with grid, adding gap row 24px and padding top 32px */}
        <div className="container mx-auto grid gap-y-6 pt-8">
        <Favorites/>
        <MobileApp/>
        <Cards/>
        </div>
        <Footer/>
    </div>
  )
}

export default App
