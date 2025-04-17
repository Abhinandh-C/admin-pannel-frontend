import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

// Dummy order data with images
const dummyOrders = [
  {
    id: 'ORD001',
    customer: 'Rayhan',
    email: 'rayhan@gmail.com',
    phone: '+96605555555',
    address: 'H-101, R-102, F-103',
    status: 'Pending',
    items: [
      {
        name: 'iPhone 14',
        quantity: 1,
        price: 999,
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14-select-202209-6-1inch?wid=940&hei=1112&fmt=png-alpha&.v=1661027780351',
      },
      {
        name: 'AirPods Pro',
        quantity: 1,
        price: 249,
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2nd-gen-hero?wid=940&hei=1112&fmt=png-alpha&.v=1660803972361',
      },
    ],
  },
  {
    id: 'ORD002',
    customer: 'Ali',
    email: 'ali@example.com',
    phone: '+96601234567',
    address: 'Villa 5, Jeddah',
    status: 'Shipped',
    items: [
      {
        name: 'Samsung S23',
        quantity: 2,
        price: 850,
        image: 'https://images.samsung.com/is/image/samsung/p6pim/levant/sm-s911bzvemea/gallery/levant-galaxy-s23-s911-sm-s911bzvemea-534233528?$650_519_PNG$',
      },
    ],
  },
];

const OrderManagement = () => {
  const [orders, setOrders] = useState(dummyOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  const handleStatusUpdate = (id, newStatus) => {
    const updated = orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updated);
  };

  return (
    <div className="container mt-4">
      <h2>Order Management</h2>
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={order.id}>
              <td>{i + 1}</td>
              <td>{order.customer}</td>
              <td>{order.email}</td>
              <td>{order.phone}</td>
              <td>
                <span className={`badge bg-${order.status === 'Pending' ? 'warning' : order.status === 'Shipped' ? 'info' : 'success'}`}>
                  {order.status}
                </span>
              </td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => handleViewDetails(order)}>View</button>
                {order.status === 'Pending' && (
                  <button className="btn btn-sm btn-info" onClick={() => handleStatusUpdate(order.id, 'Shipped')}>Mark as Shipped</button>
                )}
                {order.status === 'Shipped' && (
                  <button className="btn btn-sm btn-success" onClick={() => handleStatusUpdate(order.id, 'Delivered')}>Mark as Delivered</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Order Details Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Order Details - {selectedOrder?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <>
              <p><strong>Customer:</strong> {selectedOrder.customer}</p>
              <p><strong>Email:</strong> {selectedOrder.email}</p>
              <p><strong>Phone:</strong> {selectedOrder.phone}</p>
              <p><strong>Address:</strong> {selectedOrder.address}</p>
              <p><strong>Status:</strong> {selectedOrder.status}</p>
              <hr />
              <h5>Items</h5>
              <div className="row">
                {selectedOrder.items.map((item, i) => (
                  <div key={i} className="col-md-6 mb-3">
                    <div className="card">
                      <img src={item.image} className="card-img-top" alt={item.name} style={{ height: '200px', objectFit: 'contain' }} />
                      <div className="card-body">
                        <h6 className="card-title">{item.name}</h6>
                        <p className="card-text">
                          Quantity: {item.quantity}<br />
                          Price: ${item.price} <br />
                          Total: ${item.price * item.quantity}
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
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderManagement;
