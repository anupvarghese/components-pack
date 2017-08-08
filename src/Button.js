import React from 'react';
import reactPropTypes from 'prop-types';
import { Button } from 'glamorous';

const propTypes = {
  title: reactPropTypes.string,
};

const defaultProps = {
  title: 'Button',
};


const StyledButton = ({ title, ...other }) => (
  <Button
    backgroundColor="#007dff"
    color="white"
    padding="4px 10px"
    fontSize="14px"
    border="none"
    borderRadius="4px"
    {...other}
  >
    {title}
  </Button>
);

StyledButton.propTypes = propTypes;
StyledButton.defaultProps = defaultProps;

export default StyledButton;
