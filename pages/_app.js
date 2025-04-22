import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { AnimatePresence } from "framer-motion"
import Footer from "components/Footer";
import StarrySkies from 'components/Three/StarrySkies';
import Navbar from "components/Navbar";
import { theme } from 'theme';

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  font-family: "Courier New", Courier, monospace;
  background: linear-gradient(to right, #030b25 0%, #081645 100%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: -10000;
}  

button {
  background: #000000;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 10px 20px;
  font-family: "Courier New", Courier, monospace;
}

button:hover {
  cursor: pointer;
  background: #1e1f1f;
}
`
export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.location.href = 'https://www.hotelcafe.com/tickets/?s=events_view&id=14653'
  }, [])
  
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
    <Container>
      <StarrySkies />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
      <FooterWrap>
      <Footer />
    </FooterWrap>
    </Container>
  </ThemeProvider>
  </>
  )
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`;

const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 30px;
  position: absolute;
  width: 100vw;
`;