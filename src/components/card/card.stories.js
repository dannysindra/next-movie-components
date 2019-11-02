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
