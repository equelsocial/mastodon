import React, { useCallback, useRef } from 'react';
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
  const inputRef = useRef();

  const navigateToLogin = useCallback(() => {
    const authenticity_token = getCSRFToken();
    axios
      .post('/auth/auth/openid_connect', { authenticity_token })
      .then(function (response) {
        console.log(response.data);
        if (response.data.redirect) {
          console.log(response.data.redirect);
          window.location = response.data.redirect;
        }
      });
  });

  const onSubmit = () => {
    if (inputRef.current) {
      inputRef.current.value = getCSRFToken();
    }
    return true;
  }

  return (
    <div className="sign-in-banner">
      <p>
        <FormattedMessage
          id="sign_in_banner.text"
          defaultMessage="For a safe community, Equel members must use LinkedIn to sign in with their real identities."
        />
      </p>
      <form method="post" action="/auth/auth/openid_connect" onSubmit={onSubmit}>
        <input ref={inputRef} id="auth-token-input" type="hidden" name="authenticity_token" value="" />
        <button
          type="submit"
          className="button button--block button-with-icon"
        >
          <Icon id="linkedin" fixedWidth aria-hidden="true" />
          <FormattedMessage
            id="sign_in_banner.sign_in"
            defaultMessage="Log in"
          />
        </button>
        <button
          type="submit"
          className="button button--block button-tertiary button-with-icon"
        >
          <Icon id="linkedin" fixedWidth aria-hidden="true" />
          <FormattedMessage
            id="sign_in_banner.create_account"
            defaultMessage="Join now"
          />
        </button>
      </form>
    </div>
  );
};

export default SignInBanner;
