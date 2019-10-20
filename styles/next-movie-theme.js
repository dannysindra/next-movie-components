import { createTheme, lightThemePrimitives } from 'baseui/themes';
// import {colors} from 'baseui/tokens';

const nextMovieColors = {
    button: {
        primaryFill: '#F9B248',
        primaryText: '#0E2431',
        primaryHover: '#fcaa2d',
        primaryActive: '#faa420',
        primarySpinnerForeground: '#fcb649',
        primarySpinnerBackground: '#f59c14'
    }
};

const nextMovieThemePrimitives = {
    ...lightThemePrimitives
    // primary: colors.blue400,
    // primary50: colors.blue50,
    // primary100: colors.blue100,
    // primary200: colors.blue200,
    // primary300: colors.blue300,
    // primary400: colors.blue400,
    // primary500: colors.blue500,
    // primary600: colors.blue600,
    // primary700: colors.blue700,
};

const nextMovieThemeOverrides = {
    name: 'next-movie-theme',
    colors: {
        buttonPrimaryFill: nextMovieColors.button.primaryFill,
        buttonPrimaryText: nextMovieColors.button.primaryText,
        buttonPrimaryHover: nextMovieColors.button.primaryHover,
        buttonPrimaryActive: nextMovieColors.button.primaryActive,
        buttonPrimarySelectedFill: nextMovieColors.button.primaryActive,
        buttonPrimarySelectedText: nextMovieColors.button.primaryText,
        buttonPrimarySpinnerForeground:
            nextMovieColors.button.primarySpinnerForeground,
        buttonPrimarySpinnerBackground:
            nextMovieColors.button.primarySpinnerBackground
    }
};

export const NextMovieTheme = createTheme(
    nextMovieThemePrimitives,
    nextMovieThemeOverrides
);
