import Link from 'next/link';
import styled from 'styled-components';
import { theme } from 'theme';
import Logo from 'components/Logo';
import { IconLeftArrow } from 'icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar(props) {

    const router = useRouter();
    const [isHome, setIsHome] = useState(true);
    
    useEffect(() => {
        if (router.pathname === "/") {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
    }, [router.pathname]);
    
    return (
        !isHome ? <WrapNavBar>
            <LeftArrowIconWrap>
                <Link href="/">
                    <LeftArrowIcon />
                </Link>
            </LeftArrowIconWrap>
            <Logo width={'5vh'} padding={'0.2em'}/>
            <LeftArrowIconWrap/>
        </WrapNavBar> : <></>
  )
}

const WrapNavBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: 1em 0;
    z-index: 1000;
    position: absolute;
    top: 0;
`;

const LeftArrowIconWrap = styled.div`
  width: 50px;
  margin: 1em;
`;

const LeftArrowIcon = styled(IconLeftArrow)`
    width: 50px;
    height: 50px;
    cursor: pointer;
    &:hover {
        stroke: ${theme.COLOR.HOT_PINK};
    }
    @media (max-width: 800px) {
        width: 30px;
        height: 30px;
    }
`;