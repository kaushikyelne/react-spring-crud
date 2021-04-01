// import axios from 'axios';
import React,{ useEffect,useState} from 'react';

import getEmployees, { deleteEmployee } from '../services/EmployeeService.js'


const ListEmployeeComponent = (props) => {

    const [employees,setEmployees] = useState([]);

    const addEmployee = () => {
            props.history.push(`/add-employee/-1`);
        };
    const editEmployee = (id)=>{
        props.history.push(`/add-employee/${id}`);
    };
    const deleteEmployees = (id) =>{
        // props.history.push(`/delete-employee/${id}`);
        deleteEmployee(id).then((res) =>{
            
        setEmployees(employees.filter(employee=> employee.id !==id))}
    )}

    useEffect(()=>{
        getEmployees().then((response)=>{
            
            setEmployees(response.data);
            
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
                            employees.map(
                                employee =>
                                <tr key ={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={()=>editEmployee(employee.id)}>Update</button>
                                        <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={() =>deleteEmployees(employee.id)}>Delete</button>

                                    </td>
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