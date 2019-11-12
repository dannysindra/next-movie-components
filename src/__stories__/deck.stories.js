import React from 'react';
import { action } from '@storybook/addon-actions';
import { Card } from '../card';
import { Deck } from '../deck';

export default {
    title: 'Deck'
};

const props = {
    onClick: action('onClick'),
    title: 'July 26',
    headerImage:
        'https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg'
};

export const base = () => {
    return (
        <Deck>
            <Card {...props} />
            <Card {...props} />
            <Card {...props} />
            <Card {...props} />
            <Card {...props} />
            <Card {...props} />
            <Card {...props} />
        </Deck>
    );
};
