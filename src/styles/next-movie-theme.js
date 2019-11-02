import { createTheme, lightThemePrimitives } from 'baseui/themes';
// import {colors} from 'baseui/tokens';

const nextMovieThemePrimitives = {
    ...lightThemePrimitives,
    background: '#0e2431',
    backgroundAlt: '#e8d5b7',
    colorPrimary: '#fc3a52',
    colorSecondary: '#f9b248'
};

const nextMovieThemeOverrides = {
    name: 'next-movie-theme',
    colors: {
        buttonPrimaryFill: '#F9B248',
        buttonPrimaryText: '#0E2431',
        buttonPrimaryHover: '#fcaa2d',
        buttonPrimaryActive: '#faa420',
        buttonPrimarySelectedFill: '#faa420',
        buttonPrimarySelectedText: '#0E2431',
        buttonPrimarySpinnerForeground: '#fcb649',
        buttonPrimarySpinnerBackground: '#f59c14'
    }
};

export const NextMovieTheme = createTheme(
    nextMovieThemePrimitives,
    nextMovieThemeOverrides
);
