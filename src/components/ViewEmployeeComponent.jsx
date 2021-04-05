import React,{useState,useEffect} from 'react'
import  { getEmployeesById } from '../services/EmployeeService';

const ViewEmployeeComponent = (props) =>{

    const [id,setId] = useState(props.match.params.id);
    const [employee,setEmployee] = useState({});

    useEffect(() =>{
        getEmployeesById(id).then((res) =>{

            setEmployee( res.data);
            console.log(res)
                // setfirstName(employee.firstName)
                // setlastName(employee.lastName)
                // setemailId(employee.emailId)

        });

    },[]);
    return(
        <React.Fragment>
            <div className="card col-md-8 offset-md-3" style={{padding: 10,marginTop: 100, boxShadow: "1px 3px 1px #9E9E9E", height: '75%'}}>
                <h3 className= "text-center">View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Employee First Name:</label>
                        <div style={{marginLeft:"10px"}}><h5>{employee.firstName}</h5></div>
                    </div>
                    <div className="row">
                        <label> Employee Last Name:</label>
                        <div style={{marginLeft:"10px"}}><h5>{employee.lastName}</h5></div>
                    </div>
                    <div className="row">
                        <label> Employee Email Id:</label>
                        <div style={{marginLeft:"10px"}}><h5>{employee.emailId}</h5></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ViewEmployeeComponent;