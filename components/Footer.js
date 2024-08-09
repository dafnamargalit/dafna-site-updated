import React from 'react';
import styled from 'styled-components';
import github from 'images/github.svg';
import instagram from 'images/instagram.svg';
import spotify from 'images/spotify.svg';
import twitter from 'images/twitter.svg';
import youtube from 'images/youtube.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer(){

    return(
        <FooterWrap>
            <Link href="https://open.spotify.com/artist/6FR2ARlfDqNU7BMBaWjGZP?si=DSyNj67wTyi1A4G7JZF-0w" style={{textDecoration:'none'}}>
            <FooterIcon src={spotify} alt="spotify"/>
            </Link>
            <Link href="https://instagram.com/dafnamusic" style={{textDecoration:'none'}}>
            <FooterIcon src={instagram} alt="insta"></FooterIcon>
            </Link>
            <Link href="https://twitter.com/dafnarocks" style={{textDecoration:'none'}}>
            <FooterIcon src={twitter} alt="twit"></FooterIcon>
            </Link>
            <Link href="https://github.com/dafnamargalit" style={{textDecoration:'none'}}>
            <FooterIcon src={github} alt="git"></FooterIcon>
            </Link>
            <Link href="https://www.youtube.com/channel/UCzPtND9EY5MkOepLzllAbiw" style={{textDecoration:'none'}}>
            <FooterIcon src={youtube} alt="yt"></FooterIcon>
            </Link>
        </FooterWrap>
    )
}

const FooterWrap = styled.div`
    display: flex;
    align-items: center;
    padding: 1em 0;
`

const FooterIcon = styled(Image)`
    width: 3.5vh;
    height: auto;
    margin: .25vh;
    padding: 0.2em;
    transition: transform .2s;
    left: 0vh;
    &:hover{
        -webkit-filter: brightness(70%); 
    }
`

const PrivacyPolicy = styled(Link)`
    text-decoration: none;
`