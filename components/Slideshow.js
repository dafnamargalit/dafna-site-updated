import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export default function Slideshow(props) {

  const { slides, delay } = props;


  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    }

  useEffect(() => {
    resetTimeout();
    handleWindowSizeChange();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      resetTimeout();
      window.removeEventListener('resize', handleWindowSizeChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const isMobile = width <= 768;

  return (
    <SlideshowWrap>
      <SlideshowSlider
      index={index}
      >
    {slides.map((slide, i) => (
        <Link 
            href={slide.link}
            key={i}>
          <Slide
            src={isMobile ? slide.mobile : slide.image}
            alt=""
            priority
          />
        </Link>)  
    )}
    </SlideshowSlider>
      <SlideshowDots>
        {slides.map((_, idx) => (
          <SlideshowDot
            key={idx}
            active={index === idx}
            onClick={() => {
              setIndex(idx);
            }}
          ></SlideshowDot>
        ))}
      </SlideshowDots>
    </SlideshowWrap>
  );
}

const SlideshowWrap = styled.div`
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
`;

const SlideshowSlider = styled.div`
    white-space: nowrap;
    transition: ease 1000ms;
    transform: translate3d(${props => `${-props.index*100}%`}, 0, 0);
`;
  
const Slide =  styled(Image)`
    display: inline-block;
    width: 100%;
    height: auto;
`;

const SlideshowDots  = styled.div`
    text-align: center;
`;
  
const SlideshowDot = styled.div`
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
  
    cursor: pointer;
    margin: 15px 7px 0px;
  
    background-color: ${props => props.active ? "#ff73e3" : "#c4c4c4"};

`;
