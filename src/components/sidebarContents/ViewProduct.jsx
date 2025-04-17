import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [filters, setFilters] = useState({
    search: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    minStock: '',
    maxStock: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const applyFilters = () => {
    let data = [...products];

    if (filters.search) {
      data = data.filter(p =>
        p.product_name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category) {
      data = data.filter(p => p.category === filters.category);
    }

    if (filters.minPrice) {
      data = data.filter(p => p.price >= parseFloat(filters.minPrice));
    }

    if (filters.maxPrice) {
      data = data.filter(p => p.price <= parseFloat(filters.maxPrice));
    }

    if (filters.minStock) {
      data = data.filter(p => p.stock >= parseInt(filters.minStock));
    }

    if (filters.maxStock) {
      data = data.filter(p => p.stock <= parseInt(filters.maxStock));
    }

    setFiltered(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="container mt-4">
      <h2>Product List</h2>

      {/* Filters */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="Search by name"
            value={filters.search}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <select
            name="category"
            className="form-control"
            value={filters.category}
            onChange={handleChange}
          >
            <option value="">All Categories</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <input
            type="number"
            name="minPrice"
            className="form-control"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            name="maxPrice"
            className="form-control"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-1">
          <input
            type="number"
            name="minStock"
            className="form-control"
            placeholder="Min Stock"
            value={filters.minStock}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            name="maxStock"
            className="form-control"
            placeholder="Max Stock"
            value={filters.maxStock}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((p, index) => (
              <tr key={p._id}>
                <td>{index + 1}</td>
                <td>{p.product_name}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>{p.stock}</td>
                <td>{p.category}</td>
                <td>
                  {p.image?.[0] ? (
                    <img src={`http://localhost:5000/uploads/${p.image[0]}`} alt="product" width="60" />
                  ) : (
                    'No image'
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="7" className="text-center">No products found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProduct;
