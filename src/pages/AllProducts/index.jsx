import React from "react";
import AllProductsJson from "../../components/AllProductsJson";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../requests/allProductsRequest";
import { useEffect } from "react";
import SortForm from "../../components/SortForm";
import { getProduct } from "../../requests/productRequest";

export default function AllProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getProduct(1));
  }, []);

  const allProducts = useSelector((state) => state.allProducts.list);

  return (
    <div>
      <SortForm />
      <AllProductsJson products={allProducts} />
    </div>
  );
}
