import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './button';

export default {
    title: 'Button'
};

export const base = () => (
    <Button onClick={action('clicked')}>Hello World!</Button>
);
