import React from 'react';
import Navbar from 'components/Navbar';
import styled from 'styled-components';
import YoutubeEmbed from 'components/YoutubeEmbed';
import frame from 'images/frame.svg';
import F from 'letters/F.svg';
import O from 'letters/O-B.svg';
import T from 'letters/T-B.svg';
import A from 'letters/A-B.svg';
import G from 'letters/G-B.svg';
import E from 'letters/E-B.svg';
import StarrySkies from 'components/Three/StarrySkies';
import Image from 'next/image';
import Link from 'next/link';
import { IconLeftArrow } from 'icons';
import { theme } from 'theme';

export default function Footage() {
    return(
        <FootageWrap>
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
             <Title> 
                <Letter src={F} alt="F"></Letter>
                <Letter src={O} alt="O"></Letter>
                <Letter src={O} alt="O"></Letter>
                <Letter src={T} alt="T"></Letter>
                <Letter src={A} alt="A"></Letter>
                <Letter src={G} alt="G"></Letter>
                <Letter src={E} alt="E"></Letter>
            </Title>
            <VideoWrap>
                <Frame src={frame} width={"100%"}/>
                <YoutubeEmbed embedId="hZ1g_RTNSoA"></YoutubeEmbed>
            </VideoWrap>
            <TextLink href="https://www.youtube.com/channel/UCzPtND9EY5MkOepLzllAbiw">
                Watch More <span>&#160;</span> <span style={{fontFamily: "sans-serif"}}>&#8594;</span>
            </TextLink>

        </Content>
        </FootageWrap>
    )
}


const FootageWrap = styled.div`
      margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;

`;

const NavbarHeader = styled.div`
    width: 50px;
    position: absolute;
    top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;
    z-index: 10002;
`;

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

const Title = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    color: #ffdd00;
    margin-top: 7vh;
    text-align: center;
    font-size: 24px;
    width: 100%;
    justify-content: center;
    @media (max-width: 675px) {
    font-size: 20px;
    }
`

const Frame = styled(Image)`
    position: fixed;
    width: 60vw;
    @media (max-width: 600px){
        width: 100vw;
    }
`

const VideoWrap = styled.div`
    display: flex;
    width: 53vw;
    align-items: center;
    justify-content:center;
    box-shadow: 0 0 10px #ffdd00, 0 0 20px #ffdd00, 0 0 30px #ffdd00;
    @media (max-width: 600px){
        width: 90vw;
    }
`;

const TextLink = styled.a`
    color:#ffdd00;
    font-weight: 800;
    text-decoration: none;
    text-shadow:  0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ffdd00;
    &:hover{
        transform: scale(1.1);
    }
    margin: 10vh;
    align-items: center;
    justify-content: center;
    display:flex;
`

const Letter = styled(Image)`
    width: 7vh;
    padding: 0.25vh;
    @media (max-width: 400px){
        width: 5vh;
    }
`
const LeftArrowIconWrap = styled.div`
  width: 50px;
  position: absolute;
  top: 10px;
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