import * as React from 'react';
import { useState } from 'react';
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

  // For resize events
  React.useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth <= 680) {
        setIsOpen(false);
      }
    }
    window.addEventListener('resize', handleWindowResize);
  });

  // For initial page load. I know, there has to be a better way
  React.useEffect(() => {
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
  paragraphText: PropTypes.string,
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
