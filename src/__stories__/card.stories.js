import React from 'react';
import { action } from '@storybook/addon-actions';
import { Card } from '../card';

const props = {
    title: 'September 20',
    onClick: action('onClick'),
    headerImage:
        'https://image.tmdb.org/t/p/w500/pWt1iRuhNpeVDNP2QiUT2C5OiBt.jpg'
};

export default {
    title: 'Card'
};

export const size = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <p>Small</p>
                        <Card {...props} size="small" />
                    </td>
                    <td>
                        <p>Medium</p>
                        <Card {...props} />
                    </td>
                    <td>
                        <p>Large</p>
                        <Card {...props} size="large" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
