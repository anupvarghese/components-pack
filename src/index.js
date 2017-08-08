import React from 'react';
import reactPropTypes from 'prop-types';

const propTypes = {
  title: reactPropTypes.string,
  onClick: reactPropTypes.func,
};

const defaultProps = {
  title: 'Button',
  onClick: () => {},
};

const Button = ({ title, onClick }) => (
  <button className="Button" onClick={onClick}>
    {title}
    <style jsx>
      {
        `.Button {
          background-color: #007dff;
          color: white;
          padding: 4px 10px;
          font-size: 14px;
          border: none;
          border-radius: 4px;
        }`
      }
    </style>
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;

