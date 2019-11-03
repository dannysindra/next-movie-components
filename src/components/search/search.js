import React from 'react';
import { useStyletron } from 'baseui';
import SearchIcon from 'baseui/icon/search';
import { Input as BaseInput } from 'baseui/input';

const Before = () => {
    const [useCss, theme] = useStyletron();

    return (
        <div
            className={useCss({
                display: 'flex',
                alignItems: 'center',
                paddingLeft: theme.sizing.scale500
            })}
        >
            <SearchIcon size="18px" />
        </div>
    );
};

const Input = {
    styles: {
        outline: '#163b50'
    }
};

// https://baseweb.design/components/input/
export const Search = props => (
    <BaseInput
        overrides={{
            Before,
            Input
        }}
        {...props}
    />
);
