
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/product")({
    component: ProductList,
  });
  

function ProductList() {
  return <div>ProductList</div>;
}

export default ProductList;
