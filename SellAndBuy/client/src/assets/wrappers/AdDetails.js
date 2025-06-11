import styled from 'styled-components';

const Wrapper = styled.main`
  /* Main Container */
  .ad-details-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  /* Header Section */
  .ad-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e0e0e0;
  }

  .ad-header h1 {
    font-size: 2rem;
    color: #333;
    margin: 0;
    font-weight: 600;
  }

  .price {
    font-size: 2rem;
    font-weight: bold;
    color: #28a745;
  }

  .price::before {
    content: '$';
    font-size: 0.9em;
    margin-right: 2px;
  }

  /* Image Gallery */
  .image-gallery {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .main-image {
    width: 100%;
    height: 500px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .main-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .thumbnail-container {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }

  .thumbnail {
    width: 100px;
    height: 75px;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 0.2s;
  }

  .thumbnail:hover {
    border-color: #007bff;
    transform: translateY(-2px);
  }

  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Details Section */
  .ad-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }

  .details-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .details-card,
  .contact-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    border: 1px solid #e9ecef;
  }

  .details-card h3,
  .contact-card h3 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    color: #333;
    font-size: 1.25rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
  }

  .detail-row {
    display: flex;
    margin-bottom: 1rem;
  }

  .detail-label {
    font-weight: 600;
    color: #555;
    width: 100px;
    flex-shrink: 0;
  }

  .detail-value {
    color: #333;
  }

  /* Contact Section */
  .contact-card p {
    margin: 0 0 1.5rem 0;
    color: #333;
  }

  .contact-btn {
    width: 100%;
    padding: 0.8rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .contact-btn:hover {
    background: #0069d9;
  }

  /* Description Section */
  .description-section {
    grid-column: 1 / -1;
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    border: 1px solid #e9ecef;
  }

  .description-section h3 {
    margin-top: 0;
    color: #333;
    font-size: 1.25rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
  }

  .description-section p {
    line-height: 1.6;
    color: #333;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .ad-content {
      grid-template-columns: 1fr;
    }

    .ad-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .main-image {
      height: 300px;
    }
  }
`;

export default Wrapper;
