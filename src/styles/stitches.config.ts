/* eslint-disable @typescript-eslint/no-explicit-any */
// import type * as Stitches from '@stitches/react';
import { createStitches, defaultThemeMap } from '@stitches/react';
import {
    backgroundImages,
    borderRadius,
    colors,
    filters,
    fonts,
    medias,
    opacities,
    shadows,
    sizes,
    spacings,
    transitions,
    utils,
    zIndices,
} from './tokens';
import { sidanAtoms } from '../atoms';

// TODO: Add types

export type CustomThemeConfig = {
    borderStyles: any;
    borderWidths: any;
    colors: any;
    fonts: any;
    fontSizes: any;
    fontWeights: any;
    letterSpacings: any;
    lineHeights: any;
    radii: any;
    shadows: any;
    sizes: any;
    space: any;
    transitions: any;
    opacities: any;
    zIndices: any;
    filters: any;
    backgroundImage: any;
};

export const instantiateSidanUI = (customThemeConfig: Partial<CustomThemeConfig>) => {
    const defaultThemeConfig: CustomThemeConfig = {
        borderStyles: {},
        borderWidths: {},
        colors: { ...colors.light },
        fonts: { ...fonts.families },
        fontSizes: { ...fonts.sizes },
        fontWeights: { ...fonts.weights },
        letterSpacings: { ...fonts.letterSpacings },
        lineHeights: { ...fonts.lineHeights },
        radii: { ...borderRadius },
        shadows: { ...shadows },
        sizes: { ...sizes },
        space: { ...spacings },
        transitions: { ...transitions },
        opacities: { ...opacities },
        zIndices: { ...zIndices },
        filters: { ...filters },
        backgroundImage: { ...backgroundImages },
    };

    const themeConfig = {
        ...defaultThemeConfig,
        ...customThemeConfig,
    };

    const { config, createTheme, css, getCssText, globalCss, theme, styled, keyframes } =
        createStitches({
            themeMap: {
                ...defaultThemeMap,
                opacity: 'opacities',
                backgroundImage: 'backgroundImage',
                borderStyle: 'borderStyle',
            },
            theme: themeConfig,
            utils: { ...utils },
            media: { ...medias },
        });

    const darkTheme = createTheme({ colors: themeConfig.colors.dark });

    const components = sidanAtoms(styled);

    return {
        config,
        createTheme,
        css,
        getCssText,
        globalCss,
        styled,
        theme,
        keyframes,
        darkTheme,
        components,
    };
};
