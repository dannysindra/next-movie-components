import React from 'react';
import { styled, withStyle } from 'baseui';
import { Button, KIND } from 'baseui/button';
import { StyledLink } from 'baseui/link';
import { Label3 } from 'baseui/typography';
import { bool, func, node, string } from 'prop-types';
import Markdown from 'react-markdown';

import { P1 } from '../typography';

const Blockquote = styled('blockquote', ({ $theme }) => ({
    borderLeft: `0.2em solid ${$theme.colors.mono700}`,
    paddingLeft: '1em'
}));

const StyledListItem = styled('li', ({ $theme }) => {
    const { breakpoints, colors, typography } = $theme;

    return {
        ...typography.font300,
        color: colors.mono200,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            ...typography.font400
        }
    };
});

const StyledAnchor = withStyle(StyledLink, ({ $theme }) => ({
    color: $theme.colors.mono600
}));

// eslint-disable-next-line react/prop-types
const ButtonMore = ({ children, onClick, ...rest }) => (
    <Button
        kind={KIND.minimal}
        $style={({ $theme }) => ({
            color: $theme.colors.mono600,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            ':hover': {
                backgroundColor: 'transparent',
                color: $theme.colors.mono600
            },
            ':focus': {
                backgroundColor: 'transparent',
                color: $theme.colors.mono600
            },
            ':active': {
                backgroundColor: 'transparent',
                color: $theme.colors.mono600
            }
        })}
        onClick={onClick}
        {...rest}
    >
        {children}
    </Button>
);

const Root = styled('div', ({ $theme, $last }) => {
    const { colors, sizing } = $theme;

    return {
        borderBottom: $last ? 'none' : `1px solid ${colors.mono900}`,
        marginBottom: $last ? sizing.scale100 : sizing.scale800,
        paddingTop: sizing.scale200,
        paddingBottom: sizing.scale600,
        paddingLeft: 0,
        paddingRight: 0
    };
});

const withFilterByIndex = WrappedListItem => ({
    index,
    parentChildCount,
    ...rest
}) => {
    if (index > 0) {
        return null;
    }

    return <WrappedListItem {...rest} />;
};

const withStyledListItem = WrappedListItem => ({
    parentChildCount,
    ordered,
    tight,
    ...rest
}) => {
    return <WrappedListItem {...rest} />;
};

export const ReviewItem = ({ author, content, last, onClick, ...rest }) => {
    return (
        <Root {...rest} $last={last}>
            <Label3 color="mono600">{author}</Label3>
            <Markdown
                includeNodeIndex
                source={content}
                renderers={{
                    blockquote: withFilterByIndex(Blockquote),
                    link: withFilterByIndex(StyledAnchor),
                    listItem: withStyledListItem(StyledListItem),
                    paragraph: withFilterByIndex(P1)
                }}
            />
            <ButtonMore onClick={onClick}>Read more</ButtonMore>
        </Root>
    );
};

ReviewItem.propTypes = {
    author: node.isRequired,
    content: string.isRequired,
    last: bool,
    onClick: func.isRequired
};

ReviewItem.defaultProps = {
    last: false
};
