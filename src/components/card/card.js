import React from 'react';
import { useStyletron } from 'baseui';
import { Card as BaseCard, StyledBody } from 'baseui/card';
import { string, oneOf } from 'prop-types';

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
export const Card = ({ title, posterUrl, releaseDate, size, ...rest }) => {
    const [, theme] = useStyletron();

    return (
        <BaseCard
            overrides={{
                Root: {
                    style: ({ $theme }) => ({
                        backgroundColor: $theme.colors.primary,
                        width: mapSizeToWidth(size)
                    })
                },
                Title: {
                    style: ({ $theme }) => ({
                        ...(size === 'small' && $theme.typography.font350),
                        ...(size === 'medium' && $theme.typography.font400),
                        color: $theme.colors.mono100
                    })
                }
            }}
            headerImage={posterUrl}
            title={title}
            {...rest}
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
    size: oneOf(['small', 'medium', 'large'])
};

Card.defaultProps = {
    posterUrl: '',
    size: 'medium'
};
