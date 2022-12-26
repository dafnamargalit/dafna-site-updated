import Head from 'next/head';
import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { theme } from 'theme';
import StarrySkies from 'components/Three/StarrySkies';
import { IconLeftArrow } from 'icons';

export default function Games(props) {

    const [jumpKey, setJumpKey] = useState(false);
    const [rightKey, setRightKey] = useState(false);
    const [leftKey, setLeftKey] = useState(false);
    const [shootKey, setShootKey] = useState(false);

    // useEffect(() => {
    //     document.addEventListener('keydown', handleKeyDown);
    //     document.addEventListener('keyup', handleKeyUp);
    // });

    // const handleKeyDown = (e) => {
    //     if (e.keyCode === 38) {
    //         setJumpKey(true);
    //     }
    //     else if (e.keyCode === 39) {
    //         setRightKey(true);
    //     }
    //     else if (e.keyCode === 37) {
    //         setLeftKey(true);
    //     }
    //     else if (e.keyCode === 32) {
    //         setShootKey(true);
    //     }
    // };

    // const handleKeyUp = (e) => {
    //     if (e.keyCode === 38) {
    //         setJumpKey(false);
    //     }
    //     else if (e.keyCode === 39) {
    //         setRightKey(false);
    //     }
    //     else if (e.keyCode === 37) {
    //         setLeftKey(false);
    //     }
    //     else if (e.keyCode === 32) {
    //         setShootKey(false);
    //     }
    // };

    return (
      <Container>
        <Head>
            <title>Dafna - Games</title>
            <meta name="description" content="Welcome to Dafna's Website" />
        </Head>
        <StarrySkies />
        <LeftArrowIconWrap>
            <Link href="/home">
                <LeftArrowIcon />
            </Link>
        </LeftArrowIconWrap>
      <Content>
        <WrapGameFrame>
            <GameButtons>
                <GameButton/>
            </GameButtons>
            <GameFrame tabIndex={1} title="game" src="https://i.simmer.io/@dafna/i-love-you-the-game"></GameFrame>
            <GameButtons>
                <GameButton/>
                <ButtonRow>
                    <GameButton/>
                    <GameButton/>
                </ButtonRow>
                <GameButton/>
            </GameButtons>
        </WrapGameFrame>
        <Message>Please increase browser size to play game (desktop only game).</Message>
        <Description>
            <>The Chads have infiltrated. After the Mega Chad punched a hole big enough in the wall to allow the Minion Chads to escape, it is now up to you to defeat them. You must collect all the keys and avoid the hell-like obstacles in order to defeat the Chads and unlock the door at the end. Based off of Dafna's album "I LOVE YOU", welcome to the album come to life where you must defeat the evil Chads that caused her to write her heartbreaking tunes.  
            </>
            
            <b>CONTROLS: ARROW KEYS L+R to RUN. UP ARROW KEY to JUMP. SPACE BAR to SHOOT.</b>
            <i>if arrow keys aren't doing anything, click on the game with your mouse and try again!</i>
        </Description>
         <SpotifyEmbed src="https://open.spotify.com/embed/album/3z1mhGTHvcCKbglmGsCS4y?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></SpotifyEmbed>
         </Content>
      </Container>
    );
}


const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  font-family: ${theme.FONT.FAMILY};
`;

const GameFrame = styled.iframe`
    width: 960px;
    aspect-ratio: 16/9;
    @media (max-width: 1200px) {
        display: none;
    }
`

const WrapGameFrame = styled.div`
    width: 1200px;
    aspect-ratio: 2/1;
    background-color: ${theme.COLOR.PINKER_PINK};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5vw;
    border: 2px solid ${theme.COLOR.HOT_PINK};
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.3);
    @media (max-width: 1200px) {
        display: none;
    }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 9999;
`;

const Message = styled.div`
    width: 100%;
    text-align: center;
    color: ${theme.COLOR.LIGHT_PINK};

    @media (min-width: 1200px) {
        display: none;
    }
`;

const Description = styled.div`
    width: 90%;
    padding: 20px;
    margin: 20px;
    background-color: ${theme.COLOR.PINK_OPACITY};
    color: ${theme.COLOR.PALE_PINK};
    border: 2px solid #c9447e;
    display: flex;
    flex-direction: column;
    text-align: center;

`;

const GameButtons  = styled.div`
    display: flex;
    width: 160px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const GameButton = styled.button`
    width:60px;
    height:60px;
    margin: 10px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #ff5ca3;
    background-color: ${theme.COLOR.LIGHT_PINK};
    border: none;
    border-radius: 50%;
    box-shadow: ${props => props.pressed === true ? '0 5px #c9447e' : '0 9px #ff5ca3'};
    transform: ${props => props.pressed === true ? 'translateY(4px)' : 'translateY(0)'};
    font-family: ${theme.FONT.FAMILY};
    font-weight: ${theme.FONT.WEIGHT};
    &:hover {
    background-color: ${theme.COLOR.LIGHT_PINK};
    }
    &:active {
    box-shadow: 0 5px #c9447e;
    transform: translateY(4px);
    }
`;

const LeftArrowIconWrap = styled.div`
  width: 50px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 1em;
  z-index: 10000;
`;

const LeftArrowIcon = styled(IconLeftArrow)`
    width: 50px;
    height: 50px;
    cursor: pointer;
    &:hover {
        stroke: ${theme.COLOR.HOT_PINK};
    }
`;

const SpotifyEmbed = styled.iframe`
    border-radius: 12px;
    width: 75%;
    height: 80px;
    border-color: ${theme.COLOR.HOT_PINK};
`