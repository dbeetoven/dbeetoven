import React, { Fragment } from 'react';
import { socials } from '../constants/constant';
import { Icon } from './icons/index';

const Social = () => (
  <Fragment>
    <ul className="socialLinks">
      {socials &&
        socials.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name}>
              <Icon name={name} />
            </a>
          </li>
        ))}
      ƒ{' '}
    </ul>
  </Fragment>
);

export default Social;
