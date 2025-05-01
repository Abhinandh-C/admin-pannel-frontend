import React, { useState, useEffect } from "react";
import Axios from "../Axios/axios";
import { Button, Modal } from "react-bootstrap";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await Axios.get("/viewallorder", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = res.data;
        if (Array.isArray(data)) {
          setOrders(data);
        } else if (Array.isArray(data.orderdetails)) {
          setOrders(data.orderdetails);
        } else {
          console.warn("Unexpected order data format");
          setOrders([]);
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, []);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const res = await Axios.put(
        `/updateorder/${id}`,
        { Status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const updatedOrders = orders.map((order) =>
        order._id === id ? { ...order, Status: newStatus } : order
      );
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Failed to update order status:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Order Management</h2>
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>No.</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={order._id}>
              <td>{i + 1}</td>
              <td>{order.address?.firstName || "N/A"}</td>
              <td>{order.address?.email || "N/A"}</td>
              <td>{order.address?.PhoneNumber || "N/A"}</td>
              <td>
                <span
                  className={`badge bg-${
                    order.Status === "Pending"
                      ? "warning"
                      : order.Status === "Shipped"
                      ? "info"
                      : order.Status === "Delivered"
                      ? "success"
                      : "secondary"
                  }`}
                >
                  {order.Status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => handleViewDetails(order)}
                >
                  View
                </button>
                {order.Status === "Pending" && (
                  <button
                    className="btn btn-sm btn-info"
                    onClick={() => handleStatusUpdate(order._id, "Shipped")}
                  >
                    Mark as Shipped
                  </button>
                )}
                {order.Status === "Shipped" && (
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => handleStatusUpdate(order._id, "Delivered")}
                  >
                    Mark as Delivered
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Order Details - {selectedOrder?._id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <>
              <p>
                <strong>Customer:</strong>{" "}
                {selectedOrder.address?.firstName || "N/A"}
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                {selectedOrder.address?.PhoneNumber || "N/A"}
              </p>
              <p>
                <strong>Address:</strong> {selectedOrder.address?.address},{" "}
                {selectedOrder.address?.city},{" "}
                {selectedOrder.address?.state},{" "}
                {selectedOrder.address?.country} -{" "}
                {selectedOrder.address?.pincode}
              </p>

              <p>
                <strong>Status:</strong> {selectedOrder.Status}
              </p>
              <hr />
              <h5>Items</h5>
              <div className="row">
                {selectedOrder.products?.map((item, index) => (
                  <div key={index} className="col-md-6 mb-3">
                    <div className="card" style={{width:"200px"}}>
                    {Array.isArray(item.productid?.image) && item.productid.image.length > 0 ? (
        

        <img
          src={`http://localhost:3000${item.productid.image[0]}`}
          
          alt="Product"
           className="card-img-top"
          style={{ height: "200px", objectFit: "contain" }}
        />
        
      ) : (
        'No Image'
      )}
                      <div className="card-body">
                        <h6 className="card-title" style={{color:"black"}}>{item.productid.product_name}</h6>
                        <p className="card-text" style={{color:"green" ,display:"flex",justifyContent:"space-between"}}>
                          Quantity:{item.quantity}
                          <br />
                          Price: ₹{item.price}
                          <br />
                          Total Amount: ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{display:"flex",justifyContent:"center",alignItems:"center" ,width:"200px", backgroundColor:"red",color:"white"}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderManagement;
