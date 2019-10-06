/* eslint-disable react/button-has-type */
import React from 'react';
import classNames from 'classnames';
import { arrayOf, string, node, oneOf, oneOfType } from 'prop-types';

import './button.css';

const Button = ({ children, className, type, ...rest }) => {
    const classes = classNames('button', 'button--yellow', className);

    return (
        <button {...rest} className={classes} type={type}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: oneOfType([arrayOf(node), node]).isRequired,
    className: string,
    type: oneOf(['submit', 'button', 'reset'])
};

Button.defaultProps = {
    className: '',
    type: 'button'
};

export default Button;
