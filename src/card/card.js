import React from 'react';
import { useStyletron } from 'baseui';
import { Card as BaseCard, StyledBody } from 'baseui/card';
import { func, node, string, oneOf } from 'prop-types';

const mapSizeToWidth = size => {
    if (size === 'small') {
        return '200px';
    }
    if (size === 'large') {
        return '300px';
    }
    return '250px';
};

// https://baseweb.design/components/card/
// https://github.com/uber/baseweb/tree/master/src/card
export const Card = ({ onClick, content, size, ...rest }) => {
    const [useCss, theme] = useStyletron();
    const grayColor = useCss({ color: theme.colors.mono600 });

    const Root = {
        style: ({ $theme }) => ({
            ...(onClick && { cursor: 'pointer' }),
            backgroundColor: $theme.colors.primary,
            width: mapSizeToWidth(size)
        })
    };

    const Title = {
        style: ({ $theme }) => ({
            ...(size === 'small' && $theme.typography.font350),
            ...(size === 'medium' && $theme.typography.font400),
            color: $theme.colors.mono100,
            textAlign: 'center'
        })
    };

    return (
        <BaseCard overrides={{ Root, Title }} onClick={onClick} {...rest}>
            <StyledBody className={grayColor}>{content}</StyledBody>
        </BaseCard>
    );
};

Card.propTypes = {
    content: node,
    onClick: func,
    size: oneOf(['small', 'medium', 'large']),
    title: string
};

Card.defaultProps = {
    content: undefined,
    onClick: undefined,
    size: 'medium',
    title: undefined
};
