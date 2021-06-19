import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

const Logo = () => (
  <SiteHeadLogo>
    <StaticImage
      id="logo"
      className="img"
      src="../../images/logoIcon.png"
      width={50}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Beetoven"
    />
  </SiteHeadLogo>
);

export default Logo;

const SiteHeadLogo = styled.div`
  /* flex-shrink: 0;
  display: block; */
  /* padding: 10px; */
  /* font-size: 40px;
  line-height: 1em;
  font-weight: 700;
  letter-spacing: 1px; */


  & img{
  display: block;
  margin-top: 2px;
  width: auto;
  height: auto;
  object-fit: contain;
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  }
`;
