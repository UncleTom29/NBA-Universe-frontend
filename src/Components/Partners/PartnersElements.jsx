import styled from 'styled-components'

export const PartnersContainer = styled.div`
height: 650px;
display: flex;
flex-direction: column;
justify-content: center;
background:#010606;

@media screen and (max-width:768px) {
    height: 1150px;
}

@media screen and (max-width:480px) {
    height: 1100px;
}
`

export const PartnersWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 18px;
padding: 0 30px;

@media screen and (max-width:1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width:768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
}
`
export const PartnersCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 440px;
padding: 20px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform : scale(1.02);
    tansition: all 0.2 ease-in-out
    cursor: pointer;
}
`
export const PartnersH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;
align-items: center;
text-align: center;

@media screen and (max-width:480px) {
    font-size: 2rem;
}
`

export const PartnersIcon = styled.img`
height: 100px;
width: 100px;

`


