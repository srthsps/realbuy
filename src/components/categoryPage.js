import React, { useState, useEffect } from "react";
import Category from "../components/category";
import { useSelector } from "react-redux";

const ProductsPage = () => {

  const categoriesData = useSelector((state) => state.category.categoriesList);

  console.log(categoriesData);

  return (
    <section className="p-4 mt-0">
      <div className="row">
        {categoriesData.map((item) => {
          return (
            <div className="col-md px-5 px-md-3 mt-4">
              <Category key={item.id}
                categoryId={item.id}
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
