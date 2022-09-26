import React from 'react'
import {
    ServicesContainer,
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesP,
    ServicesWrapper,
    ServicesIcon
} from './ServiceElements'
import Launchpad from '../../Images/Launchpad.JPG'
import staking from '../../Images/staking.PNG'
import Rumblekong from '../../Images/Rumblekong.png'
import basketballhighlights from '../../Images/basketballhighlights.JPG'
const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Products</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon  src={basketballhighlights}/>
                        <ServicesH2> NFT Marketplace</ServicesH2>
                        <ServicesP> We've partnered with basketball players and teams to bring you an exciting collection of uniquely customized digital collectibles.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Rumblekong} />
                        <ServicesH2>GameFi Aggregator</ServicesH2>
                        <ServicesP>We connect players with the best basketball games and reward them for playing.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={staking} />
                        <ServicesH2>Staking</ServicesH2>
                        <ServicesP>Stake your $NBAU tokens and get crypto rewards, airdrops, and whitelist access to our NFT collection.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Launchpad} />
                        <ServicesH2>Launchpad</ServicesH2>
                        <ServicesP> A blockchain based incubator that empowers new age creators by helping them raise funds from the blockchain community.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
