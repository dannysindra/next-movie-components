import { createTheme, lightThemePrimitives } from 'baseui/themes';
import { colors } from './next-movie-tokens';

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
        buttonPrimarySpinnerBackground: '#f59c14',
        background: '#0e2431',
        colorPrimary: colors.primary,
        colorSecondary: colors.secondary,
        colorTertiary: colors.tertiary
    }
};

export const NextMovieTheme = createTheme(
    lightThemePrimitives,
    nextMovieThemeOverrides
);
