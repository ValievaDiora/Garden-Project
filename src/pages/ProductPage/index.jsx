import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../requests/productRequest";
import ProductItem from "../../components/ProductItem";

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  const product = useSelector((state) => state.product.list);

  return (
    <div>
      <ProductItem product={product} />
    </div>
  );
}
