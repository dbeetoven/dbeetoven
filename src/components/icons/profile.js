import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export function Profile() {
 return <StaticImage src="../../images/profile.png"  quality={95}
 formats={["AUTO", "WEBP", "AVIF"]} alt="Beetoven Desir Illustration" />
