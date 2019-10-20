import React from 'react';
import { useStyletron } from 'baseui';
import { Card as BaseCard, StyledBody } from 'baseui/card';
import { string, oneOf } from 'prop-types';

const mapSizeToWidth = size => {
    if (size === 'large') {
        return '280px';
    }
    return '230px';
};

// https://baseweb.design/components/card/
// https://github.com/uber/baseweb/tree/master/src/card
export const Card = ({ title, posterUrl, releaseDate, size, ...rest }) => {
    const [, theme] = useStyletron();

    return (
        <BaseCard
            {...rest}
            overrides={{
                Root: {
                    style: ({ $theme }) => ({
                        backgroundColor: $theme.colors.primary,
                        width: mapSizeToWidth(size)
                    })
                },
                Title: {
                    style: ({ $theme }) => ({
                        color: $theme.colors.mono100
                    })
                }
            }}
            headerImage={posterUrl}
            title={title}
        >
            <StyledBody style={{ color: theme.colors.mono600 }}>
                {releaseDate}
            </StyledBody>
        </BaseCard>
    );
};

Card.propTypes = {
    title: string.isRequired,
    posterUrl: string,
    releaseDate: string.isRequired,
    size: oneOf(['default', 'large'])
};

Card.defaultProps = {
    posterUrl: '',
    size: 'default'
};
