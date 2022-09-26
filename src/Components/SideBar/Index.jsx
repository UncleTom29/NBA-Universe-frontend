import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute,

} from './SideBarElements'

import { WalletConnector } from '../Navbar/Index';


const Sidebar = ({ toggle, isOpen }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about" onClick={toggle}>
                            About Us
                        </SidebarLink>
                        <SidebarLink to="community" onClick={toggle}>
                            Community
                        </SidebarLink>
                        <SidebarLink to="services" onClick={toggle}>
                            Products
                        </SidebarLink>
                        <SidebarLink to="roadmap" onClick={toggle}>
                            Roadmap
                        </SidebarLink>
                        <SidebarLink to="tokenomics" onClick={toggle}>
                            Tokenomics
                        </SidebarLink>
                        
                    </SidebarMenu>
                    <SidebarBtnWrap>
                        <SidebarRoute > <WalletConnector /> </SidebarRoute>
                    </SidebarBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
