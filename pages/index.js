import Head from 'next/head';
import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import D from '/letters/D.svg';
import AP from '/letters/A-P.svg';
import F from '/letters/F.svg';
import N from '/letters/N.svg';
import AY from '/letters/A-Y.svg';
import { theme } from 'theme';
import Modal from 'components/Modal';
import StarrySkies from 'components/Three/StarrySkies';

export default function Home() {

  const [modal, setModal] = useState(true);
  
  	// useEffect(() => {
    // if(localStorage.getItem('seen') !== 'true'){
    //   console.log('not seen');
    //   localStorage.setItem('seen', 'true');
    //   setModal(true);
    // }
    // });

    const handleClose = () => {
      setModal(false);
    };

  return (
    <Suspense fallback={<Container>Loading...</Container>}>
      <Head>
        <title>Dafna</title>
        <meta name="description" content="Welcome to Dafna's Website" />
      </Head>
      <Container>
        <StarrySkies />
      <Content>
        <Modal show={modal} onClose={() => handleClose()} />
        <WrapLogo>
          <Link href="/dates" style={{ textDecoration: 'none' }}>
							<Letters src={D} alt="D" />
						</Link>
						<Link href="/apparel" style={{ textDecoration: 'none' }}>
							<Letters src={AY} alt="A" />
						</Link>
						<Link href="/footage" style={{ textDecoration: 'none' }}>
							<Letters src={F} alt="F" />
						</Link>
						<Link href="/news" style={{ textDecoration: 'none' }}>
							<Letters src={N} alt="N" />
						</Link>
						<Link href="/about" style={{ textDecoration: 'none' }}>
							<Letters src={AP} alt="A" />
						</Link>
        </WrapLogo>
      </Content>
      </Container>
    </Suspense>
  )
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
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

const WrapLogo = styled.div`
  display: flex;
	align-items: center;
	justify-content: center;
`;

const Letters = styled(Image)`
	will-change: transform;
	z-index: 1000;
	width: 17vh;
	padding: 0.5em;
	transition: transform .2s;

	&:hover{
		transform: scale(1.2);
	}

	@media (max-width: 1024px) { 
		width: 6vh;
		padding: .2em;
	}
`;