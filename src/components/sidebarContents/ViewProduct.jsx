import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  Form,
  Row,
  Col,
  Button,
  Badge,
  Image,
  Modal,
} from "react-bootstrap";
import Axios from "../Axios/axios";
import { ToastContainer } from "react-toastify";
import { notifyError, notifySuccess } from "../utilities/utilities";
import { FaTrash, FaEdit } from "react-icons/fa";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStock, setFilterStock] = useState("");

  // Modal States
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchProducts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await Axios.get("/admin/viewproduct", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data.products);
    } catch (error) {
      notifyError("Failed to fetch products");
    }
  };

  const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await Axios.delete(`/admin/deleteproduct/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      notifySuccess("Product deleted successfully");
      fetchProducts();
    } catch (error) {
      notifyError("Failed to delete product");
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setShowModal(true);
  };

 
const handleUpdate = async () => {
  setIsUpdating(true);
 
  try {
    await Axios.put(`/admin/updateproduct/${editProduct._id}`, editProduct,);
    notifySuccess("Product updated successfully");
    setShowModal(false);
    fetchProducts();
  } catch (error) {
    notifyError("Failed to update product");
  } finally {
    setIsUpdating(false);
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

 

  const filteredProducts = products.filter((product) => {
    const matchName = product.product_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchCategory = filterCategory
      ? product.category === filterCategory
      : true;
    const matchStock =
      filterStock === ""
        ? true
        : filterStock === "in"
        ? product.stock > 0
        : product.stock === 0;

    return matchName && matchCategory && matchStock;
  });

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <Container fluid>
      <h3 className="mt-4 mb-3">Product Management</h3>

      {/* Filters */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search by product name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select
            value={filterStock}
            onChange={(e) => setFilterStock(e.target.value)}
          >
            <option value="">All Stock</option>
            <option value="in">In Stock</option>
            <option value="out">Out of Stock</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Table */}
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Description</th>
            <th>Price (₹)</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Rating</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center">
                No products found.
              </td>
            </tr>
          ) : (
            filteredProducts.map((product) => (
              <tr key={product._id}>
                <td>
                  <Image
                    src={`http://localhost:3000${product.image[0]}`}
                    alt={product.product_name}
                    rounded
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                  />
                </td>
                <td>{product.product_name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  {product.stock > 0 ? (
                    <Badge bg="success">{product.stock} in stock</Badge>
                  ) : (
                    <Badge bg="danger">Out of stock</Badge>
                  )}
                </td>
                <td>{product.rating}</td>
                <td className="text-center">
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(product)}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteProduct(product._id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* Update Product Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editProduct && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editProduct.product_name}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      product_name: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  value={editProduct.description}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price (₹)</Form.Label>
                <Form.Control
                  type="number"
                  value={editProduct.price}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      price: Number(e.target.value),
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="number"
                  value={editProduct.stock}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      stock: Number(e.target.value),
                    })
                  }
                />
              </Form.Group>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </Container>
  );
};

export default ViewProducts;
