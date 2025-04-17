import { Table } from 'bootstrap-4-react/lib/components';
import React, {  useState } from 'react';
import { Container } from 'react-bootstrap';


const NewOrderTable = () => {
  const [tableData, setTableData] = useState([
    { no: '1', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '2', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '3', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '4', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '5', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '6', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '7', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '8', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '9', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '10', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '11', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '12', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '13', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '14', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '15', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '16', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '17', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '18', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '19', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '20', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '21', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' },
    { no: '22', name: 'Rayhan', email: 'admin@gmail.com', phNumber: '+96605555555', address: 'H-101,R-102,F-103', quantity: '1', price: '200', img: '' }
  ]);

 



  return (
    <Container className="mt-4">
      <h4 className="mb-3">Order List</h4>
      <Table striped bordered hover responsive>
        <thead className="table-primary">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.no}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phNumber}</td>
              <td>{row.address}</td>
              <td>{row.quantity}</td>
              <td>{row.price}</td>
              <td>
                {row.img ? <img src={row.img} alt="Product" style={{ width: '40px' }} /> : 'No Image'}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default NewOrderTable;
