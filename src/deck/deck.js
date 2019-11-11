import React, { useRef } from 'react';
import { node, oneOfType, arrayOf } from 'prop-types';

import {
    Root,
    ListContainer,
    ListItem,
    NextButton,
    PreviousButton
} from './styled';
import { useDeck } from './use-deck';

export const Deck = ({ children }) => {
    const ref = useRef();
    const {
        previousVisible,
        nextVisible,
        onClickPrevious,
        onClickNext,
        onMouseOver,
        onMouseLeave
    } = useDeck(ref);

    return (
        <Root onMouseEnter={onMouseOver} onMouseLeave={onMouseLeave}>
            <ListContainer ref={ref}>
                {React.Children.map(children, child => (
                    <ListItem>{child}</ListItem>
                ))}
            </ListContainer>
            <PreviousButton
                onClick={onClickPrevious}
                $visible={previousVisible}
            >
                &lt;
            </PreviousButton>
            <NextButton onClick={onClickNext} $visible={nextVisible}>
                &gt;
            </NextButton>
        </Root>
    );
};

Deck.propTypes = {
    children: oneOfType([node, arrayOf(node)]).isRequired
};
