const React = require("react");
const { ThemeProvider }= require('styled-components')
const Layout = require("./src/layout/Layout").default;
const GlobalStyle = require("./src/styles/GlobalStyle").default;
const theme = require("./src/themes/default").default;


exports.wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  );
};
