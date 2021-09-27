import React from "react";
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

const Category = ({ categoryId, categoryName, categoryImageUrl }) => {
  const catId = categoryId
  const catName = categoryName;
  const catUrl = categoryImageUrl;
  return (
    <div className="card bg-white rounded shadow" style={{cursor:"pointer"}}>
        <Link to={`products/${catId}`} style={{ textDecoration: 'none' }}>
      <div className="card-body d-flex justify-content-center">
        <img src={catUrl} width="60px" alt="" />
      </div>
      <div className="card-head text-center">
        <h6 className="p-2 mt-3 text-primary">{catName}</h6>
      </div>
      </Link>
    </div>
  );
};

Category.propTypes = {
  categoryId: PropTypes.number.isRequired, 
  categoryName: PropTypes.string.isRequired,
  categoryImageUrl: PropTypes.string.isRequired,
};

export default Category;
