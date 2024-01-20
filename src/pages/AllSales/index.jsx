import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../requests/allProductsRequest";
import AllProductsJson from "../../components/AllProductsJson";
import AllSalesDiv from "../../components/AllSalesDiv";

export default function AllSales() {
  const all_Products = useSelector((state) => state.allProducts.list);
  console.log(all_Products);

  const allSalesProducts = Array.isArray(all_Products)
    ? all_Products.filter((el) => el.discont_price)
    : [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <AllSalesDiv />
      <AllProductsJson products={allSalesProducts} />
    </div>
  );
}
