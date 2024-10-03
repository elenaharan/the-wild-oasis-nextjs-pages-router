import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin } };
}

function Cabin({ cabin }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Cabin {router.query.cabinId} // The Wild Oasis</title>
      </Head>
      <div className="">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}

export default Cabin;
