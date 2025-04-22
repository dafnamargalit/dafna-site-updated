import Layout from 'components/Layout';
import Logo from 'components/Logo';
import Modal from 'components/Modal';
import ProjectIcon from 'components/ProjectIcon';
import VideoGame from 'images/ily.png';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Home() {

  const [modal, setModal] = useState(false);
  
  	useEffect(() => {
      if(localStorage.getItem('seen') !== 'true') {
        setModal(true);
      }
    });

    useEffect(() => {
      window.location.href = 'https://dafna.music'
    }, [])

    const handleClose = () => {
      localStorage.setItem('seen', 'true');
      setModal(false);
    };

  return (
    <Layout>
      <Content>
      <Head>
        <title>Dafna</title>
        <meta name="description" content="Welcome to Dafna's Website" />
         <link rel="shortcut icon" href="/D-square.png" />
      </Head>
        <VideoGameButtonWrap>
            <ProjectIcon src={VideoGame} href="/games"/>
        </VideoGameButtonWrap>
        <Modal show={modal} onClose={() => handleClose()} />
        <Logo />
      </Content>
    </Layout>
  )
}

const VideoGameButtonWrap = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100vw;
  height: 100vh;
`;