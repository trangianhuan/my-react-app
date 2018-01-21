import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Student from '../../components/Student';

class Home extends Component {
    // const eleCourses = items.map((item,index) =>
    //   <Course key = {index} name={item.name} time={item.time} free={item.free} desc={item.desc}></Course>
    // );

    render() {
        const students =[
          {
            name: 'Toan',
            age: '22',
            email: 'toan@gmail.com'
          },
          {
            name: 'Nguyên',
            age: '23',
            email: 'nguyen@gmail.com'
          },
          {
            name: 'Vân',
            age: '21',
            email: 'van@gmail.com'
          }
        ];
        const studentList = students.map((item,index) =>
          <Student key = {index} name={item.name} age={item.age} email={item.email} ></Student>
        );
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
                        {studentList}
                    </tbody>
                  </table>

                </div>

              </div>
            </div>
        );
    }
}

export default Home;