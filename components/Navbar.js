import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AP from '/letters/A-P.svg';
import AY from '/letters/A-Y.svg';
import D from '/letters/D.svg';
import F from '/letters/F.svg';
import N from '/letters/N.svg';

export default function Navbar(props) {

  return (
        <WrapLogo>
            <Link href="/dates" style={{ textDecoration: 'none' }} priority>
                <Letters src={D} alt="D" {...props}/>
            </Link>
            <Link href="/apparel" style={{ textDecoration: 'none' }} priority>
                <Letters src={AY} alt="A" {...props}/>
            </Link>
            <Link href="/footage" style={{ textDecoration: 'none' }} priority>
                <Letters src={F} alt="F" {...props}/>
            </Link>
            <Link href="/news" style={{ textDecoration: 'none' }} priority>
                <Letters src={N} alt="N" {...props}/>
            </Link>
            <Link href="/about" style={{ textDecoration: 'none' }} priority>
                <Letters src={AP} alt="A" {...props}/>
            </Link>
        </WrapLogo>
  )
}

const WrapLogo = styled.div`
  display: flex;
	align-items: center;
	justify-content: center;
`;

const Letters = styled(Image)`
	will-change: transform;
	z-index: 1000;
	width: ${props => props.width ? props.width : '17vh'};
	padding: ${props => props.padding ? props.padding : '0.5em'};
	transition: transform .2s;
	&:hover{
		transform: scale(1.2);
	}

	@media (max-width: 1024px) { 
		width: 6vh;
		padding: .2em;
	}
`;

