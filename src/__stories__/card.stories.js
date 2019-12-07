import React from 'react';
import { action } from '@storybook/addon-actions';
import { Block } from 'baseui/block';
import Show from 'baseui/icon/show';
import { Card } from '../card';

const data = {
    title: 'Once Upon a Time in Hollywood',
    shortReleaseDate: 'July 26',
    views: '7.5k',
    onClick: action('onClick'),
    thumbnailImgUrl:
        'https://image.tmdb.org/t/p/w300/aQLygZOIKai6aaiBAeeKpIWO5nc.jpg',
    posterImgUrl:
        'https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg'
};

export default {
    title: 'Card'
};

export const poster = () => (
    <Card
        headerImage={data.posterImgUrl}
        title={data.shortReleaseDate}
        onClick={data.onClick}
    />
);

export const Thumbnail = () => (
    <Card onClick={data.onClick} headerImage={data.thumbnailImgUrl}>
        <Block color="white" marginBottom="6px">
            {data.title}
        </Block>
        <Block>
            <Show size="0.8em" color="lightgray" />
            {` ${data.views}`}
        </Block>
    </Card>
);
