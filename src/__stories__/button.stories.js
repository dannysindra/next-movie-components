import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button, KIND, SIZE } from '../button';

const actions = {
    onClick: action('clicked')
};

export default {
    title: 'Button'
};

export const variant = () => (
    <>
        <Button {...actions}>Default</Button>
        <Button {...actions} kind={KIND.primary}>
            Primary
        </Button>
        <Button {...actions} kind={KIND.secondary}>
            Secondary
        </Button>
    </>
);

export const size = () => (
    <>
        <Button {...actions} kind={KIND.secondary}>
            Default
        </Button>
        <Button {...actions} kind={KIND.primary} size={SIZE.default}>
            Large
        </Button>
        <Button {...actions} kind={KIND.tertiary} size={SIZE.large}>
            Larger
        </Button>
    </>
);
