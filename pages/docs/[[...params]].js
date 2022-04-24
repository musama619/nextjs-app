import { useRouter } from "next/router";
function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length == 2) {
    return <h1>Viewing page for docs feature {params[0]}</h1>;
  }
  return <h1>Docs page</h1>;
}

export default Docs;
