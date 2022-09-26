import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    BtnWrap,
    Column1,
    Column2,
    Heading,
    ImgWrap,
    Subtitle,
    TextWrapper,
    TopLine,
    Img,
    
} from '../Info/InfoElements'

import { Button } from '../../Utilities/ButtonElements'

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer')


};

const InfoSection = ({
    lightBg,
    imgStart,
    topLine,
    lightText,
    darkText,
    headline,
    description,
    buttonLabel,
    alt,
    img,
    id,
    primary,
    dark,
    dark2,
    linkto,
}) => {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle><br />
                                <BtnWrap>
                                    <Button to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        onClick={() => openInNewTab(linkto) }
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
