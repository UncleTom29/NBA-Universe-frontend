import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Index'
import Sidebar from '../Components/SideBar/Index'
import Hero from '../Components/Hero/Index'
import InfoSection from '../Components/Info/Index'
import Services from '../Components/Services/Index'
import { homeObj1, homeObj2 } from '../Components/Info/Data'
import Footer from '../Components/Footer/Index'
import Roadmap from '../Components/Roadmap/Index'
import Tokenomics from '../Components/Tokenomics/Index'
import Partners from '../Components/Partners/Index'



const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <InfoSection  {...homeObj1} />
            <InfoSection  {...homeObj2} />
            <Services />
            <Roadmap />
            <Tokenomics />
            <Partners />
            <Footer />
        </>
    )
}

export default Home
