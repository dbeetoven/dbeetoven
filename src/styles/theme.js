import mixins from "./mixins";

const theme = {
  colors: {
    primary: "var(--slate)",
    secondary: "var(--light-slate)",
    lightSecondary: "var(--lightest-slate)",
    bgColor: "var(--navy)",
    green: "var(--green)",
    red: "var(--red)",
    yellow: "var(--yellow)",
    white: "var(--white)",
    navyShadow: "var(--navy-shadow)",
  },
  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1280px`,
    desktopL: `max-width: 1400px`,
  },
  font: {
    sans: '"Share Tech Mono", monospace',
    serif: "Arvo, sans",
    monospace: '"Ubuntu Mono", monospace',
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  fontWeight: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  mixins,
};

export default theme;
