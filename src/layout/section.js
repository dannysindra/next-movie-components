import React from 'react';
import { styled } from 'baseui';
import { node, arrayOf, oneOfType } from 'prop-types';

import { H2 } from '../typography';

const LeftPane = styled('div', {
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: '30%'
});

const RightPane = styled('div', {
    flexGrow: '3',
    flexShrink: '1',
    flexBasis: '70%'
});

const Limiter = styled('div', ({ $theme }) => ({
    maxWidth: `${1.25 * $theme.breakpoints.medium}px`
}));

const Root = styled('div', ({ $theme }) => {
    const { breakpoints, sizing } = $theme;

    return {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingTop: sizing.scale800,
        paddingBottom: sizing.scale800,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            flexDirection: 'row'
        }
    };
});

export const Section = ({ label, children }) => (
    <Root>
        <LeftPane>
            <H2>{label}</H2>
        </LeftPane>
        <RightPane>
            <Limiter>{children}</Limiter>
        </RightPane>
    </Root>
);

Section.propTypes = {
    label: node.isRequired,
    children: oneOfType([node, arrayOf(node)]).isRequired
};
