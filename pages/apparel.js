import Navbar from 'components/Navbar';
import StarrySkies from 'components/Three/StarrySkies';
import { IconLeftArrow } from 'icons';
import merch from 'images/merch.png';
import A from 'letters/A-Y.svg';
import E from 'letters/E-Y.svg';
import L from 'letters/L-Y.svg';
import P from 'letters/P-Y.svg';
import R from 'letters/R-Y.svg';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from 'theme';

export default function Apparel() {
    return(
        <Content>
        <Header>
            <Title>
                <Letter src={A}></Letter>
                <Letter src={P}></Letter>
                <Letter src={P}></Letter>
                <Letter src={A}></Letter>
                <Letter src={R}></Letter>
                <Letter src={E}></Letter>
                <Letter src={L}></Letter>
            </Title>
        </Header>
        <Body>
           <MerchImage src={merch} alt="" priority />

           <TextLink href="https://shop.dafna.rocks">
                VISIT MERCH STORE  <span style={{fontFamily: "sans-serif"}}>&#8594;</span>
            </TextLink>
        </Body>
        </Content>
    )
}


const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    color: white;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75px;
    transition: all 0.5s ease 0s;
    user-select: none;
`

const Letter = styled(Image)`
    width: 7vh;
    padding: 0.25vh;
    @media (max-width: 400px){
        width: 5vh;
    }
`


const Title = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    color: #ffdd00;
    text-align: center;
    font-size: 24px;
    width: 100%;
    justify-content: center;
    height: 50px;
    @media (max-width: 675px) {
    font-size: 20px;
    }
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

`
const MerchImage = styled(Image)`
    width: 40vh;
    height: auto;
    @media (max-width: 800px){
        width: 35vh;
    }
`

const TextLink = styled.a`
    color:#ffdd00;
    font-weight: 800;
    text-shadow:  0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    text-decoration: none;
    &:hover{
        transform: scale(1.1);
    }
`
