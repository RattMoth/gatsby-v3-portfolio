import * as React from 'react';
import { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const FoldableContainer = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const { buttonText, children } = props;
  console.log('children: ', children);
  console.log('isOpen', isOpen);
  return (
    <div>
      <Button
        className="btn"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {buttonText}
      </Button>

      <Collapse in={isOpen}>{children}</Collapse>
    </div>
  );
};

FoldableContainer.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

FoldableContainer.defaultProps = {
  buttonText: 'Toggle',
};
