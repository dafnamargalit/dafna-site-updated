import React from "react";
import styled from "styled-components";
import StarrySkies from "components/Three/StarrySkies";
import Navbar from "components/Navbar";
import Link from "next/link";
import { IconLeftArrow } from "icons";
import { theme } from "theme";
import A from 'letters/A-P.svg';
import B from 'letters/B-P.svg';
import O from 'letters/O-P.svg';
import U from 'letters/U-P.svg';
import T from 'letters/T-P.svg';
import Image from "next/image";
import daf from 'images/daf.png';
import daf2 from 'images/daf2.png';
import daf3 from 'images/daf3.png';

export default function About(){
    return (
        <Container>
            <StarrySkies />
            <NavbarHeader>
                <Navbar width={"5vh"} padding={"0.2em"} />
            </NavbarHeader>
            <LeftArrowIconWrap>
                <Link href="/home">
                    <LeftArrowIcon />
                </Link>
            </LeftArrowIconWrap>
            <Content>
                <Title>
                    <Letter src={A}></Letter>
                    <SmallerLetter src={B}></SmallerLetter>
                    <Letter src={O}></Letter>
                    <Letter src={U}></Letter>
                    <Letter src={T}></Letter>
                </Title> 
                <PictureWrap>
                    <DafProfPic src={daf2} />
                    <DafProfPic src={daf} /> 
                    <DafProfPic src={daf3} />  
                </PictureWrap>
        <Description>
           hi! welcome to my website. i made it all by myself! i'm a 22 year old singer/songwriter and producer working as a software engineer in los angeles (but i'm originally from boulder colorado). i love making music and coding and creating pretty much anything you might find on this website. go stream my music, play my games, watch my videos and buy my merch! love you!
        </Description>
            </Content>  
        </Container>
    )
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`;

const NavbarHeader = styled.div`
    width: 100vw;
    position: absolute;
    top: -50px;
    z-index: 10001;
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
    text-align: center;
    font-size: 24px;
    width: 100%;
    position: absolute;
    top: 170px;
    justify-content: center;
    height: 105px;
    z-index: 10001;
    @media (max-width: 675px) {
        top: 100px;
    }
`;


const Letter = styled(Image)`
    width: 7vh;
    padding: 0.25vh;
    @media (max-width: 400px){
        width: 5vh;
    }
`;


const SmallerLetter = styled(Image)`
    width: 5.5vh;
    padding: 0.25vh;
    @media (max-width: 400px){
        width: 4.5vh;
    }
`;

const PictureWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    z-index: -1;
    width: 100%;

    @media (max-width: 900px) {
        flex-direction: column;
        overflow: hidden;
        top: 0;
    }
`;

const DafProfPic = styled(Image)`
    height: 100vh;
    width: auto;
      @media (max-width: 900px) {
        height: auto;
        width: 100vw;

    }

`;

const Description = styled.div`
    width: 50%;
    padding: 20px;
    margin: 20px;
    background-color: ${theme.COLOR.PINK_OPACITY};
    color: #fff;
    border: 2px solid #c9447e;
    display: flex;
    flex-direction: column;
    text-align: center;
    position: absolute;
    bottom: 0;

    @media (max-width: 900px) {
        bottom: -30px;
    }
`;
