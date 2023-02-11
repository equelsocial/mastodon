import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { registrationsOpen } from 'mastodon/initial_state';
import { openModal } from 'mastodon/actions/modal';

const SignInBanner = () => {
  const dispatch = useDispatch();

  const openClosedRegistrationsModal = useCallback(
    () => dispatch(openModal('CLOSED_REGISTRATIONS')),
    [dispatch],
  );

  let signupButton;

  if (registrationsOpen) {
    signupButton = (
      <a href='/auth/sign_up' className='button button--block'>
        <FormattedMessage id='sign_in_banner.create_account' defaultMessage='Join now' />
      </a>
    );
  } else {
    signupButton = (
      <button className='button button--block' onClick={openClosedRegistrationsModal}>
        <FormattedMessage id='sign_in_banner.create_account' defaultMessage='Join now' />
      </button>
    );
  }

  return (
    <div className='sign-in-banner'>
      <p><FormattedMessage id='sign_in_banner.text' defaultMessage='Log in to follow profiles or hashtags, favourite, share and reply to posts, or interact from your account on a different server.' /></p>
      <a href='/auth/sign_in' className='button button-secondary button--block'><FormattedMessage id='sign_in_banner.sign_in' defaultMessage='Log in' /></a>
      {signupButton}
    </div>
  );
};

export default SignInBanner;
