import React, { useState } from 'react'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    ArrowForward,
    HeroContent,
    HeroP,
    HeroTitle,
    HeroBtnWrapper,
    ArrowRight
} from '../Hero/HeroElements'
import { Button } from '../../Utilities/ButtonElements'
import Video from '../../Images/universe.png'

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer')


};


const Hero = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video}  />
                </HeroBg>
                <HeroContent>
                    <HeroTitle> DECENTRALIZED BASKETBALL ECOSYSTEM</HeroTitle>
                    <HeroP>
                    NFT Marketplace | Digital Collectibles | P2E GameFi Aggregator | GameFi Launchpad | Staking  
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button
                            to="./"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true"
                            onClick={() => openInNewTab('https://www.pinksale.finance/launchpad/0x354377F9BEf00ea983A886560FB9e57231611bA0?chain=BSC')}
                        >
                            Buy $NBAU on Pinksale now {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero
