import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AdsCard = () => {
  // Statički podaci za prikaz
  const ads = [
    {
      id: 1,
      name: 'iPhone 13 Pro',
      price: 899,
      city: 'New York',
      category: 'Electronics',
      image: 'https://via.placeholder.com/300x200?text=iPhone+13+Pro',
    },
    {
      id: 2,
      name: 'Leather Sofa',
      price: 450,
      city: 'Chicago',
      category: 'Furniture',
      image: 'https://via.placeholder.com/300x200?text=Leather+Sofa',
    },
    {
      id: 3,
      name: 'iPhone 13 Pro',
      price: 899,
      city: 'New York',
      category: 'Electronics',
      image: 'https://via.placeholder.com/300x200?text=iPhone+13+Pro',
    },
    {
      id: 4,
      name: 'Leather Sofa',
      price: 450,
      city: 'Chicago',
      category: 'Furniture',
      image: 'https://via.placeholder.com/300x200?text=Leather+Sofa',
    },
    {
      id: 5,
      name: 'iPhone 13 Pro',
      price: 899,
      city: 'New York',
      category: 'Electronics',
      image: 'https://via.placeholder.com/300x200?text=iPhone+13+Pro',
    },
    {
      id: 6,
      name: 'Leather Sofa',
      price: 450,
      city: 'Chicago',
      category: 'Furniture',
      image: 'https://via.placeholder.com/300x200?text=Leather+Sofa',
    },
    // Dodajte više oglasa po potrebi
  ];

  return (
    <div className="ads-container">
      <div className="ads-grid">
        {ads.map(ad => (
          <div key={ad.id} className="ad-card">
            <div className="ad-image">
              <img src={ad.image} alt={ad.name} />
            </div>
            <div className="ad-details">
              <h3>{ad.name}</h3>
              <p className="price">${ad.price}</p>
              <p className="location">{ad.city}</p>
              <span className="category">{ad.category}</span>
            </div>
            <div className="ad-actions">
              <button className="edit-btn">
                <FaEdit /> Edit
              </button>
              <button className="delete-btn">
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdsCard;
