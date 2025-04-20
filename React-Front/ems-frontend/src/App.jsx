import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeeCompoonent'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PaginationExample from './components/PaginationExample'

const App=()=> {

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      {/* path : http://localhost:3000 */}
      <Route path='/' element={<ListEmployeeComponent/>}></Route>

      {/* path : http://localhost:3000/employees */}
      <Route path='/employees' element={<ListEmployeeComponent/>}></Route>

      {/* path : http://localhost:3000/add-employee */}
      <Route path='/add-employee' element={<EmployeeComponent/>}></Route>  

       {/* path : http://localhost:3000/pagination */}
       <Route path='/pagination' element={<PaginationExample/>}></Route>   

      {/* path : http://localhost:3000/update-employee */}
      <Route path='/update-emoloyee/:id' element={<EmployeeComponent/>}></Route>                                                                                 
    </Routes>
   
   <FooterComponent/>
   </BrowserRouter>
      
    </>
  )
}

export default App
