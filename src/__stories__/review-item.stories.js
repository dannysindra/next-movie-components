/* eslint-disable react/no-array-index-key */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { ReviewItem } from '../review-item';

const reviews = [
    {
        author: 'Gimly',
        content:
            "I'm not here to explain _Once Upon a Time In Hollywood_, just to enjoy it. \r\n\r\n_Final rating:★★★★ - Very strong appeal. A personal favourite._"
    },
    {
        author: 'JPV852',
        content:
            "Well, the last 15-minutes were great, the first 2.5 hours on the other hand was... uneventful. I have an interest in Hollywood, more from the 1980s though, so some of the slower scenes still kept my attention, but there's no real plot and minimal character development. \r\n\r\n\r\n\r\nThat said, DiCaprio and Pitt both give great performances and Margot Robbie of course had her moments, however I could only chuckle during the theater scene when she kicked her bare feet up. Okay, Quentin, lol. **3.0/5**"
    }
];

const onClick = action('review clicked');

export default {
    title: 'ReviewItem'
};

export const reviewItem = () =>
    reviews.map((review, index) => (
        <ReviewItem
            key={index}
            author={review.author}
            content={review.content}
            last={index === reviews.length - 1}
            onClick={onClick}
        />
    ));
