import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import Api from './api';

class Provider extends Component {
  constructor(props) {
    super(props);

    this.open = (Content, position, positionStyle) =>
      this.setState({
        isOpen: true,
        Content: Content,
        position,
        positionStyle,
      });

    this.close = () => this.setState({ isOpen: false });

    this.state = {
      isOpen: false,
      close: this.close,
      open: this.open,
      position: 'modal',
      Content: () => null,
    };

    Api.close = this.close;
    Api.open = this.open;
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
};

export default Provider;
