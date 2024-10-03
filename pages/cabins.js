import { getCabins } from "@/lib/data-service";

export async function getStaticProps() {
  const cabins = await getCabins();
  return { props: { cabins } };
}

function Cabins({ cabins }) {
  console.log(cabins);
  return <div>Cabins page</div>;
}

export default Cabins;
