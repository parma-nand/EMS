import React, { useEffect } from 'react';
import { useState } from 'react';
// import { listEmployees } from './services/employeeSerice';
import { deleteEmployee, listEmployees } from '../services/employeeSerice';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
 const[employee, setEmployees]=useState([])
 const navigator =useNavigate();
 
 useEffect(()=>{
  getAllEmployee();
 },[])
 function getAllEmployee(){
  
  listEmployees().then((response)=>{
    setEmployees(response.data);
  }).catch(error=>console.error(error))
 
}

function addEmployee(){
  navigator('/add-employee')
  
}
const updateEmployee=(id)=>{
  navigator(`/update-emoloyee/${id}`)
}
const removeEmployee=(id)=>{
  console.log(id);
  deleteEmployee(id).then(()=>{
    alert("Delete");
getAllEmployee();
  }).catch(error=>{
    console.error(error);
  });
  
}
  return (
    <div className='container'>
      <h2 className="text-center" >List of Employees</h2>
      <button  class="btn btn-primary mb-2" onClick={addEmployee}>Add Employee</button>
      {/* <button  class="btn btn-primary mb-2" onClick={()=>window.location.href='http://localhost:3000/employees'}>Navigate</button> */}
      <table className="table table-striped table-bordered" >
        <thead>
          <tr>
            <th >Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            employee.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button>
                  <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
