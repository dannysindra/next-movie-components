import React from 'react';
import { KIND } from 'baseui/button';
import MenuIcon from 'baseui/icon/menu';
import { StatefulPopover } from 'baseui/popover';
import { StatefulMenu } from 'baseui/menu';
import { arrayOf, shape, string } from 'prop-types';

import { Button } from '../button';

const BaseButton = {
    style: ({ $theme }) => ({
        display: 'block',
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        height: '36px',
        color: $theme.colors.white,
        ':hover': {
            backgroundColor: 'transparent'
        },
        ':focus': {
            backgroundColor: 'transparent'
        },
        ':active': {
            backgroundColor: 'transparent'
        }
    })
};

export const PopoverMenu = ({ items, placement, ...rest }) => {
    return (
        <StatefulPopover
            placement={placement}
            content={({ close }) => (
                <StatefulMenu
                    items={items}
                    onItemSelect={({ item }) => {
                        if (item.callback) {
                            item.callback(rest);
                        }
                        close();
                    }}
                />
            )}
        >
            <Button kind={KIND.tertiary} overrides={{ BaseButton }}>
                <MenuIcon size={36} />
            </Button>
        </StatefulPopover>
    );
};

PopoverMenu.propTypes = {
    items: arrayOf(shape({})).isRequired,
    placement: string
};

PopoverMenu.defaultProps = {
    placement: undefined
};
