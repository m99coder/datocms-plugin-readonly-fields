import React, { Component } from 'react';
import PropTypes from 'prop-types';

import connectToDatoCms from './connectToDatoCms';
import './style.sass';

@connectToDatoCms(plugin => ({
  developmentMode: plugin.parameters.global.developmentMode,
  fieldValue: plugin.getFieldValue(plugin.fieldPath),
}))

export default class Main extends Component {
  static propTypes = {
    fieldValue: PropTypes.string,
    plugin: PropTypes.object,
  };

  render() {
    const { fieldValue, plugin } = this.props;

    return (
      <input id={plugin.fieldPath} disabled type="text" value={fieldValue} className="disabled" />
    );
  }
}
