import React from 'react';
import { H2, H3, P1 } from '../typography';

export default {
    title: 'Typography'
};

export const size = () => {
    return (
        <>
            <H2>H2: Overview</H2>
            <H3>H3: Popular movies</H3>
            <P1>
                P1: As the gang return to Jumanji to rescue one of their own,
                they discover that nothing is as they expect. The players will
                have to brave parts unknown and unexplored in order to escape
                the world’s most dangerous game.
            </P1>
        </>
    );
};
