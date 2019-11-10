import React from 'react';
import { Search } from '../components/search';

export default {
    title: 'Search'
};

export const size = () => {
    return (
        <>
            <Search placeholder="Default" />
            <br />
            <Search size="medium" placeholder="Medium" />
            <br />
            <Search size="large" placeholder="Large" />
        </>
    );
};
