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
  .filter-bar {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    border: 1px solid #e9ecef;
  }

  .filter-form {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    min-width: 200px;
    flex-grow: 1;
  }

  .form-row label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #495057;
    font-size: 0.9rem;
  }

  .form-row select,
  .form-row input[type='text'],
  .form-row input[type='number'] {
    padding: 0.6rem 0.8rem;
    border: 1px solid #ced4da;
    border-radius: 6px;
    font-size: 0.9rem;
    transition: all 0.2s;
  }

  .form-row select:focus,
  .form-row input[type='text']:focus,
  .form-row input[type='number']:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  .price-range .price-inputs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .price-separator {
    color: #6c757d;
    font-weight: bold;
  }

  .checkbox-row {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .checkbox-row input[type='checkbox'] {
    cursor: pointer;
  }

  .checkbox-row label {
    margin-bottom: 0;
    cursor: pointer;
  }

  .button-group {
    display: flex;
    gap: 1rem;
    align-items: flex-end;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .apply-btn {
    background: #007bff;
    color: white;
  }

  .apply-btn:hover {
    background: #0069d9;
  }

  .reset-btn {
    background: #6c757d;
    color: white;
  }

  .reset-btn:hover {
    background: #5a6268;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin: 3rem 0;
    flex-wrap: wrap;
  }

  .page-nav,
  .page-btn {
    padding: 0.6rem 1rem;
    border: 1px solid #dee2e6;
    background: white;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.9rem;
    min-width: 40px;
    text-align: center;
  }

  .page-nav:hover:not(:disabled),
  .page-btn:hover:not(.active) {
    background: #f8f9fa;
    border-color: #ced4da;
    transform: translateY(-2px);
  }

  .page-nav:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .page-btn.active {
    background: #007bff;
    color: white;
    border-color: #007bff;
    font-weight: 500;
  }

  .ellipsis {
    padding: 0.6rem 0.2rem;
    color: #6c757d;
  }

  .page-info {
    width: 100%;
    text-align: center;
    margin-top: 1rem;
    color: #6c757d;
    font-size: 0.9rem;
  }
`;

export default Wrapper;
