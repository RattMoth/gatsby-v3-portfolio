import React, { useState, useEffect } from 'react';
import { ArrowUpSquareFill } from 'react-bootstrap-icons';
import { Button } from './Styles';
import './style.css';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const toggleVisible = () => {
    const currentScrollPosition = document.documentElement.scrollTop;

    // Hide on upscroll, show on downscroll
    if (lastScrollPosition > currentScrollPosition) {
      setVisible(false);
    }
    if (
      currentScrollPosition > lastScrollPosition &&
      currentScrollPosition > 300
    ) {
      setVisible(true);
    }
    setLastScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  return (
    <Button type="button">
      <ArrowUpSquareFill
        id="scroll-button"
        onClick={scrollToTop}
        className={visible ? 'visible' : 'hidden'}
      />
    </Button>
  );
};

export default ScrollButton;
