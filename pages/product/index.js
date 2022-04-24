import Link from "next/link";
function Product({ id = 100 }) {
  return (
    <>
      <Link href="/product/1">
        <a>Product 1</a>
      </Link>
      <Link href="/product/2">
        <a>Product 2</a>
      </Link>
      <Link href="/product/3">
        <a>Product 3</a>
      </Link>
      <Link href={`/product/${id}`}>
        <a>Product {id}</a>
      </Link>
    </>
  );
}

export default Product;
