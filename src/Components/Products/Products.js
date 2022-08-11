import { Fragment } from "react";
import AvailableProducts from "./AvailableProducts";
import ProductSummary from "./ProductSummary";

const Products = () => {
  return (
    <Fragment>
      <AvailableProducts />
      <ProductSummary />
    </Fragment>
  );
};

export default Products;
