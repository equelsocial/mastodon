import logo from 'mastodon/../images/logo.svg';

export const WordmarkLogo: React.FC = () => (
  <svg viewBox='0 0 180 40' className='logo logo--wordmark' role='img'>
    <title>Equel | Mastodon</title>
    <use xlinkHref='#logo-symbol-wordmark' />
  </svg>
);

export const SymbolLogo: React.FC = () => (
  <img src={logo} alt='Mastodon' className='logo logo--icon' />
);
