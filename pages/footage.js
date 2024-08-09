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
        <Content>
        <Header>
             <Title> 
                <Letter src={F} alt="F" priority />
                <Letter src={O} alt="O" priority />
                <Letter src={O} alt="O" priority />
                <Letter src={T} alt="T" priority />
                <Letter src={A} alt="A" priority />
                <Letter src={G} alt="G" priority />
                <Letter src={E} alt="E" priority />
            </Title>
        </Header>
            <VideoWrap>
                <Frame src={frame} width={"100%"}/>
                <YoutubeEmbed embedId="dzfj-yKgIPE"></YoutubeEmbed>
            </VideoWrap>
            <TextLink href="https://www.youtube.com/channel/UCzPtND9EY5MkOepLzllAbiw">
                Watch More <span>&#160;</span> <span style={{fontFamily: "sans-serif"}}>&#8594;</span>
            </TextLink>
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
    height: 10vh;
    transition: all 0.5s ease 0s;
    user-select: none;
    @media (max-width: 800px){
        height: 5vh;
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
    margin-bottom: 10vh;
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
    margin-top: 10vh;
    align-items: center;
    justify-content: center;
    display:flex;
`

const Letter = styled(Image)`
    width: 5vh;
    padding: 0.25vh;
    @media (max-width: 400px){
        width: 5vh;
    }
`
