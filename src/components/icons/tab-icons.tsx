import Svg, { Path } from 'react-native-svg';

type TabIconProps = {
  size?: number;
  color?: string;
};

export function HomeTabIcon({ size = 24, color = '#9A9A9A' }: TabIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <Path
        d="M20.75 9.23258C20.75 8.02258 19.94 6.47258 18.95 5.78258L12.77 1.45258C11.37 0.472584 9.12 0.522584 7.77 1.57258L2.38 5.77258C1.48 6.47258 0.75 7.96258 0.75 9.09258V16.5026C0.75 18.8226 2.64 20.7226 4.96 20.7226H16.54C18.86 20.7226 20.75 18.8226 20.75 16.5126V13.4126M10.75 16.7226V13.7226"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function NotificationTabIcon({ size = 24, color = '#9A9A9A' }: TabIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M9.65191 5.191V8.521M18.2419 13.92C18.9719 15.14 18.3919 16.72 17.0419 17.17C12.2606 18.76 7.09319 18.76 2.31191 17.17C0.87191 16.69 0.32191 15.23 1.11191 13.92L2.38191 11.8C2.73191 11.22 3.01191 10.19 3.01191 9.52V7.42C3.0106 6.54456 3.18189 5.67744 3.516 4.86826C3.85011 4.05907 4.34047 3.3237 4.95904 2.7042C5.57761 2.08471 6.31225 1.59324 7.12093 1.25792C7.92961 0.922596 8.79646 0.749999 9.67191 0.75C13.3319 0.75 16.3319 3.75 16.3319 7.41V9.51C16.3319 9.69 16.3519 9.89 16.3819 10.1"
        stroke={color}
        strokeWidth={1.8}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function SavedTabIcon({ size = 24, color = '#9A9A9A' }: TabIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 19 22" fill="none">
      <Path
        d="M17.75 5.79C17.75 1.76 16.81 0.75 13.03 0.75H5.47C1.69 0.75 0.75 1.76 0.75 5.79V17.05C0.75 19.71 2.21 20.34 3.98 18.44L3.99 18.43C4.81 17.56 6.06 17.63 6.77 18.58L7.78 19.93C8.59 21 9.9 21 10.71 19.93L11.72 18.58C12.44 17.62 13.69 17.55 14.51 18.43C16.29 20.33 17.74 19.7 17.74 17.04V9.75M5.25 5.75H13.25M6.25 9.75H12.25"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ProfileTabIcon({ size = 24, color = '#9A9A9A' }: TabIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 22" fill="none">
      <Path
        d="M11.255 2.71C11.735 3.42 12.015 4.27 12.015 5.19C12.005 7.59 10.115 9.54 7.735 9.62C7.635 9.61 7.515 9.61 7.405 9.62C5.195 9.55 3.405 7.86 3.165 5.7C2.875 3.13 4.985 0.75 7.565 0.75M2.565 13.31C0.145 14.93 0.145 17.57 2.565 19.18C5.315 21.02 9.825 21.02 12.575 19.18C14.995 17.56 14.995 14.92 12.575 13.31C9.845 11.48 5.335 11.48 2.565 13.31Z"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
