import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const {id, reviewId} = router.query;
  console.log(id)
  return (
    <>
      <h1>Review {reviewId} of Product {id}</h1>
    </>
  );
}

export default Review;
