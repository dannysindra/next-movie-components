import React from 'react';
import { Search, SIZE } from '../search';

export default {
    title: 'Search'
};

export const size = () => {
    return (
        <>
            <Search placeholder="Default" />
            <br />
            <Search size={SIZE.default} placeholder="Medium" />
            <br />
            <Search size={SIZE.large} placeholder="Large" />
        </>
    );
};
