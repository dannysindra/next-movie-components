import React from 'react';
import { Genre } from '../genre';

const style = {
    marginRight: '6px',
    marginBottom: '6px'
};

export default {
    title: 'Genre'
};

export const base = () => (
    <>
        <Genre style={style}>Action</Genre>
        <Genre style={style}>Thriller</Genre>
        <Genre style={style}>Drama</Genre>
    </>
);
