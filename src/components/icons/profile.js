import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Profile = () => (
  <StaticImage
    id="logo"
    className="profileImg"
    src="../../images/profile.png"
    quality={100}
    formats={['AUTO', 'WEBP', 'AVIF']}
    alt="Beetoven Desir Illustration"
  />
);

export default Profile;
