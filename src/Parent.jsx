import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Parent extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        { this.props.children }
      </div>
    )
  }
}

Parent.propTypes = {
  name: PropTypes.string
}
