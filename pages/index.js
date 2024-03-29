import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

export default function Index() {

  const [clicked, setClicked] = useState(false);

  return (
      <Container>
        <Head>
        <title>Dafna</title>
        <meta name="description" content="Welcome to Dafna's Website" />
         <link rel="shortcut icon" href="/D-square.png" />
         <link
          rel="preload"
          href="images/merch.png"
          as="image"
        />
        <link
          rel="preload"
          href="images/daf.png"
          as="image"
        />
        <link
          rel="preload"
          href="images/daf2.png"
          as="image"
        />
                <link
          rel="preload"
          href="images/daf3.png"
          as="image"
        />
      </Head>
       {clicked ? <Text>ENTERING...</Text> : 
       <Link href="/home">
        <WelcomeButton onClick={() => setClicked(true)}>
         CLICK HERE TO ENTER DAFNA'S WEBSITE
        </WelcomeButton>
        </Link>}

      </Container>
  )
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
`;

const WelcomeButton = styled.button`
  background: #000000;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 10px 20px;
  font-family: "Courier New", Courier, monospace;
  &:hover {
    cursor: pointer;
    background: #1e1f1f;
  }
`;

const Text = styled.div`
  color: #ffffff;
  text-decoration: none;
   font-family: "Courier New", Courier, monospace;
`;