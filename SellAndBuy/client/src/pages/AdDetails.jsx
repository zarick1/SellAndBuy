import React from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

import Wrapper from '../assets/wrappers/AdDetails';

export const loader = async ({ params }) => {
  try {
    const { data } = await axios.get(`/api/v1/ads/get-ad/${params.id}`);
    console.log(data);

    return data.data.ad;
  } catch (error) {
    console.error('Error fetching ad details:', error);
    return error;
  }
};

const AdDetails = () => {
  const ad = useLoaderData();
  console.log(ad);

  return (
    <Wrapper>
      <div className="ad-details-container">
        <div className="ad-header">
          <h1>{ad.title}</h1>
          <div className="price">{ad.price}</div>
        </div>

        <div className="ad-content">
          {/* Image Gallery */}
          <div className="image-gallery">
            <div className="main-image">
              <img src={ad.imageUrl} alt="Main" />
            </div>
          </div>

          {/* Details Section */}
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

            {/* Contact Section */}
            <div className="contact-card">
              <h3>Contact Seller</h3>
              <p>{ad.user.phone}</p>
              <button className="contact-btn">Send Message</button>
            </div>
          </div>

          {/* Description */}
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
