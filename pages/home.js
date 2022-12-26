import Modal from 'components/Modal';
import Navbar from 'components/Navbar';
import ProjectIcon from 'components/ProjectIcon';
import StarrySkies from 'components/Three/StarrySkies';
import VideoGame from 'images/ily.png';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Home() {

  const [modal, setModal] = useState(true);
  
  	useEffect(() => {
    if(localStorage.getItem('seen') === 'true'){
      console.log('not seen hi', localStorage.getItem('seen'));
      localStorage.setItem('seen', 'true');
      setModal(false);
    }
    });

    const handleClose = () => {
      setModal(false);
    };

  return (
      <Container>
        <Head>
        <title>Dafna</title>
        <meta name="description" content="Welcome to Dafna's Website" />
         <link rel="shortcut icon" href="/D-square.png" />
      </Head>
        {console.log(StarrySkies)}
        <StarrySkies />
      <Content>
        <VideoGameButtonWrap>
          <Link href="/games">
            <ProjectIcon src={VideoGame} />
          </Link>
        </VideoGameButtonWrap>
        <Modal show={modal} onClose={() => handleClose()} />
        <Navbar />
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

const VideoGameButtonWrap = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 9999;
`;

