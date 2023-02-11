import React from 'react';
import Logo from 'mastodon/components/logo';
import LogoMobile from 'mastodon/components/logo-mobile';
import { Link, withRouter } from 'react-router-dom';
import { registrationsOpen, me } from 'mastodon/initial_state';
import { FormattedMessage } from 'react-intl';
import Avatar from 'mastodon/components/avatar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isMobile } from 'mastodon/is_mobile';
import { openModal } from 'mastodon/actions/modal';

const Account = connect((state) => ({
  account: state.getIn(['accounts', me]),
}))(({ account }) => (
  <Link to={`/@${account.get('acct')}`} title={account.get('acct')}>
    <Avatar account={account} size={35} />
  </Link>
));

const mapDispatchToProps = (dispatch) => ({
  openClosedRegistrationsModal() {
    dispatch(openModal('CLOSED_REGISTRATIONS'));
  },
});

export default
@connect(null, mapDispatchToProps)
@withRouter
class Header extends React.PureComponent {

  static contextTypes = {
    identity: PropTypes.object,
  };

  static propTypes = {
    openClosedRegistrationsModal: PropTypes.func,
    location: PropTypes.object,
  };

  render() {
    const { signedIn } = this.context.identity;
    const { location, openClosedRegistrationsModal } = this.props;
    const mobile = isMobile(window.innerWidth);

    let content;

    if (signedIn) {
      content = (
        <>
          {location.pathname !== '/publish' && (
            <Link to='/publish' className='button'>
              <FormattedMessage
                id='compose_form.publish_form'
                defaultMessage='Publish'
              />
            </Link>
          )}
          <Account />
        </>
      );
    } else {
      let signupButton;

      const signupButtonContent = mobile ? (
        <FormattedMessage
          id='sign_in_banner.create_account_short'
          defaultMessage='Join'
        />
      ) : (
        <FormattedMessage
          id='sign_in_banner.create_account'
          defaultMessage='Join now'
        />
      );

      if (registrationsOpen) {
        signupButton = (
          <a href='/auth/sign_up' className='button'>
            {signupButtonContent}
          </a>
        );
      } else {
        signupButton = (
          <button className='button' onClick={openClosedRegistrationsModal}>
            {signupButtonContent}
          </button>
        );
      }

      content = (
        <>
          <a href='/auth/sign_in' className='button button-secondary'>
            <FormattedMessage
              id='sign_in_banner.sign_in'
              defaultMessage='Log in'
            />
          </a>
          {signupButton}
        </>
      );
    }

    return (
      <div className='ui__header__wrapper'>
        <div className='ui__header'>
          <Link to='/' className='ui__header__logo'>
            {mobile ? <LogoMobile /> : <Logo />}
          </Link>

          <div className='ui__header__links'>{content}</div>
        </div>
      </div>
    );
  }

}
