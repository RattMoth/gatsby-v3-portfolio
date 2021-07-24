import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const FoldableContainer = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const {
    headerText,
    buttonTextWhenOpen,
    buttonTextWhenClosed,
    children,
    paragraphText,
  } = props;

  // This was a cool solution, but ultimately provides a somewhat useless feature.
  // Hide projects on window resize is not as useful as I thought it could be.
  // For resize events
  // useEffect(() => {
  //   function handleWindowResize() {
  //     const difference = Math.abs(window.innerWidth - windowSize);
  //     console.log('difference', difference);
  //     console.log(
  //       'nonno numb: ',
  //       Math.abs(window.innerWidth - window.innerHeight)
  //     );
  //     if (
  //       difference < 20 ||
  //       difference !== 0 ||
  //       difference === Math.abs(window.innerWidth - window.innerHeight)
  //     ) {
  //       console.log('returned');
  //       setWindowSize(window.innerWidth);
  //       return;
  //     }
  //     setIsOpen(false);
  //   }
  //   window.addEventListener('resize', handleWindowResize);
  // });

  // For initial page load. I know, there has to be a better way
  useEffect(() => {
    if (window.innerWidth <= 680) {
      setIsOpen(false);
    }
  }, []);

  return (
    <>
      <div className="d-flex align-items-start justify-content-between">
        <h1>{headerText}</h1>
        <Button
          className="btn mb-4"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {isOpen ? buttonTextWhenOpen : buttonTextWhenClosed}
        </Button>
      </div>
      <div>
        <p>{paragraphText}</p>
      </div>

      <Collapse in={isOpen}>
        <div>{children}</div>
      </Collapse>
    </>
  );
};

FoldableContainer.propTypes = {
  headerText: PropTypes.string,
  paragraphText: PropTypes.node,
  buttonTextWhenClosed: PropTypes.string,
  buttonTextWhenOpen: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

FoldableContainer.defaultProps = {
  headerText: 'Section Header',
  buttonTextWhenClosed: 'Open Section',
  buttonTextWhenOpen: 'Close Section',
  paragraphText:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laudantium ipsam magnam facilis numquam, nemo assumenda excepturi consequuntur delectus architecto impedit minima, fugit quasi iste?',
};
