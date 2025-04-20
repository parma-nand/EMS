import { useEffect, useState } from 'react';
// import axios from 'axios';
import { listEmployees } from '../services/employeeSerice';

// const items = [
//   "Alice", "Bob", "Charlie", "David", "Eva",
//   "Frank", "Grace", "Henry", "Irene", "Jack",
//   "Kara", "Liam", "Mia", "Nathan", "Olivia"
// ];



function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // 🔁 now dynamic
  const [items, setItems] = useState([]);
useEffect(() => {
    // axios.get('http://localhost:8080/api/employees')
    listEmployees().then((response) => {
        setItems(response.data); // make sure response.data is an array
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);
//   const totalItems = items.length ;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when value changes
  };

  return (
    <div>
      <h2>Paginated Items </h2>
      {/* <h2  >Total Items : {totalItems}</h2> */}

      {/* Dynamic dropdown */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginRight: '0.5rem' }}>Items per page:</label>
        <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>

      {/* <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      <table className="table table-striped table-bordered" >
        <thead>
          <tr>
            <th >Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            currentItems.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={goToPrev} disabled={currentPage === 1}>
          Prev
        </button>
        <span style={{ margin: '0 1rem' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationExample;

