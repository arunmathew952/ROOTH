import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets'; // ensure correct path
import Title from '../components/Title.jsx';
import ProductItem from '../components/ProductItem.jsx';
import { ShopContext } from '../context/ShopContext.jsx';

const Collection = () => {
  const { products, search, showSearch} = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Toggle category checkboxes
  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  // Apply category filter
  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }



    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => 
        category.map(c => c.toLowerCase()).includes(item.category.toLowerCase())
      );
      
  
    }

    // Apply sorting
    if (sortType === 'low-high') {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-low') {
      productsCopy.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(productsCopy);
  };

  // Update products when products, category, or sort changes
  useEffect(() => {
    applyFilter();
  }, [products, category, sortType, search,showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Left Side Filter */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform duration-300 ${
              showFilter ? 'rotate-270' : 'rotate-180'
            }`}
            src={assets.back}
            alt="dropdown"
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden sm:block'
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Casual"
                onChange={toggleCategory}
              />
              Casual
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Maternity"
                onChange={toggleCategory}
              />
              Maternity
            </p>
          </div>
        </div>
      </div>

      {/* Right Side (Products + Sort) */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Sort Dropdown */}
          <select
            className="border border-gray-300 text-sm px-2 py-1 rounded sm:border-2"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
