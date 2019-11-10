import React from 'react';
import { useStyletron } from 'baseui';
import SearchIcon from 'baseui/icon/search';
import { Input as BaseInput, SIZE } from 'baseui/input';
import { oneOf } from 'prop-types';

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

const mapSize = size => {
    if (size === 'medium') {
        return SIZE.default;
    }
    if (size === 'large') {
        return SIZE.large;
    }
    return SIZE.compact;
};

// https://baseweb.design/components/input/
export const Search = ({ size, ...rest }) => {
    return (
        <BaseInput
            overrides={{
                Before,
                Input
            }}
            size={mapSize(size)}
            {...rest}
        />
    );
};

Search.propTypes = {
    size: oneOf(['default', 'medium', 'large'])
};

Search.defaultProps = {
    size: 'default'
};
