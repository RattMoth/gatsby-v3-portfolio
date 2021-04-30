import * as React from 'react';
import { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const FoldableContainer = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const { headerText, buttonText, children } = props;
  return (
    <>
      <div className="d-flex align-items-start justify-content-between">
        <h2>{headerText}</h2>
        <Button
          className="btn"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {buttonText}
        </Button>
      </div>

      <Collapse in={isOpen}>
        <div>{children}</div>
      </Collapse>
    </>
  );
};

FoldableContainer.propTypes = {
  headerText: PropTypes.string,
  buttonText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

FoldableContainer.defaultProps = {
  headerText: 'Section Header',
  buttonText: 'Toggle Section',
};
