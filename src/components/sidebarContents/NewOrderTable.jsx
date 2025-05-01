import { Table } from 'bootstrap-4-react/lib/components';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Axios from '../Axios/axios';
import { notifyError } from "../utilities/utilities";

const NewOrderTable = () => {
  const [tableData, setTableData] = useState([]);
  const fetchOrders = async () => {
    try {
      const res = await Axios.get("/viewallorder", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
  
      const data = res.data;
      if (Array.isArray(data)) {
        setTableData(data);
      } else if (Array.isArray(data.orderdetails)) {
        setTableData(data.orderdetails);
      } else {
        console.warn("Unexpected response structure:", data);
        setTableData([]);
      }
    } catch (error) {
      notifyError("No Order available");
      console.error("Error fetching orders:", error);
    }
  };
 


  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Container className="mt-4">
      <h4 className="mb-3">Order List</h4>
      <Table responsive="sm" striped bordered hover>
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
          {tableData.map((order, index) => (
            <tr key={order.id || index}>
              <td>{index + 1}</td>
              <td>{order.address?.firstName}</td>
              <td>{order.address?.email}</td>
              <td>{order.address?.PhoneNumber}</td>
              <td>{order.address?.address},{order.address?.city},{order.address?.state},</td>
             <td>
  {order.products?.map((p, i) => (
    <div key={i}>{p.quantity}</div>
  ))}
</td>
<td>
  {order.products?.map((p, i) => (
    <div key={i}>₹{p.price}</div>
  ))}
</td>
<td>
  {order.products?.map((p, i) => (
    <div key={i}>
      
      {Array.isArray(p.productid?.image) && p.productid.image.length > 0 ? (
        

  <img
    src={`http://localhost:3000${p.productid.image[0]}`}
    
    alt="Product"
    style={{ width: '40px', marginBottom: '5px' }}
  />
  
) : (
  'No Image'
)}

    </div>
    
  ))}
</td>




            </tr>
          ))}
        </tbody>
        
      </Table>
    </Container>
    
  );
};

export default NewOrderTable;
