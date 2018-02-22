import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

class UniversalMediaProvider extends React.Component {
  state = {
    mounted: false
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    const { mounted } = this.state;

    return <Context.Provider value={mounted} {...this.props} />;
  }
}

export default UniversalMediaProvider;