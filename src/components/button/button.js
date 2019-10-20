import React from 'react';
import { Button as BaseButton, KIND, SIZE } from 'baseui/button';
import { arrayOf, node, oneOf, oneOfType } from 'prop-types';

const mapButtonVariantToKind = type => {
    if (type === 'primary') {
        return KIND.primary;
    }
    if (type === 'secondary') {
        return KIND.secondary;
    }

    return KIND.minimal;
};

const mapButtonSize = size => {
    if (size === 'large') {
        return SIZE.large;
    }

    return SIZE.compact;
};

// https://github.com/uber/baseweb/blob/master/src/themes/creator.js#L123
// https://github.com/uber/baseweb/blob/master/src/button/styled-components.js
export const Button = ({ children, size, type, variant, ...rest }) => (
    <BaseButton
        {...rest}
        size={mapButtonSize(size)}
        kind={mapButtonVariantToKind(variant)}
    >
        {children}
    </BaseButton>
);

Button.propTypes = {
    children: oneOfType([arrayOf(node), node]).isRequired,
    size: oneOf(['default', 'large']),
    type: oneOf(['submit', 'button', 'reset']),
    variant: oneOf(['default', 'primary', 'secondary'])
};

Button.defaultProps = {
    size: 'default',
    type: 'button',
    variant: 'default'
};
