import React from 'react'
import {
    PartnersContainer,
    PartnersCard,
    PartnersH1,
    PartnersWrapper,
    PartnersIcon 
} from './PartnersElements'
import Icon1 from '../../Images/binancelogo.png'
import Icon2 from '../../Images/opensealogo.png'
import Icon3 from '../../Images/latokenlogo.png'
import Icon4 from '../../Images/pinksalelogo.png'
import Icon5 from '../../Images/pancakeswaplogo.png'
import Icon6 from '../../Images/nba.PNG'
import Icon7 from '../../Images/nbafoundation.png'
import Icon8 from '../../Images/nbaplayerslogo.jpg'

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer')


};

const Partners = () => {
    return (
        <>
            <PartnersContainer id="roadmap">
                <PartnersH1> Partners </PartnersH1>
                <PartnersWrapper>
                    <PartnersCard>
                    <PartnersIcon  src={Icon1} onClick={() => openInNewTab('https://www.binance.com')}/>
                    </PartnersCard>
                    <PartnersCard>
                    <PartnersIcon  src={Icon2}/>
                    </PartnersCard>
                    <PartnersCard>
                    <PartnersIcon  src={Icon3}/>
                    </PartnersCard>
                    <PartnersCard>
                    <PartnersIcon  src={Icon4}/>
                    </PartnersCard>
                    <PartnersCard>
                    <PartnersIcon  src={Icon5}/>
                    </PartnersCard>
                    <PartnersCard>
                    <PartnersIcon  src={Icon6}/>
                    </PartnersCard>
                    <PartnersCard>
                    <PartnersIcon  src={Icon7}/>
                    </PartnersCard>
                    <PartnersCard>
                    <PartnersIcon  src={Icon8}/>
                    </PartnersCard>
                </PartnersWrapper>
            </PartnersContainer>
        </>
    )
}

export default Partners
