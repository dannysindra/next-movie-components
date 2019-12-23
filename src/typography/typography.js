import { styled } from 'baseui';

export const H2 = styled('h2', ({ $theme }) => {
    const { breakpoints, colors, sizing, typography } = $theme;

    return {
        ...typography.font550,
        color: colors.colorTertiary,
        marginTop: sizing.scale300,
        marginBottom: sizing.scale300,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            ...typography.font750,
            marginTop: sizing.scale700,
            marginBottom: sizing.scale800
        }
    };
});

export const H3 = styled('h3', ({ $theme }) => {
    const { colors, sizing, typography } = $theme;

    return {
        ...typography.font550,
        color: colors.colorSecondary,
        fontWeight: 'bold',
        marginBottom: sizing.scale400
    };
});

export const P1 = styled('p', ({ $theme }) => {
    const { breakpoints, colors, typography } = $theme;

    return {
        ...typography.font300,
        color: colors.mono200,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            ...typography.font400
        }
    };
});
