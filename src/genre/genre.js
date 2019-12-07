import React from 'react';
import { Button, KIND, SIZE, SHAPE } from 'baseui/button';
import { node } from 'prop-types';

const BaseButton = {
    style: ({ $theme }) => {
        const { colors, typography } = $theme;

        return {
            ...typography.font200,
            backgroundColor: colors.primary700,
            color: colors.mono200,
            ':hover': {
                backgroundColor: colors.primary700
            },
            ':focus': {
                backgroundColor: colors.primary700
            },
            ':active': {
                backgroundColor: colors.primary700
            }
        };
    }
};

export const Genre = ({ children, ...rest }) => (
    <Button
        kind={KIND.secondary}
        size={SIZE.compact}
        shape={SHAPE.pill}
        overrides={{ BaseButton }}
        {...rest}
    >
        {children}
    </Button>
);

Genre.propTypes = {
    children: node.isRequired
};
