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
        <ApparelWrap>
            <StarrySkies />
       
        <Content>
             <NavbarHeader>
            <Navbar width={"5vh"} padding={"0.2em"} />
        </NavbarHeader>
        <LeftArrowIconWrap>
            <Link href="/home">
                <LeftArrowIcon />
            </Link>
        </LeftArrowIconWrap>
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

           <MerchImage src={merch} alt="" priority/>

           <TextLink href="https://shop.dafna.rocks">
                VISIT MERCH STORE  <span style={{fontFamily: "sans-serif"}}>&#8594;</span>
            </TextLink>
        </Body>
        </Content>
        </ApparelWrap>
    )
}

const ApparelWrap = styled.div`
margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`
const NavbarHeader = styled.div`
    width: 50px;
    position: absolute;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;
    z-index: 10002;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75px;
    transition: all 0.5s ease 0s;
    // border-bottom: 1px solid #b9c0ff;
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
const Content = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    align-items: center;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 9999;
`;

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

const LeftArrowIconWrap = styled.div`
  width: 50px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 1em;
  z-index: 10002;
`;

const LeftArrowIcon = styled(IconLeftArrow)`
    width: 50px;
    height: 50px;
    cursor: pointer;
    &:hover {
        stroke: ${theme.COLOR.HOT_PINK};
    }
`;
