import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdsCard = ({ ads = [], user }) => {
  if (ads.length === 0) {
    return <p className="no-results">There are no active ads.</p>;
  }
  const navigate = useNavigate();

  const handleDelete = async adId => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this ad?'
    );

    if (!confirmed) return;

    try {
      await axios.delete(`/api/v1/ads/delete-ad/${adId}`, {
        withCredentials: true,
      });
      toast.success('Ad successfully deleted!');
      window.location.reload();
    } catch (error) {
      toast.error(error.response?.data?.msg || 'Failed to delete ad');
    }
  };

  return (
    <div className="ads-container">
      <div className="ads-grid">
        {ads.map(ad => (
          <div key={ad._id} className="ad-card">
            <Link to={`/ads/${ad._id}`} className="ad-link">
              <div className="ad-image">
                <img src={ad.imageUrl} alt={ad.title} />
              </div>
              <div className="ad-details">
                <h3>{ad.title}</h3>
                <p className="price">{ad.price}</p>
                <p className="location">{ad.city}</p>
                <span className="category">{ad.category}</span>
              </div>
            </Link>

            {user && user._id === ad.user._id && (
              <div className="ad-actions">
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/edit-ad/${ad._id}`)}
                >
                  <FaEdit /> Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(ad._id)}
                >
                  <FaTrash /> Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdsCard;
