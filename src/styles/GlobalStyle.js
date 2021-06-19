import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables};
  ${reset}

  *,  *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);

  }
  body {
    cursor: default;
    overflow-x: hidden;
    background-color: var(--navy);
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: ${({ theme }) => theme.fontSize.xl};
    background-image: linear-gradient(180deg,rgba(0,0,0,.6),transparent);

    &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: var(--navy);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate);
    border: 3px solid var(--navy);
    border-radius: 10px;
  }
  }
  /* body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: var(--navy);
  } */
  /* body::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate);
    border: 3px solid var(--navy);
    border-radius: 10px;
  } */
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.sans};
    /* margin: 0 0 10px 0; */
    font-weight: ${({theme})=> theme.fontWeight.semibold};
    color: var(--lightest-slate);
    line-height: 1.1;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  ::selection {
    background-color: ${({theme})=> theme.colors.lightestNavy};
    color: ${({ theme }) => theme.colors.lightSecondary};
  }

  :focus {
    outline: 2px dashed ${({theme})=> theme.colors.green};
    outline-offset: 3px;
  }


  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  /* svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  } */

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--green);
    }

    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    &[target='_blank'] {
      cursor: ne-resize;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }


  hr {
    background-color: var(--lightest-navy);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  .subtitle {
    color: var(--green);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      line-height: 1.5;
    }
  }
  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
   text-align: center;
  }
`;

export default GlobalStyle;
