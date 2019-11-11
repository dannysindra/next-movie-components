import { styled } from 'baseui';

const buttonStyle = {
    position: 'absolute',
    top: '0',
    bottom: '0',
    cursor: 'pointer',
    backgroundColor: 'rgba(0,0,0,0.5)',
    border: 'none',
    color: 'white',
    minWidth: '40px',
    fontSize: '18px',
    transform: 'scale(1, 2)',
    ':focus': {
        outline: '0'
    },
    ':hover': {
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
};

export const PreviousButton = styled('button', ({ $visible }) => ({
    ...buttonStyle,
    display: $visible ? 'block' : 'none',
    left: '0'
}));

export const NextButton = styled('button', ({ $visible }) => ({
    ...buttonStyle,
    display: $visible ? 'block' : 'none',
    right: '0'
}));

export const ListItem = styled('li', {
    marginRight: '15px',
    boxSizing: 'border-box'
});

export const ListContainer = styled('ul', {
    listStyleType: 'none',
    margin: '0 auto -15px auto',
    padding: '0 0 15px 0',
    width: '100%',
    height: '100%',
    display: 'flex',
    overflowX: 'auto',
    overflowY: 'hidden',
    scrollbarWidth: 'none' /* Firefox */,
    '-ms-overflow-style': 'none' /* Internet Explorer 10+ */,
    transition: 'transform .5s ease-in'
});

export const Root = styled('div', {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    zIndex: '1'
});
