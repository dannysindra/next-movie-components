import React from 'react';
import { Card } from './card';

const props = {
    title: 'Downtown Abbey',
    posterUrl:
        'https://image.tmdb.org/t/p/w500/pWt1iRuhNpeVDNP2QiUT2C5OiBt.jpg',
    releaseDate: 'September 20'
};

export default {
    title: 'Card'
};

export const base = () => {
    return (
        <>
            <Card {...props} />
            <br />
            <Card {...props} size="large" />
        </>
    );
};
