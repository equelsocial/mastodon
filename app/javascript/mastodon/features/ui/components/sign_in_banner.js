import React from 'react';
import { FormattedMessage } from 'react-intl';
import Icon from 'mastodon/components/icon';

const SignInBanner = () => {
  return (
    <div className='sign-in-banner'>
      <p><FormattedMessage id='sign_in_banner.text' defaultMessage='For a safe community, Equel members must use LinkedIn to sign in with their real identities.' /></p>
      <a href='/auth/sign_in' className='button button--block button-with-icon'>
        <Icon id="linkedin" fixedWidth aria-hidden='true' />
        <FormattedMessage id='sign_in_banner.sign_in' defaultMessage='Log in' />
      </a>
      <a href='/auth/sign_in' className='button button--block button-tertiary button-with-icon'>
        <Icon id="linkedin" fixedWidth aria-hidden='true' />
        <FormattedMessage id='sign_in_banner.create_account' defaultMessage='Join now' />
      </a>
    </div>
  );
};

export default SignInBanner;
