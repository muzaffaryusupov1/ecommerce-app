/**
 * Shared app theme tokens.
 */

import { Platform } from 'react-native';

export const Palette = {
  bgLight2: '#f4f4f4',
  bgLight1: '#fff',
  black100: '#272727',
  black50: 'rgba(39, 39, 39, 0.5)',
  white100: '#fff',
  white50: 'rgba(255, 255, 255, 0.5)',
  primary100: '#8e6cef',
  primary50: '#efeaf5',
  lemon: '#b3b68b',
  red: '#fa3636',
  blue: '#4468e5',
  yellow: '#f4bd2f',
  green: '#5fb567',
  orange: '#ec6d26',
  bgDark1: '#1d182a',
  bgDark2: '#342f3f',
  systemBlack: '#000',
  systemLabel: '#000',
  overlay: 'rgba(0, 0, 0, 0.5)',
} as const;

export const Colors = {
  light: {
    text: Palette.black100,
    background: Palette.bgLight1,
    tint: Palette.primary100,
    icon: Palette.black50,
    tabIconDefault: Palette.black50,
    tabIconSelected: Palette.primary100,
  },
  dark: {
    text: Palette.white100,
    background: Palette.bgDark1,
    tint: Palette.primary100,
    icon: Palette.white50,
    tabIconDefault: Palette.white50,
    tabIconSelected: Palette.primary100,
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'Manrope',
    second: 'Gabarito',
    serif: 'ui-serif',
    rounded: 'Manrope-Bold',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'Manrope',
    second: 'Gabarito',
    serif: 'serif',
    rounded: 'Manrope-Bold',
    mono: 'monospace',
  },
  web: {
    sans: "'Manrope', sans-serif",
    second: "'Gabarito', sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'Manrope-Bold', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

