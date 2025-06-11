import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AdsCard = ({ ads = [] }) => {
  if (ads.length === 0) {
    return <p className="no-results">There are no active ads.</p>;
  }

  return (
    <div className="ads-container">
      <div className="ads-grid">
        {ads.map(ad => (
          <div key={ad._id} className="ad-card">
            <div className="ad-image">
              <img src={ad.imageUrl} alt={ad.title} />
            </div>
            <div className="ad-details">
              <h3>{ad.title}</h3>
              <p className="price">{ad.price}</p>
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
