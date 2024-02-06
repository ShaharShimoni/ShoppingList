import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./ProductListByCatoegryStyle";

const ProductListByCategory = () => {
  const classes = useStyles();
  const categories = useSelector((state) => state.products.categories);

  return (
    <div dir="rtl" className={classes.root}>
      {Object.keys(categories).map((category, categoryIndex) => {
        const totalItems = categories[category].reduce(
          (acc, product) => acc + product.count,
          0
        );
        return (
          <div key={categoryIndex} className={classes.categoryBox}>
            <h5 className={classes.title}>
              {category} -{totalItems} מוצרים
            </h5>
            <hr className={classes.separator} />
            <div className={classes.list}>
              {categories[category].map((product, itemIndex) => (
                <div key={itemIndex} className={classes.box}>
                  <span className={classes.item}>{product.item}</span>
                  {product.count > 1 && (
                    <span className={classes.count}>({product.count})</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListByCategory;
