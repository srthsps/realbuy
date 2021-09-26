import React, { useState, useEffect } from "react";
import Category from "../components/category";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const categoriesData = useSelector((state) => state.category.categoriesList);

  console.log(categoriesData);

  return (
    <section className="p-4">
      <div className="row">
        {categoriesData.map((item) => {
          return (
            <div className="col-md-3 mt-4">
              <Category key={item.id}
                categoryName={item.name}
                categoryImageUrl={item.image_url}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsPage;
