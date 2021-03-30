import React,{useState,useEffect,useCallback} from 'react'

const CreateEmployeeComponent = (props) =>{

    const [firstName,setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [emailId,setemailId] = useState("");

    const changeFirstNameHandler = useCallback(
        (event) => {
            setfirstName(event.target.value)
        },[],
    );
    const changeLastNameHandler = useCallback(
        (event) => {
            setlastName(event.target.value)
        },[],
    );
    const changeEmailIdHandler = useCallback(
        (event) => {
            setemailId(event.target.value)
        },[],
    );
    const saveEmployee = useCallback(
        (e) => {
            e.preventDefault();
            let employee = {firstName: firstName,lastName:lastName,emailId:emailId};
            console.log('employee =>' + JSON.stringify(employee));
        },[],
    );
    const cancelEmployee = useCallback(
        () => {
            props.history.push('/employees');
        },[],
    );

    return(
        <React.Fragment>
            <div className="container">
                <div className ="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                            <div className ="card-body">
                                <form>
                                    <div className="form-group">
                                        
                                        <label> First Name </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={firstName} onChange={changeFirstNameHandler}/>
                                        

                                    </div>
                                    <div className="form-group">
                                        
                                        <label> Last Name </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={lastName} onChange={changeLastNameHandler}/>
                                        

                                    </div>
                                    <div className="form-group">
                                        
                                        <label> Email ID</label>
                                        <input placeholder="Email Id" name="emailId" className="form-control"
                                            value={emailId} onChange={changeEmailIdHandler}/>
                                        

                                    </div>
                                    <button className="btn btn-success" onClick={saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={cancelEmployee} style={{marginLeft:"10px"}}>Cancel</button>

                                </form>
                            </div>
                     
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateEmployeeComponent;