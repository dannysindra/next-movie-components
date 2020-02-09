import React from 'react';
import { Card as BaseCard, StyledBody } from 'baseui/card';
import { func, node, string, arrayOf, oneOfType } from 'prop-types';

export const CARD_KIND = {
    poster: 'poster',
    thumbnail: 'thumbnail'
};

const SIZE = {
    [CARD_KIND.poster]: {
        small: {
            width: 150,
            height: 225
        },
        default: {
            width: 200,
            height: 300
        }
    },
    [CARD_KIND.thumbnail]: {
        small: {
            width: 150,
            height: 85
        },
        default: {
            width: 200,
            height: 113
        }
    }
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
export const Card = ({
    children,
    headerImage,
    kind,
    onClick,
    title,
    ...rest
}) => {
    const size = SIZE[kind];

    const Root = {
        style: ({ $theme }) => {
            const { breakpoints, colors } = $theme;
            const MQ_MEDIUM_UP = getMinMediaQuery(breakpoints.medium);

            return {
                ...(onClick && { cursor: 'pointer' }),
                backgroundColor: colors.primary,
                borderTopWidth: '0',
                borderRightWidth: '0',
                borderBottomWidth: '1px',
                borderLeftWidth: '0',
                borderBottomColor: colors.primary,
                width: `${size.small.width}px`,
                [MQ_MEDIUM_UP]: {
                    width: `${size.default.width}px`
                }
            };
        }
    };

    const HeaderImage = {
        style: ({ $theme }) => {
            const { breakpoints } = $theme;
            const MQ_MEDIUM_UP = getMinMediaQuery(breakpoints.medium);

            return {
                width: `${size.small.width}px`,
                height: `${size.small.height}px`,
                [MQ_MEDIUM_UP]: {
                    width: `${size.default.width}px`,
                    height: `${size.default.height}px`
                }
            };
        }
    };

    return (
        <BaseCard
            overrides={{ Root, HeaderImage, Title, Contents }}
            onClick={onClick}
            headerImage={headerImage}
            title={title}
            {...rest}
        >
            {children && (
                <StyledBody
                    $style={({ $theme }) => ({ color: $theme.colors.mono600 })}
                >
                    {children}
                </StyledBody>
            )}
        </BaseCard>
    );
};

Card.propTypes = {
    children: oneOfType([node, arrayOf(node)]),
    headerImage: string,
    onClick: func,
    kind: string,
    title: node
};

Card.defaultProps = {
    children: undefined,
    headerImage: undefined,
    onClick: undefined,
    kind: CARD_KIND.poster,
    title: undefined
};
