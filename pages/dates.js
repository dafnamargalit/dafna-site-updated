import Navbar from 'components/Navbar';
import StarrySkies from 'components/Three/StarrySkies';
import { IconLeftArrow } from 'icons';
import A from 'letters/A-P.svg';
import D from 'letters/D.svg';
import E from 'letters/E-P.svg';
import S from 'letters/S-P.svg';
import T from 'letters/T-P.svg';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from 'theme';

const shows = [
    // {
    //     title: 'Adam Melchor with Dafna at Gothic Theatre',
    //     date: 'Jan 28th 2022',
    //     location: 'Englewood, CO',
    //     link: 'https://link.seated.com/cbe5f762-798d-470f-91c4-ede2be4fbe89'
    // },
      
]

export default function Dates() {
    return (
        <DatesWrap>
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
                        <Letter src={D} alt="D" priority/>
                        <Letter src={A} alt="A" priority/>
                        <Letter src={T} alt="T" priority/>
                        <Letter src={E} alt="E" priority/>
                        <Letter src={S} alt="S" priority/>
                    </Title>
                </Header>
                <Body>
                    {(shows.length > 0) ? shows.map((show, i) => (
                        <ListWrapper key={i}>
                        <ListItem>
                           
                            <ShowDate>{show.date}</ShowDate>
                         <ShowTitle>{show.title}</ShowTitle>
                            
                            <ShowLocation>{show.location}</ShowLocation>
                            <TicketButton href={show.link}>
                                GET TICKETS <span style={{ fontFamily: "sans-serif" }}>&#8594;</span>
                            </TicketButton>
                        </ListItem>
                        <Divider/>
                        </ListWrapper>
                    ))
                        :
                        (
                            <Nothing>
                                <ShowLocation> No Upcoming Tour Dates :-( </ShowLocation>
                                <ShowLocation>Book me:</ShowLocation>
                                <ShowLocation><a href="mailto: bookings@dafna.rocks" style={{ color: theme.COLOR.YELLOW }}> bookings@dafna.rocks</a></ShowLocation>
                            </Nothing>
                        )
                    }
                </Body>
            </Content>
        </DatesWrap>
    )
}

const DatesWrap = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
`;

const Letter = styled(Image)`
    width: 7vh;
    padding: 0.25vh;
`;

const NavbarHeader = styled.div`
    width: 50px;
    top: 0px;
    margin: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10002;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
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

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 15vh;
    transition: all 0.5s ease 0s;
    user-select: none;
`

const Body = styled.div`
    overflow: scroll;
    height: 50vh;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    color: ${theme.COLOR.YELLOW};
    text-align: center;
    font-size: 24px;
    width: 100%;
    justify-content: center;
    height: 50px;
    @media (max-width: 675px) {
    font-size: 20px;
    }
`

const ShowTitle = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    color: ${theme.COLOR.YELLOW};
    text-align: center;
    font-size: 20px;
    @media (max-width: 675px) {
    font-size: 20px;
    }
`

const ShowDate = styled.div`
    display: flex;
    margin-top: .5em;
    align-items: center;
    font-weight: 800;
    color: ${theme.COLOR.YELLOW};
    text-align: center;
    font-size: 20px;
    @media (max-width: 675px) {
    font-size: 20px;
    }
`

const ShowLocation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    font-style: italic;
    color: ${theme.COLOR.YELLOW};
    text-align: center;
    font-size: 20px;
    @media (max-width: 675px) {
    font-size: 20px;
    }
`
const TicketButton = styled.a`
    color: ${theme.COLOR.YELLOW};
    font-weight: 800;
    padding: 10px;
    margin: 1em;
    border: 2px solid ${theme.COLOR.YELLOW};
    text-decoration: none;
    text-align: center;
    cursor:pointer;
    &:hover {
        color: ${theme.COLOR.PURPLY_PINK};
        border: 2px solid ${theme.COLOR.PURPLY_PINK};
    }
`

const ListItem = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, minmax(0,1fr)); 
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    @media (max-width: 800px){
    display: flex;
    grid-gap: 0;
    flex-direction: column;
    text-align: center;
    }
`
const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Divider = styled.div`
    width: 30%;
    height: 1px;
    background-color: ${theme.COLOR.YELLOW};
    margin: 10px;
`;

const Nothing = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
    height: 10vh;
`

const LeftArrowIconWrap = styled.div`
  width: 50px;
  position: absolute;
  top: 30px;
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