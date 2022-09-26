import React from 'react'
import {
    FooterContainer,
    FooterLink,
    FooterLinkContainer,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinkWrapper,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './FooterElements'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinkContainer>
                        <FooterLinkWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="roadmap">Roadmap </FooterLink>
                                <FooterLink to="tokenomics">Tokenomics</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms of Services</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Products</FooterLinkTitle>
                                <FooterLink to="/">NFT Marketplace</FooterLink>
                                <FooterLink to="/">GameFi Aggregator</FooterLink>
                                <FooterLink to="/">Staking</FooterLink>
                                <FooterLink to="/">Launchpad</FooterLink>
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                        <FooterLinkWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Marketing Proposal</FooterLink>
                                <FooterLink to="/">Partnership</FooterLink>
                                <FooterLink to="/">Enquiry</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Business</FooterLinkTitle>
                                <FooterLink to="/">Blog</FooterLink>
                                <FooterLink to="/">Contests & Giveaways</FooterLink>
                                <FooterLink to="/">Digital Collectibles</FooterLink>
                                <FooterLink to="/">Community</FooterLink>
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                    </FooterLinkContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}>
                                NBA Universe
                            </SocialLogo>
                            <WebsiteRights>{new Date().getFullYear()} All rights reserved @NBA Universe.
                            </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink
                                    href="/"
                                    target="_blank"
                                    aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink
                                    href="/"
                                    target="_blank"
                                    aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink
                                    href="/"
                                    target="_blank"
                                    aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink
                                    href="/"
                                    target="_blank"
                                    aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
