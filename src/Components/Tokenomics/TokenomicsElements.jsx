import styled from 'styled-components'

export const DonutContainer = styled.div`
height: 650px;
display: flex;
flex-direction: column;
justify-content: center;
background:#010606;


`

export const TokenomicsH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;
align-items: left;
text-align: left;

@media screen and (max-width:480px) {
    font-size: 2rem;
}
`

export const TokenomicsImgWrap = styled.div`
max-width: 555px;
max-height: 600px;

`

export const TokenomicsImg = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
max-height: 600px;
border-radius: 10px;

`

export const TokenomicsColumn1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
max-width: 100%;

`



export const TokenomicsColumn2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
max-height: 600px;

@media screen and (max-width:768px) {
    display: none;
}

`
export const TokenomicsWrapper = styled.div`
display: grid;
z-index: 1;
height: 630px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`

export const TokenomicsRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width:768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`