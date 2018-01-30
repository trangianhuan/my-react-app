import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Add extends Component {
    add() {
      axios.post(`http://laravel54.local.com/api/student`,{
        name : document.getElementsByName('name')[0].value,
        age : document.getElementsByName('age')[0].value,
        email : document.getElementsByName('email')[0].value
      }).then(res => {
        alert('create success')
      }).catch(err => {
        alert('create unsuccess')
        console.log(err.response)
      });
    }
    render() {
        return(
            <div className="container-fluid text-center">
                <div className="row content">

                    <div className="col-sm-10 col-sm-offset-1 text-left">
                        <h1>Add Student</h1>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Name</label>
                            <input type="text" class="form-control" name="name"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Age</label>
                            <input type="text" class="form-control" name="age"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="text" class="form-control" name="email"/>
                        </div>
                        <button onClick={this.add}>aaa</button>
                    </div>

              </div>
            </div>
        );
    }
}

export default Add;