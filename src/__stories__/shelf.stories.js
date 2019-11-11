import React from 'react';
import { action } from '@storybook/addon-actions';
import { Card } from '../card';
import { Shelf } from '../shelf';

export default {
    title: 'Shelf'
};

const props = {
    onClick: action('onClick'),
    title: 'September 20',
    headerImage:
        'https://image.tmdb.org/t/p/w500/pWt1iRuhNpeVDNP2QiUT2C5OiBt.jpg'
};

export const base = () => {
    return (
        <Shelf>
            <Card {...props} size="small" />
            <Card {...props} size="small" />
            <Card {...props} size="small" />
            <Card {...props} size="small" />
            <Card {...props} size="small" />
            <Card {...props} size="small" />
            <Card {...props} size="small" />
        </Shelf>
    );
};
