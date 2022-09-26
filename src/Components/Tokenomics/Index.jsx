import React from 'react'
import Donut from './Donut'
import { DonutContainer, TokenomicsH1, TokenomicsColumn1, TokenomicsColumn2, TokenomicsImgWrap, TokenomicsImg, TokenomicsWrapper, TokenomicsRow} from './TokenomicsElements'
const img = require('../../Images/basketballfire.png').default;


const Tokenomics = () => {
    return (
        <>

            <DonutContainer id="tokenomics">
                <TokenomicsWrapper>
                    <TokenomicsRow>
                        <TokenomicsColumn1>
                            <TokenomicsH1> Tokenomics </TokenomicsH1>
                            <Donut />
                        </TokenomicsColumn1>
                        <TokenomicsColumn2>
                            <TokenomicsImgWrap>
                                <TokenomicsImg src={img} alt={'Tokenomics'} />
                            </TokenomicsImgWrap>
                        </TokenomicsColumn2>
                    </TokenomicsRow>
                </TokenomicsWrapper>
            </DonutContainer>
        </>
    )
}

export default Tokenomics