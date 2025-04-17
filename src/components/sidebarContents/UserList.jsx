import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Form,
  Row,
  Col,
  Badge,
  Container,
} from "react-bootstrap";

const dummyUsers = [
  {
    _id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    mobile: 9876543210,
    gender: "Female",
    role: "user",
    active: true,
  },
  {
    _id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    mobile: 9876543211,
    gender: "Male",
    role: "user",
    active: false,
  },
  {
    _id: "3",
    name: "Charlie David",
    email: "charlie@example.com",
    mobile: 9876543212,
    gender: "Male",
    role: "user",
    active: true,
  },
  {
    _id: "4",
    name: "Daisy Green",
    email: "daisy@example.com",
    mobile: 9876543213,
    gender: "Female",
    role: "user",
    active: false,
  },
];

const UserList = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [searchName, setSearchName] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterBlockStatus, setFilterBlockStatus] = useState("");

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
  };

  const handleToggleBlock = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const filteredUsers = users.filter((user) => {
    const matchName = user.name.toLowerCase().includes(searchName.toLowerCase());
    const matchGender = filterGender ? user.gender === filterGender : true;
    const matchBlock =
      filterBlockStatus === ""
        ? true
        : filterBlockStatus === "blocked"
        ? user.active === false
        : user.active === true;

    return matchName && matchGender && matchBlock;
  });

  return (
    <Container fluid>
      <h3 className="mt-4 mb-3">User Management</h3>

      {/* Filters */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search by name..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Select
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value)}
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select
            value={filterBlockStatus}
            onChange={(e) => setFilterBlockStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="blocked">Blocked</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Table */}
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Role</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                No users found.
              </td>
            </tr>
          ) : (
            filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.gender}</td>
                <td>
                  {user.active ? (
                    <Badge bg="success">Active</Badge>
                  ) : (
                    <Badge bg="danger">Blocked</Badge>
                  )}
                </td>
                <td>{user.role}</td>
                <td className="text-center">
                  <Button
                    variant={user.active ? "warning" : "success"}
                    size="sm"
                    className="me-2"
                    onClick={() => handleToggleBlock(user._id)}
                  >
                    {user.active ? "Block" : "Unblock"}
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserList;
