import Layout from "../../components/Layout";
import Link from "next/link";
import { getAllLargeIds, getLargeData } from "../../lib/larges";
import useSWR from "swr";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import Cookie from "universal-cookie";

// const cookie = Cookie();

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Large({ staticLarge, id }) {
  const router = useRouter();
  const { data: large, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-large/${id}`,
    fetcher,
    {
      fallbackData: staticLarge,
    }
  );

  useEffect(() => {
    mutate();
  }, [mutate]);

  if (router.isFallback || !large) {
    return <div>Loading...</div>;
  }

  return (
      <Layout title={large.large}>
        <p>
          {"ID : "}
          {large.id}
        </p>
        <p>{large.large}</p>

        {/* <div className="container">
          <div className="large_container">
            {box1 &&
              box1.map((item,i) => (
              <Item key={i} item={item} className="square" />
            ))}
          </div>
          <div className="large_container">
            {box2 &&
              box2.map((item, i) => (
              <Item key={i} item={item} className="square" />
            ))}
          </div>
          <div className="large_container">
            {box3 &&
              box3.map((item, i) => (
              <Item key={i} item={item} className="square" />
            ))}
          </div>
          <div className="large_container">
            {box4 &&
              box4.map((item, i) => (
              <Item key={i} item={item} className="square" />
            ))}
          </div>
          <div className="large_container">
            {box5 &&
              box5.map((item, i) => (
              <Item key={i} item={item} className="square" />
            ))}
          </div>
          <div className="large_container">
            {box6 &&
              box6.map((item, i) => (
              <Item key={i} item={item} className="square" />
            ))}
          </div>
          <div className="large_container">
            {box7 &&
              box7.map((item, i) => (
              <Item key={i} item={item} className="square" />
            ))}
          </div>
          <div className="large_container">
            {box8 &&
              box8.map((item, i) => (
              <Item key={i} item={item} className="square" />
            ))}
          </div>
          <div className="large_container">
            {box9 &&
              box9.map((item, i) => (
              <Item key={i} item={item} className="square" />
            ))}
          </div>
        </div> */}
        <Link href="/large">
          <a>
            <span>Back to large</span>
          </a>
        </Link>
      </Layout>
  );
}
export async function getStaticPaths() {
  const paths = await getAllLargeIds();
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const staticLarge = await getLargeData(params.id);
  return {
    props: {
      id: staticLarge.id,
      staticLarge,
    },
    revalidate: 3,
  };
}
