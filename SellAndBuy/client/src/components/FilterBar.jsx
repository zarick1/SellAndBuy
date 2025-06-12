import React from 'react';
import { Form, Link } from 'react-router-dom';

import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';

const FilterBar = ({ user }) => {
  return (
    <div className="filter-bar-wrapper">
      <Form className="filter-form">
        <h2 className="form-title">Search</h2>

        <div className="filters-grid">
          <FormRow
            type="search"
            name="search"
            labelText="Search"
            defaultValue=""
          />

          <FormRowSelect
            labelText="Category"
            name="category"
            list={[
              'All',
              'Clothing',
              'Tools',
              'Sports',
              'Accessories',
              'Furniture',
              'Pets',
              'Games',
              'Books',
              'Technology',
            ]}
            defaultValue="All"
          />

          <div className="form-row price-range-row">
            <label className="form-label">Price Range</label>
            <div className="price-range-inputs">
              <input
                type="number"
                name="minPrice"
                placeholder="Min"
                className="form-input"
                min="0"
                defaultValue=""
              />
              <span className="price-separator">-</span>
              <input
                type="number"
                name="maxPrice"
                placeholder="Max"
                className="form-input"
                min="0"
                defaultValue=""
              />
            </div>
          </div>
        </div>

        <div className="form-footer">
          {user && (
            <div className="checkbox-row">
              <input type="checkbox" id="showMineOnly" name="showMineOnly" />
              <label htmlFor="showMineOnly">Show mine only</label>
            </div>
          )}

          <div className="button-group">
            <button type="submit" className="btn apply-btn">
              Apply Filters
            </button>
            <Link to="/" className="btn reset-btn">
              Reset
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default FilterBar;
