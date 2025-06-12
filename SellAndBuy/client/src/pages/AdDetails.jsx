import React from 'react';
import axios from 'axios';
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Wrapper from '../assets/wrappers/AdDetails';

export const loader = async ({ params }) => {
  try {
    const userRes = await axios.get('/api/v1/users/current-user', {
      withCredentials: true,
    });

    const user = userRes.data?.data?.user;

    if (!user) {
      return redirect('/login');
    }

    const { data } = await axios.get(`/api/v1/ads/get-ad/${params.id}`, {
      withCredentials: true,
    });
    //console.log(data);

    return { ad: data.data.ad, user };
  } catch (error) {
    console.error('Error fetching ad details:', error);
    return redirect('/login');
  }
};

const AdDetails = () => {
  const { ad, user } = useLoaderData();
  const navigate = useNavigate();

  const isOwner = ad.user._id === user._id;
  //console.log(isOwner);

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
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.msg || 'Failed to delete ad');
    }
  };

  return (
    <Wrapper>
      <div className="ad-details-container">
        <div className="ad-header">
          <h1>{ad.title}</h1>
          <div className="price">{ad.price}</div>
        </div>
        <div className="ad-content">
          <div className="image-gallery">
            <div className="main-image">
              <img src={ad.imageUrl} alt="Main" />
            </div>
          </div>
          <div className="details-section">
            <div className="details-card">
              <h3>Details</h3>
              <div className="detail-row">
                <span className="detail-label">Category:</span>
                <span className="detail-value">{ad.category}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Location:</span>
                <span className="detail-value">{ad.city}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Posted:</span>
                <span className="detail-value">
                  {new Date(ad.createdAt).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Seller:</span>
                <span className="detail-value">{ad.user.username}</span>
              </div>
            </div>
            <div className="contact-card">
              <h3>Contact Seller</h3>
              <p>{ad.user.phone}</p>
              <button className="contact-btn">Send Message</button>
            </div>
            {isOwner && (
              <div className="owner-actions">
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/edit-ad/${ad._id}`)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(ad._id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          <div className="description-section">
            <h3>Description</h3>
            <p>{ad.description}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AdDetails;
