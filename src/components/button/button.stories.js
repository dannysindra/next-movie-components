import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './button';

const actions = {
    onClick: action('clicked')
};

export default {
    title: 'Button'
};

export const variant = () => (
    <>
        <Button {...actions}>Default</Button>
        <Button {...actions} variant="primary">
            Primary
        </Button>
        <Button {...actions} variant="secondary">
            Secondary
        </Button>
    </>
);

export const size = () => (
    <>
        <Button {...actions} variant="secondary">
            Default
        </Button>
        <Button {...actions} variant="primary" size="large">
            Large
        </Button>
    </>
);
