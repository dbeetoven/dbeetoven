import * as React from "react";
import Head from "../components/Head";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export default function Layout({ children }) {
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer");
          link.setAttribute("target", "_blank");
        }
      });
    }
  };

  return (
    <>
      <Head />
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
    </>
  );
}
