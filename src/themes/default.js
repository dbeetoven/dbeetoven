import mixins from '../styles/mixins';

const theme = {
  fonts: {
    sans: '"Share Tech Mono", monospace',
    serif: 'Arvo, sans',
    monospace: '"Ubuntu Mono", monospace',
    title: 'Space Grotesk, sans-serif',
    main: 'Space Grotesk, sans-serif',
  },
  colors: {
    primary: 'var(--slate)',
    secondary: 'var(--light-slate)',
    lightSecondary: 'var(--lightest-slate)',
    bgColor: 'var(--navy)',
    green: 'var(--green)',
    red: 'var(--red)',
    yellow: 'var(--yellow)',
    white: 'var(--white)',
    navyShadow: 'var(--navy-shadow)',
    lightestNavy: 'var(--lightest-navy)',
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  fontWeight: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  mixins,
};
export default theme;
