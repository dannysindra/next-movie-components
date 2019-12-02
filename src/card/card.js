import React from 'react';
import { Card as BaseCard, StyledBody } from 'baseui/card';
import { func, node } from 'prop-types';

const SIZE = {
    small: 150,
    default: 200
};

const getMinMediaQuery = minWidth =>
    `@media screen and (min-width: ${minWidth}px)`;
const getMaxMediaQuery = maxWidth =>
    `@media screen and (max-width: ${maxWidth}px)`;

const Title = {
    style: ({ $theme }) => {
        const { breakpoints, colors, typography } = $theme;
        const MQ_SMALL = getMaxMediaQuery(breakpoints.medium - 1);

        return {
            color: colors.mono100,
            textAlign: 'center',
            [MQ_SMALL]: {
                ...typography.font300
            }
        };
    }
};

const Contents = {
    style: ({ $theme }) => ({
        marginTop: $theme.sizing.scale400,
        marginRight: $theme.sizing.scale800,
        marginBottom: $theme.sizing.scale200,
        marginLeft: $theme.sizing.scale800
    })
};

// https://baseweb.design/components/card/
// https://github.com/uber/baseweb/tree/master/src/card
export const Card = ({ onClick, content, ...rest }) => {
    const Root = {
        style: ({ $theme }) => {
            const { breakpoints, colors } = $theme;
            const MQ_MEDIUM_UP = getMinMediaQuery(breakpoints.medium);

            return {
                ...(onClick && { cursor: 'pointer' }),
                backgroundColor: colors.primary,
                borderWidth: '0 0 1px 0',
                width: `${SIZE.small}px`,
                [MQ_MEDIUM_UP]: {
                    width: `${SIZE.default}px`
                }
            };
        }
    };

    return (
        <BaseCard
            overrides={{ Root, Title, Contents }}
            onClick={onClick}
            {...rest}
        >
            {content && (
                <StyledBody
                    $style={({ $theme }) => ({ color: $theme.colors.mono600 })}
                >
                    {content}
                </StyledBody>
            )}
        </BaseCard>
    );
};

Card.propTypes = {
    content: node,
    onClick: func,
    title: node
};

Card.defaultProps = {
    content: undefined,
    onClick: undefined,
    title: undefined
};
