import type * as Stitches from '@stitches/react';
import { createStitches, defaultThemeMap } from '@stitches/react';
import {
    ThemeTypes,
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

export const {
    config,
    createTheme,
    css,
    getCssText,
    globalCss,
    styled,
    theme: stitchesTheme,
    keyframes,
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        opacity: 'opacities',
        backgroundImage: 'backgroundImage',
        borderStyle: 'borderStyle',
    },
    theme: {
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
    },
    utils: { ...utils },
    media: { ...medias },
});

export type CreateThemeProps = ReturnType<typeof createTheme>;
export type StitchesConfigProps = Stitches.CSS<typeof config>;

export const theme: {
    [key in ThemeTypes]: CreateThemeProps;
} = {
    dark: createTheme({
        colors: colors.dark,
    }),
    light: createTheme({
        colors: colors.light,
    }),
};
