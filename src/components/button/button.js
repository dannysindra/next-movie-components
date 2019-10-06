import React from 'react';

import './button.css';

const Button = props => {
    return (
        <button {...props} className="button button--yellow" type="button">
            Sign In
        </button>
    );
};

export default Button;
