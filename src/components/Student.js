import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Student extends Component {
    render() {
        return(
            <tr className="">
              <td>{ this.props.name }</td>
              <td>{ this.props.age }</td>
              <td>{ this.props.email }</td>
            </tr>
        );
    }
}

export default Student;