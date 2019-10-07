import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './button';

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
    </>
);

export const size = () => (
    <>
        <Button {...actions} size="small">
            Small
        </Button>
        <Button {...actions}>Default</Button>
        <Button {...actions} size="large">
            Large
        </Button>
    </>
);
