import React, { useState } from 'react';
import Axios from '../Axios/axios';
import { ToastContainer } from 'react-toastify';
import { notifyError, notifySuccess } from '../utilities/utilities';



const AddProduct = () => {
  const [formData, setFormData] = useState({
    product_name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    rating:''
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    images.forEach((image) => {
      data.append('image', image); // 'images' must match backend field name
    });
    

    try {
      await Axios.post('/admin/addproduct', data, {
        headers: { 'Content-Type': 'multipart/form-data',
           
         },

      });

      
      
      notifySuccess('Product added successfully!');
      setFormData({ product_name: '', description: '', price: '', category: '', stock: '',rating:'' });
      setImages([]);
    } catch (error) {
    
      notifyError('Failed to add product');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input type="text" className="form-control" name="product_name" value={formData.product_name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input type="text" className="form-control" name="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input type="number" className="form-control" name="stock" value={formData.stock} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input type="number" className="form-control" name="rating" value={formData.rating} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Images</label>
          <input type="file" className="form-control" name="images" multiple onChange={handleImageChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    <ToastContainer/>
    </div>

  );
};

export default AddProduct;
