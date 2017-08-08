import React from 'react';
import { Input } from 'glamorous';


const StyledInput = ({ ...other }) => (
  <Input
    color="black"
    padding="4px 10px"
    fontSize="14px"
    border="1px solid red"
    borderRadius="4px"
    {...other}
  />
);

export default StyledInput;
