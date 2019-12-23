import React from 'react';
import { Button as BaseButton, KIND, SIZE } from 'baseui/button';
import { arrayOf, string, node, oneOfType } from 'prop-types';

export { KIND, SIZE };

// https://github.com/uber/baseweb/blob/master/src/themes/creator.js#L123
// https://github.com/uber/baseweb/blob/master/src/button/styled-components.js
export const Button = React.forwardRef(
    ({ children, size, kind, ...rest }, ref) => (
        <BaseButton size={size} kind={kind} ref={ref} {...rest}>
            {children}
        </BaseButton>
    )
);

Button.propTypes = {
    children: oneOfType([arrayOf(node), node]).isRequired,
    size: string,
    kind: string
};

Button.defaultProps = {
    size: SIZE.compact,
    kind: KIND.minimal
};
