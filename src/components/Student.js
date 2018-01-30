import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Student extends Component {
    render() {
        return(
            <tr className="">
              <td><Link to={`/student/${ this.props.id }` } className="navbar-brand">{ this.props.name }</Link></td>
              <td>{ this.props.age }</td>
              <td>{ this.props.email }</td>
            </tr>
        );
    }
}

export default Student;