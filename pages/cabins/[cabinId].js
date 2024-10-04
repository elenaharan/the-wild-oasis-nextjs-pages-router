import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
// import { useRouter } from "next/router";

//Dynamically generated (SSR)
//we are using getServerSideProps because this route is dynamically generated
//because we cannot know the cabin id at runtime
export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin } };
}

//It is possible to generate this page statically (SSG) by using getStaticPaths
//we can tell Nextjs about all possible routes in advance
//since we can have a limited number of variations

//For SSG: getStaticPaths + getStaticProps
function Cabin({ cabin }) {
  // const router = useRouter();

  return (
    <>
      <Head>
        {/* <title>Cabin {router.query.cabinId} // The Wild Oasis</title> */}
        <title>Cabin {cabin.name} // The Wild Oasis</title>
      </Head>
      <div className="max-w-6xl mx-auto mt-8">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}

export default Cabin;
