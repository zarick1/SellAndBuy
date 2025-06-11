import styled from 'styled-components';

const Wrapper = styled.div`
  .ads-container {
    margin: 2rem 0;
  }

  .ads-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  .no-results {
    text-align: center;
    margin: 2rem 0;
    font-size: 1.2rem;
    color: var(--grey-500);
  }

  .ad-card {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease;
    background: white;
    position: relative;
  }

  .ad-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: #007bff;
    cursor: pointer;
  }

  .ad-image {
    height: 200px;
    overflow: hidden;
    position: relative;
  }

  .ad-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .ad-card:hover .ad-image img {
    transform: scale(1.05);
  }

  .ad-details {
    padding: 1.2rem;
  }

  .ad-details h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    color: #333;
    font-weight: 600;
  }

  .price {
    font-weight: bold;
    font-size: 1.3rem;
    color: #28a745;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
  }

  .price::before {
    content: '$';
    font-size: 0.9em;
    margin-right: 2px;
  }

  .location {
    color: #6c757d;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .location::before {
    content: '\f3c5';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    font-size: 0.9em;
  }

  .category {
    display: inline-block;
    background: #f8f9fa;
    padding: 0.35rem 0.7rem;
    border-radius: 20px;
    font-size: 0.8rem;
    color: #495057;
    border: 1px solid #dee2e6;
    margin-top: 0.5rem;
  }

  .ad-actions {
    display: flex;
    padding: 0 1.2rem 1.2rem;
    gap: 0.8rem;
    margin-top: 0.8rem;
  }

  .ad-actions button {
    flex: 1;
    padding: 0.6rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .ad-actions button:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .edit-btn {
    background: #ffc107;
    color: #212529;
  }

  .edit-btn:hover {
    background: #e0a800;
  }

  .delete-btn {
    background: #dc3545;
    color: white;
  }

  .delete-btn:hover {
    background: #c82333;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .ads-grid {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    }
  }

  .filter-bar-wrapper {
    background-color: #f9f9f9;
    padding: 2rem;
    border-radius: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .filter-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-title {
    font-size: 2rem;
    font-weight: 600;
    color: #2d2d2d;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }

  .filters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  .form-row {
    display: flex;
    flex-direction: column;
  }

  .form-label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
  }

  .form-input,
  .form-select {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  .price-range-row {
    display: flex;
    flex-direction: column;
  }

  .price-range-inputs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .price-separator {
    font-size: 1.2rem;
    color: #666;
  }

  .checkbox-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .form-footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
  }

  .button-group {
    display: flex;
    gap: 1rem;
  }

  .checkbox-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export default Wrapper;
