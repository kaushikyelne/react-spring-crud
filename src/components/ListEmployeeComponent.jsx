// import axios from 'axios';
import React,{useEffect,useState} from 'react';

import getEmployees from '../services/EmployeeService'


const ListEmployeeComponent = () => {

    const [employee,setEmployee] = useState([]);


    useEffect(()=>{
        getEmployees().then((response)=>{
            
            setEmployee(response.data);
            
        });
    },[]);
    return(

        <React.Fragment>
            <h2 className="text-center">Employee List</h2>
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