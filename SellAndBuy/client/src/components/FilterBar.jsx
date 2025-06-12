import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';

const FilterBar = ({ user }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showMineOnly, setShowMineOnly] = useState(false);

  // Pre-populate vrednosti iz URL-a (ako postoje)
  useEffect(() => {
    setSearch(searchParams.get('search') || '');
    setCategory(searchParams.get('category') || 'All');
    setMinPrice(searchParams.get('minPrice') || '');
    setMaxPrice(searchParams.get('maxPrice') || '');
    setShowMineOnly(searchParams.get('showMineOnly') === 'on');
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const params = {};

    if (search.trim()) params.search = search;
    if (category !== 'All') params.category = category;
    if (minPrice) params.minPrice = minPrice;
    if (maxPrice) params.maxPrice = maxPrice;
    if (showMineOnly) params.showMineOnly = 'on';

    setSearchParams(params);
  };

  const handleReset = () => {
    setSearch('');
    setCategory('All');
    setMinPrice('');
    setMaxPrice('');
    setShowMineOnly(false);
    setSearchParams({});
    navigate('/');
  };

  return (
    <div className="filter-bar-wrapper">
      <form className="filter-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Search</h2>

        <div className="filters-grid">
          <FormRow
            type="search"
            name="search"
            labelText="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
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
            value={category}
            onChange={e => setCategory(e.target.value)}
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
                value={minPrice}
                onChange={e => setMinPrice(e.target.value)}
              />
              <span className="price-separator">-</span>
              <input
                type="number"
                name="maxPrice"
                placeholder="Max"
                className="form-input"
                min="0"
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="form-footer">
          {user && (
            <div className="checkbox-row">
              <input
                type="checkbox"
                id="showMineOnly"
                name="showMineOnly"
                checked={showMineOnly}
                onChange={e => setShowMineOnly(e.target.checked)}
              />
              <label htmlFor="showMineOnly">Show mine only</label>
            </div>
          )}

          <div className="button-group">
            <button type="submit" className="btn apply-btn">
              Apply Filters
            </button>
            <button
              type="button"
              className="btn reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterBar;
