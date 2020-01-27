import React from 'react';
import { Block } from 'baseui/block';
import { PLACEMENT } from 'baseui/popover';
import { StyledNavigationItem } from 'baseui/header-navigation';
import { action } from '@storybook/addon-actions';

import { Button, KIND } from '../button';
import { PopoverMenu } from '../popover-menu';
import { Navigation } from '../navigation';
import { Search } from '../search';

const actions = {
    onWatchlistClick: action('onWatchlistClick'),
    onLogoutClick: action('onLogoutClick')
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
    <Block width={['120px', '120px', '370px']}>
        <Search placeholder="Search a movie by title" />
    </Block>
);

const LoginButton = () => (
    <Button onClick={actions.onLoginClick} kind={KIND.primary}>
        Sign In
    </Button>
);

const menuItems = [
    { label: 'My watchlist', callback: actions.onWatchlistClick },
    { label: 'Log out', callback: actions.onLogoutClick }
];

export default {
    title: 'Navigation'
};

export const base = () => (
    <Navigation
        logo={<NextMovieLink />}
        items={
            <>
                <StyledNavigationItem>
                    <Finder />
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <LoginButton />
                </StyledNavigationItem>
            </>
        }
    />
);

export const authenticated = () => (
    <Navigation
        logo={<NextMovieLink />}
        items={
            <>
                <StyledNavigationItem>
                    <Finder />
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <PopoverMenu
                        items={menuItems}
                        placement={PLACEMENT.bottomRight}
                    />
                </StyledNavigationItem>
            </>
        }
    />
);
