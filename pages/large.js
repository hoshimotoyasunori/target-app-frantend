import Layout from "../components/Layout";
import Link from "next/link";
import { getAllLargesData } from "../lib/larges";
import useSWR from "swr";
import { useEffect } from "react";
import StateContextProvider from "../context/StateContext";
import Large from "../components/Large";
import LargeForm from "../components/LargeForm";

const fetcher = (url) => fetch(url).then((res) => res.json());
const apiLargeUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-large/`;

export default function LargePage({ staticfilteredLarges }) {
  const { data: larges, mutate } = useSWR(apiLargeUrl, fetcher, {
    fallbackData: staticfilteredLarges,
  });

  const filteredLarges = larges?.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
  useEffect(() => {
    mutate();
  }, [mutate]);
  return (
    <StateContextProvider>
      <Layout title="Large">
        <LargeForm largeCreated={mutate} />
        <ul>
          {filteredLarges &&
            filteredLarges.map((large) => (
              <Large key={large.id} large={large} largeDeleted={mutate} />
            ))}
        </ul>
        <Link href="/main">
          <a>
            <span>Back to main</span>
          </a>
        </Link>
      </Layout>
    </StateContextProvider>
  );
}

export async function getStaticProps() {
  const staticfilteredLarges = await getAllLargesData();
  return {
    props: { staticfilteredLarges },
    revalidate: 3,
  };
}
