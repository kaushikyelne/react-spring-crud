// import axios from 'axios';
import React,{ useEffect,useState} from 'react';

import getEmployees from '../services/EmployeeService.js'


const ListEmployeeComponent = (props) => {

    const [employee,setEmployee] = useState([]);

    const addEmployee = () => {
            props.history.push('/add-employee');
        };

    useEffect(()=>{
        getEmployees().then((response)=>{
            
            setEmployee(response.data);
            
        });
    },[]);
    return(

        <React.Fragment>
            <h2 className="text-center">Employee List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addEmployee} style={{marginBottom:"10px"}}>Add Employee</button>
                <span></span><br/>
                </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee  Email Id</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.map(
                                employee =>
                                <tr key ={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default ListEmployeeComponent;