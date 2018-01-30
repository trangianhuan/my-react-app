import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Student from '../../components/Student';
import axios from 'axios';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            age:'',
            email:''
        }
        this.change = this.change.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
      axios.get(`http://laravel54.local.com/api/student/`+ this.props.id).then(res => {
        this.setState({
            name : res.data.name,
            age : res.data.age,
            email : res.data.email,
        })
      }).catch(err => {
        console.log(err.response)
      });
    }

    update(){
        axios.put(`http://laravel54.local.com/api/student/`+this.props.id, {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        }).then(res => {
            alert('update success!')
        }).catch(err => {
            console.log(err.response)
        });
    }

    change(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div className="container-fluid text-center">
              <div className="row content">

                <div className="col-sm-10 col-sm-offset-1 text-left">
                    <h1>Detail page</h1>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.change} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Age</label>
                        <input type="text" class="form-control" name="age" value={this.state.age} onChange={this.change} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Email</label>
                        <input type="text" class="form-control" name="email" value={this.state.email} onChange={this.change}/>
                    </div>

                    <button class="btn btn-default" onClick={this.update}>Update</button>
                </div>

              </div>
            </div>
        );
    }
}

export default Detail;