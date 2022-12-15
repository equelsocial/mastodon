import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage, FormattedDate, injectIntl, defineMessages } from 'react-intl';
import Column from 'mastodon/components/column';
import TermsOfServiceContent from './content'

const messages = defineMessages({
  title: { id: 'terms_of_service.title', defaultMessage: 'Terms of Service' },
});

export default @injectIntl
class TermsOfService extends React.PureComponent {

  static propTypes = {
    intl: PropTypes.object,
    multiColumn: PropTypes.bool,
  };

  state = {
    lastUpdated: new Date(2022, 11, 15),
  };

  render () {
    const { intl, multiColumn } = this.props;
    console.log(this.state.lastUpdated)

    return (
      <Column bindToDocument={!multiColumn} label={intl.formatMessage(messages.title)}>
        <div className='scrollable privacy-policy'>
          <div className='column-title'>
            <h3><FormattedMessage id='terms_of_service.title' defaultMessage='Terms of Service' /></h3>
            <p><FormattedMessage id='terms_of_service.last_updated' defaultMessage='Last updated {date}' values={{ date: <FormattedDate value={this.state.lastUpdated} year='numeric' month='short' day='2-digit' /> }} /></p>
          </div>

          <div
            className='privacy-policy__body prose'
          >
            <TermsOfServiceContent />
          </div>
        </div>

        <Helmet>
          <title>{intl.formatMessage(messages.title)}</title>
          <meta name='robots' content='all' />
        </Helmet>
      </Column>
    );
  }

}
