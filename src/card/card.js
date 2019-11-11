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
    const [, theme] = useStyletron();

    const Root = {
        style: ({ $theme }) => ({
            ...(onClick && { cursor: 'pointer' }),
            backgroundColor: $theme.colors.primary,
            borderWidth: '0 0 1px 0',
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

    const Contents = {
        style: ({ $theme }) => ({
            marginTop: $theme.sizing.scale400,
            marginRight: $theme.sizing.scale800,
            marginBottom: $theme.sizing.scale200,
            marginLeft: $theme.sizing.scale800
        })
    };

    return (
        <BaseCard
            overrides={{ Root, Title, Contents }}
            onClick={onClick}
            {...rest}
        >
            {content && (
                <StyledBody style={{ color: theme.colors.mono600 }}>
                    {content}
                </StyledBody>
            )}
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
