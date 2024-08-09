import daf from 'images/daf.png';
import daf2 from 'images/daf2.png';
import daf3 from 'images/daf3.png';
import A from 'letters/A-P.svg';
import B from 'letters/B-P.svg';
import O from 'letters/O-P.svg';
import T from 'letters/T-P.svg';
import U from 'letters/U-P.svg';
import Image from "next/image";
import styled from "styled-components";
import { theme } from "theme";
import profile from 'images/profile.png';
import profile2 from "images/profile2.png";

export default function About(){
    return (
        <Content>
            <Title>
                <Letter src={A}></Letter>
                <SmallerLetter src={B}></SmallerLetter>
                <Letter src={O}></Letter>
                <Letter src={U}></Letter>
                <Letter src={T}></Letter>
            </Title> 
            <Row>
                <DafProfPic src={profile} />
                <Description>
                    hi! welcome to my website. i made it all by myself! i'm a 23 year old singer/songwriter and producer working as a software engineer in los angeles (but i'm originally from boulder colorado). i love making music and coding and creating pretty much anything you might find on this website. go stream my music, play my games, watch my videos and buy my merch! love you!
                </Description>
            </Row>
        </Content>  
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 90vh;
    color: white;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    height: 20vh;
    @media (max-width: 675px) {
    }
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
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

const DafProfPic = styled(Image)`
    height: 50vh;
    width: auto;
    border-radius: 50%;
    margin: 0 5vw;
`;


const Description = styled.div`
    width: 30vw;
    padding: 20px;
    background-color: ${theme.COLOR.PINK_OPACITY};
    color: #fff;
    border: 2px solid #c9447e;
    display: flex;
    flex-direction: column;
    text-align: center;
`;
