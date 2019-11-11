import { useState } from 'react';
import $ from 'jquery';

export const useDeck = ref => {
    const [previousVisible, setPreviousVisibility] = useState(false);
    const [nextVisible, setNextVisibility] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    return {
        previousVisible,
        nextVisible,
        onClickPrevious() {
            if (scrolling) {
                return;
            }

            const { offsetWidth, scrollLeft } = ref.current;

            setScrolling(true);
            $(ref.current).animate(
                { scrollLeft: `-=${offsetWidth}` },
                1000,
                () => {
                    setPreviousVisibility(scrollLeft > 0);
                    setNextVisibility(true);
                    setScrolling(false);
                }
            );
        },
        onClickNext() {
            if (scrolling) {
                return;
            }

            setScrolling(true);

            const { offsetWidth, scrollWidth, scrollLeft } = ref.current;

            $(ref.current).animate(
                { scrollLeft: `+=${offsetWidth}` },
                1000,
                () => {
                    setPreviousVisibility(true);
                    setNextVisibility(scrollLeft + offsetWidth < scrollWidth);
                    setScrolling(false);
                }
            );
        },
        onMouseOver() {
            const { scrollLeft, offsetWidth, scrollWidth } = ref.current;

            setPreviousVisibility(scrollLeft > 0);
            setNextVisibility(scrollLeft + offsetWidth < scrollWidth);
        },
        onMouseLeave() {
            setPreviousVisibility(false);
            setNextVisibility(false);
        }
    };
};
