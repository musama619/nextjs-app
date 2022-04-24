import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing the order");
    router.push('/product')
  };
  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <br />
      <Link href="/product">
        <a>Product</a>
      </Link>
      <br />
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default Home;
