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
                        <RoadmapP>Fairlaunch on a LaunchPad</RoadmapP>
                        <RoadmapP>CMC & Coingecko Listing</RoadmapP>
                        <RoadmapP>DEX Listing</RoadmapP>
                        <RoadmapP>CEX Listing</RoadmapP>
                        <RoadmapP>Digital Collectibles Released on Binance</RoadmapP>
                        <RoadmapP> Web DApp Launch</RoadmapP>
                        <RoadmapP> NFT Marketplace Integration</RoadmapP>
                    </RoadmapCard>
                    <RoadmapCard>
                        <RoadmapH2> Phase Three </RoadmapH2>
                        <RoadmapP> Major CEX Listing</RoadmapP>
                        <RoadmapP>More Marketing & Partnerships</RoadmapP>
                        <RoadmapP>Mobile Apps (Android & IOS) deployment</RoadmapP>
                        <RoadmapP>GameFi Aggregation Platform Integration</RoadmapP>
                        <RoadmapP>Staking Platform Integration</RoadmapP>
                    </RoadmapCard>
                    <RoadmapCard>
                        <RoadmapH2> Phase Four </RoadmapH2>
                        <RoadmapP> Another Major CEX Listing</RoadmapP>
                        <RoadmapP> LaunchPad Integration</RoadmapP>
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
