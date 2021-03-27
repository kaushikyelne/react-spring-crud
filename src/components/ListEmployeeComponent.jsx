import React,{useEffect,useState} from 'react';
const ListEmployeeComponent = () => {

    const [employee,seteEmployee] = useState([]);

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
                                user =>
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