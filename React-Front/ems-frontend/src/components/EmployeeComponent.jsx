import React, { useEffect } from 'react'
import { useState } from 'react'
import { createEmployees, getEmployeeById, updateEmployeeById } from '../services/employeeSerice'
import { useNavigate,useParams } from 'react-router-dom'


const EmployeeComponent = () => {

const [firstName,setFirstName]=useState('')
const [lastName,setLastName]=useState('')
const [email,setEmail]=useState('')
const [errors, setErrors]=useState({
firstName:'',
lastName:'',
email:''
})
const navigator =useNavigate()

const handleFirstName=(e)=>{
  setFirstName(e.target.value);
}
const handleLastName=(e)=>{
  setLastName(e.target.value);
}
function handleEmail(e){
  setEmail(e.target.value);
}
const {id} =useParams();
function saveOrUpdateEmployee(e){
  e.preventDefault();
  if(validateForm()){
    const employee={firstName,lastName,email};
    console.log(employee);

  if(id){
    updateEmployeeById(id, employee).then((response)=>{
      console.log(response.data)
      alert('Form Updated successfully!');
      navigator('/employees')
  })}
  else{
    
    createEmployees(employee).then((response)=>{
      console.log(response.data)
      alert('Form submitted successfully!');
      navigator('/employees')
    
    })}
  }
  
}

function validateForm(){
  let valid=true;
  const errorsCopy={... errors};


  if(firstName.trim()){
    errorsCopy.firstName=''
  }
  else{
    errorsCopy.firstName='First name is required';
    valid=false;
  }


  if(lastName.trim()){
    errorsCopy.lastName=''
  }
  else{
    errorsCopy.lastName='Last name is required';
    valid=false;
  }

  // Defining Regex for Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email.trim()) {
  if (emailRegex.test(email.trim())) {
    errorsCopy.email = '';
  } else {
    errorsCopy.email = 'Enter a valid email address';
    valid = false;
  }
} else {
  errorsCopy.email = 'Email is required';
  valid = false;
}


  setErrors(errorsCopy);
  return valid;
};

//Getting Id and Attach to PageTitle Function

let tite='Update Employee';
  if(id){
    tite='Update Employee';
  }
  else{
    tite='Add Employee';
  }

  //useEffect to populate prev Data to be updated
  useEffect(() => {
    if (id) {
      getEmployeeById(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);


  return (
    <div className='container'>
      <br/>
      <div className='row'>
      
        <div className='card col-md-5 offset-md-3 offset-md-3'>
        
          <form>  
          <h2 className='text-center '>{tite}</h2>
            <div className='form-group mb-2'>
              <label className='form-label'>First Name</label>
              <input
              type='text'
              placeholder='Enter Employee Last Name'
              name='fistName'
              value={firstName}
              className={`form-control ${errors.firstName ? 'is-invalid' : ' '}`}
              onChange={handleFirstName}
              >

              </input >
              
              {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}

            </div>
            <div className='form-grou mb-2'>
              <label className='form-label'>Last Name</label>
              <input
              type='text'
              placeholder='Enter Employee Last Name'
              name='lastName'
              value={lastName}
              className={`form-control ${errors.lastName ? 'is-invalid' : ' '}`}             
              onChange={handleLastName}
              >

              </input>
              {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}

            </div>
            <div className='form-grou mb-2'>
              <label className='form-label'>Email</label>
              <input
              type='text'
              placeholder='Enter Employee Email Name'
              name='email'
              value={email}
              className={`form-control ${errors.email ? 'is-invalid' : ' '}`}  
              onChange={handleEmail}
              >
              </input>
              {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
            </div>
            
          
            <button className='btn btn-success mb-2' onClick={saveOrUpdateEmployee}> Submit</button>
          </form>

        </div>
      </div>

    </div>
  )
}

export default EmployeeComponent;