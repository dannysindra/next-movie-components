import React from 'react';
import { Block } from 'baseui/block';
import { action } from '@storybook/addon-actions';

import { Button, KIND } from '../button';
import { Navigation } from '../navigation';
import { Search } from '../search';

const actions = {
    onLoginClick: action('onLoginClick')
};

const NextMovieLink = () => (
    <Block
        as="h1"
        margin={0}
        $style={({ $theme }) => ({ color: $theme.colors.colorPrimary })}
    >
        Next Movie
    </Block>
);

const Finder = () => (
    <Block display={['none', 'none', 'block']} width="370px">
        <Search placeholder="Search a movie by title" />
    </Block>
);

const LoginButton = () => (
    <Button onClick={actions.onLoginClick} kind={KIND.primary}>
        Sign In
    </Button>
);

export default {
    title: 'Navigation'
};

export const base = () => (
    <Navigation
        logo={<NextMovieLink />}
        finder={<Finder />}
        control={<LoginButton />}
    />
);
