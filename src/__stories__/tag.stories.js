import React from 'react';
import { Tag } from '../tag';

const style = {
    marginRight: '6px',
    marginBottom: '6px'
};

export default {
    title: 'Tag'
};

export const base = () => (
    <>
        <Tag style={style}>Action</Tag>
        <Tag style={style}>Thriller</Tag>
        <Tag style={style}>Drama</Tag>
    </>
);
