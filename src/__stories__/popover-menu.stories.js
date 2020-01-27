import React from 'react';
import { Block } from 'baseui/block';
import { PLACEMENT } from 'baseui/popover';
import { action } from '@storybook/addon-actions';

import { PopoverMenu } from '../popover-menu';

const actions = {
    onWatchlistClick: action('onWatchlistClick'),
    onLogoutClick: action('onLogoutClick')
};

const menuItems = [
    { label: 'My watchlist', callback: actions.onWatchlistClick },
    { label: 'Log out', callback: actions.onLogoutClick }
];

export default {
    title: 'PopoverMenu'
};

export const base = () => (
    <Block display="flex" justifyContent="flex-end" width="50%">
        <PopoverMenu items={menuItems} placement={PLACEMENT.bottomRight} />
    </Block>
);
