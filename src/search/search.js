import React from 'react';
import { useStyletron } from 'baseui';
import SearchIcon from 'baseui/icon/search';
import { Input as BaseInput, SIZE } from 'baseui/input';
import { string } from 'prop-types';

export { SIZE };

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
export const Search = ({ size, ...rest }) => {
    return (
        <BaseInput
            overrides={{
                Before,
                Input
            }}
            size={size}
            {...rest}
        />
    );
};

Search.propTypes = {
    size: string
};

Search.defaultProps = {
    size: SIZE.compact
};
