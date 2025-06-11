import React from 'react';
import Wrapper from '../assets/wrappers/Navbar';

const AdDetails = () => {
  // Static ad data
  const ad = {
    id: 1,
    title: 'iPhone 13 Pro 256GB - Like New',
    price: 899,
    description:
      'iPhone 13 Pro in excellent condition with 256GB storage. Purchased 6 months ago, comes with original box and accessories. Battery health at 98%. No scratches or dents.',
    category: 'Electronics',
    location: 'New York, NY',
    posted: '2023-05-15',
    seller: 'TechEnthusiast',
    contact: 'techseller@example.com',
    images: [
      'https://via.placeholder.com/800x600?text=iPhone+Front',
      'https://via.placeholder.com/800x600?text=iPhone+Back',
      'https://via.placeholder.com/800x600?text=iPhone+Side',
      'https://via.placeholder.com/800x600?text=iPhone+Box',
    ],
  };

  return (
    <Wrapper>
      <div className="ad-details-container">
        <div className="ad-header">
          <h1>{ad.title}</h1>
          <div className="price">${ad.price}</div>
        </div>

        <div className="ad-content">
          {/* Image Gallery */}
          <div className="image-gallery">
            <div className="main-image">
              <img src={ad.images[0]} alt="Main" />
            </div>
            <div className="thumbnail-container">
              {ad.images.map((img, index) => (
                <div key={index} className="thumbnail">
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
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
                <span className="detail-value">{ad.location}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Posted:</span>
                <span className="detail-value">{ad.posted}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Seller:</span>
                <span className="detail-value">{ad.seller}</span>
              </div>
            </div>

            {/* Contact Section */}
            <div className="contact-card">
              <h3>Contact Seller</h3>
              <p>{ad.contact}</p>
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
