import React from 'react';
import { action } from '@storybook/addon-actions';
import { Card } from '../card';

const props = {
    title: 'July 26',
    onClick: action('onClick'),
    headerImage:
        'https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg'
};

export default {
    title: 'Card'
};

export const base = () => <Card {...props} />;
