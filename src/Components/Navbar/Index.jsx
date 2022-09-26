import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon, NavMenu,
    NavItem,
    NavLinks,
    Connect

} from './NavElements'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../WalletConnector/InjectedConnector'

export function WalletConnector() {
    const { activate, deactivate, account } = useWeb3React();
    
    return (
        <div>
          
            {account 
                ?   <button style={{borderRadius: "50%",
                    background: "#01bf71", // Green Color
                    white: "nowrap",
                    padding: "20px 22px",
                    color: "#010606",
                    fontWeight: "16px",
                    outline: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                
                    }} onClick={() => deactivate()}> Disconnect </button> 
                : <button style={{borderRadius: "50%",
                background: "#01bf71", // Green Color
                white: "nowrap",
                padding: "20px 22px",
                color: "#010606",
                fontWeight: "16px",
                outline: "none",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out"}} onClick={() => activate(injected)}> Connect Wallet </button> 
            }
        </div>
    );
};

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }


    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        NBA Universe
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="community"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >Community</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="services"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >Products</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="tokenomics"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >Tokenomics</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="roadmap"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true" 
                                offset={-80}
                            >Roadmap</NavLinks>
                        </NavItem>
                    </NavMenu>
                            <NavItem>
                            <Connect>
                            <WalletConnector />
                            </Connect>
                            </NavItem>
                    
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
