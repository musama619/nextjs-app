import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <h1>Product Details of {id}</h1>
    </>
  );
}

export default ProductDetail;
