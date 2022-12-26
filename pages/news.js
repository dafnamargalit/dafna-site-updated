import Navbar from 'components/Navbar';
import Slideshow from 'components/Slideshow';
import StarrySkies from 'components/Three/StarrySkies';
import { IconLeftArrow } from 'icons';
import slide1m from 'images/SLIDE-1-MOBILE.png';
import slide1 from 'images/SLIDE-1.png';
import slide2m from 'images/SLIDE-2-MOBILE.png';
import slide2 from 'images/SLIDE-2.png';
import slide3m from 'images/SLIDE-3-MOBILE.png';
import slide3 from 'images/SLIDE-3.png';
import E from 'letters/E-G.svg';
import N from 'letters/N.svg';
import S from 'letters/S-G.svg';
import W from 'letters/W-G.svg';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from 'theme';

const images = [{image: slide1, mobile: slide1m, link: 'https://dafna.rocks/games'}, {image: slide3, mobile: slide3m, link: 'https://shop.dafna.rocks/product/when-i-was-with-you-vinyl'},{image: slide2, mobile: slide2m, link: 'https://shop.dafna.rocks/product/8nights-t-shirt'}];


export default function News() {
    return(
        <NewsWrap>
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
        <Header>
            <Title>  
                <Letter src={N} alt="N"></Letter>
                <Letter src={E} alt="E"></Letter>
                <Letter src={W} alt="W"></Letter>
                <Letter src={S} alt="S"></Letter>
            </Title>
        </Header>
        <Body>
            <ImageWrap>
                <Slideshow slides={images} delay="3500"></Slideshow>
           </ImageWrap>
        </Body>
        </Content>
    </NewsWrap>
    )
}

const NewsWrap = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: scroll;
`
const NavbarHeader = styled.div`
    width: 100vw;
    position: absolute;
    top: -50px;
    z-index: 10001;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10vh;
    margin-bottom: 5vh;
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
    height: 75px;
    @media (max-width: 675px) {
    font-size: 20px;
    }
`

const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    @media (max-width: 400px){
        width: 100vw;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    align-items: center;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 9999;
`;

const ImageWrap = styled.div`
    width: 60vw;
    @media (max-width: 768px){
        width: 63vw;
    }
    @media (max-width: 500px){
        width: 80vw;
    }
    @media (max-width: 400px){
        width: 90vw;
    }
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