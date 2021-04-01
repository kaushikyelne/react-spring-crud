import axios from 'axios'

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees'

const getEmployees = () =>{
    return(axios.get(EMPLOYEE_API_BASE_URL));
} 
export const createEmployee = (employee) =>{
    return(axios.post(EMPLOYEE_API_BASE_URL,employee));
}

export const getEmployeesById = (employeeId) =>{
    return(axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId));
}
export const updateEmployee = (employee,employeeId) => {
    return(axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeId,employee));
}

export const deleteEmployee = (employeeId) => {
    return(axios.delete(EMPLOYEE_API_BASE_URL + "/" + employeeId));
}

export default getEmployees ;
// export  createEmployee;