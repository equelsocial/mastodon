import React from 'react';
import logo from 'mastodon/../images/logo.svg';

export const WordmarkLogo = () => (
  <svg viewBox='0 0 180 40' className='logo logo--wordmark' role='img'>
    <title>Equel | Mastodon</title>
    <use xlinkHref='#logo-symbol-wordmark' />
  </svg>
);

export const SymbolLogo = () => (
  <img src={logo} alt='Mastodon' className='logo logo--icon' />
);

export default WordmarkLogo;
