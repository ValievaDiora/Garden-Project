import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../requests/categoryRequest";
import AllProductsJson from "../../components/AllProductsJson";

export default function CategoryPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory(id));
  }, []);

  const product = useSelector((state) => state.category.list);
  const data = useSelector((state) => state.category.list.data);

  return (
    <div>
      <AllProductsJson products={data} />
    </div>
  );
}
