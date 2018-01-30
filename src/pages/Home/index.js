import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Student from '../../components/Student';
import axios from 'axios';

class Home extends Component {
    constructor(){
      super();
      this.state = {
        students:[]
      }
    }

    componentDidMount() {
      axios.get(`http://laravel54.local.com/api/students`).then(res => {
        this.setState({
          students : res.data,
        })
      }).catch(err => {
        console.log(err.response)
      });
    }

    render() {
        return(
            <div className="container-fluid text-center">
              <div className="row content">

                <div className="col-sm-10 col-sm-offset-1 text-left">
                  <h1>Welcome Home page</h1>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((item,index) =>
          <Student key = {index} id={item.id} name={item.name} age={item.age} email={item.email} ></Student>
        )}
                    </tbody>
                  </table>

                </div>

              </div>
            </div>
        );
    }
}

export default Home;