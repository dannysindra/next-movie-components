/* eslint-disable react/button-has-type */
import React from 'react';
import { Button as BaseButton } from 'antd';
import classNames from 'classnames';
import { arrayOf, string, node, oneOf, oneOfType } from 'prop-types';

import './button.css';

const Button = ({ children, className, type, variant, ...rest }) => {
    const classes = classNames(
        'button',
        { 'button--primary': variant === 'primary' },
        className
    );

    return (
        <BaseButton {...rest} className={classes} type={type}>
            {children}
        </BaseButton>
    );
};

Button.propTypes = {
    children: oneOfType([arrayOf(node), node]).isRequired,
    className: string,
    type: oneOf(['submit', 'button', 'reset']),
    variant: oneOf(['default', 'primary'])
};

Button.defaultProps = {
    className: '',
    type: 'button',
    variant: 'default'
};

export default Button;
