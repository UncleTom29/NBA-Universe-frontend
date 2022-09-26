import React from 'react'
import {
    RoadmapContainer,
    RoadmapCard,
    RoadmapH1,
    RoadmapH2,
    RoadmapP,
    RoadmapWrapper,
} from './RoadmapElements'


const Roadmap = () => {
    return (
        <>
            <RoadmapContainer id="roadmap">
                <RoadmapH1> Roadmap </RoadmapH1>
                <RoadmapWrapper>
                    <RoadmapCard>
                        <RoadmapH2> Phase One </RoadmapH2>
                        <RoadmapP>Team Formation</RoadmapP>
                        <RoadmapP> Partnership Agreements</RoadmapP>
                        <RoadmapP> Website Development</RoadmapP>
                        <RoadmapP> Community Development</RoadmapP>
                        <RoadmapP>SAFU Contract Development</RoadmapP>
                        <RoadmapP> KYC & AUDIT </RoadmapP>
                    </RoadmapCard>
                    <RoadmapCard>
                        
                        <RoadmapH2> Phase Two </RoadmapH2>
                        <RoadmapP>Marketing & More Partnerships</RoadmapP>
                        <RoadmapP>Fairlaunch on PinkSale</RoadmapP>
                        <RoadmapP>CMC & Coingecko Listing</RoadmapP>
                        <RoadmapP>DEX Listing</RoadmapP>
                        <RoadmapP>CEX Listing</RoadmapP>
                        <RoadmapP>Digital Collectibles Released on Binance</RoadmapP>
                        <RoadmapP> NFT Marketplace Launch</RoadmapP>
                    </RoadmapCard>
                    <RoadmapCard>
                        <RoadmapH2> Phase Three </RoadmapH2>
                        <RoadmapP> Major CEX Listing</RoadmapP>
                        <RoadmapP>More Marketing & Partnerships</RoadmapP>
                        <RoadmapP>GameFi Aggregation Platform Launch</RoadmapP>
                        <RoadmapP>Staking Platform Launch</RoadmapP>
                    </RoadmapCard>
                    <RoadmapCard>
                        <RoadmapH2> Phase Four </RoadmapH2>
                        <RoadmapP> Another Major CEX Listing</RoadmapP>
                        <RoadmapP> LaunchPad Development</RoadmapP>
                        <RoadmapP> Integration With Other Blockchains</RoadmapP>
                        <RoadmapP> Massive Rewards for engaging community</RoadmapP>
                        <RoadmapP>More features to be added....</RoadmapP>
                    </RoadmapCard>
                </RoadmapWrapper>
            </RoadmapContainer>
        </>
    )
}

export default Roadmap
