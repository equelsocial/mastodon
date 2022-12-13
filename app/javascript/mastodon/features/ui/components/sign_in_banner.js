import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import Icon from 'mastodon/components/icon';
import axios from 'axios';

function getCSRFToken() {
  var CSRFSelector = document.querySelector('meta[name="csrf-token"]');
  if (CSRFSelector) {
    return CSRFSelector.getAttribute('content');
  } else {
    return null;
  }
}

const SignInBanner = () => {
  const navigateToLogin = useCallback(() => {
    const authenticity_token = getCSRFToken();
    axios.post('/auth/auth/openid_connect', { authenticity_token });
  });
  return (
    <div className='sign-in-banner'>
      <p>
        <FormattedMessage
          id='sign_in_banner.text'
          defaultMessage='For a safe community, Equel members must use LinkedIn to sign in with their real identities.'
        />
      </p>
      <button
        onClick={navigateToLogin}
        className='button button--block button-with-icon'
      >
        <Icon id='linkedin' fixedWidth aria-hidden='true' />
        <FormattedMessage id='sign_in_banner.sign_in' defaultMessage='Log in' />
      </button>
      <button
        onClick={navigateToLogin}
        className='button button--block button-tertiary button-with-icon'
      >
        <Icon id='linkedin' fixedWidth aria-hidden='true' />
        <FormattedMessage
          id='sign_in_banner.create_account'
          defaultMessage='Join now'
        />
      </button>
    </div>
  );
};

export default SignInBanner;
