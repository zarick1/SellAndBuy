import React from 'react';

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <form className="filter-form">
        <div className="form-row">
          <label htmlFor="category">Category</label>
          <select id="category" name="category">
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="clothing">Clothing</option>
            <option value="vehicles">Vehicles</option>
            <option value="real-estate">Real Estate</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="name">Name contains</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Search by name..."
          />
        </div>
        <div className="form-row">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Filter by city..."
          />
        </div>

        <div className="form-row price-range">
          <label>Price Range</label>
          <div className="price-inputs">
            <input type="number" name="minPrice" placeholder="Min" min="0" />
            <span className="price-separator">-</span>
            <input type="number" name="maxPrice" placeholder="Max" min="0" />
          </div>
        </div>

        <div className="form-row checkbox-row">
          <input type="checkbox" id="showMineOnly" name="showMineOnly" />
          <label htmlFor="showMineOnly">Show mine only</label>
        </div>

        <div className="button-group">
          <button type="button" className="btn apply-btn">
            Apply Filters
          </button>
          <button type="button" className="btn reset-btn">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterBar;
