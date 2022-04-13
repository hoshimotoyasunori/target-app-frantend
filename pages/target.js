import Layout from "../components/Layout";
import Link from "next/link";
import { getAllTargetsData } from "../lib/targets";
import Target from "../components/Target";
import useSWR from "swr";
import { useEffect } from "react";
import StateContextProvider from "../context/StateContext";
import TargetForm from "../components/TargetForm";

const fetcher = (url) => fetch(url).then((res) => res.json());
const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-target/`;

export default function TargetPage({ staticfilteredTargets }) {
  const { data: targets, mutate } = useSWR(apiUrl, fetcher, {
    fallbackData: staticfilteredTargets,
  });

  const filteredTargets = targets?.sort(function (a, b) {
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
      <Layout title="Target">
        <TargetForm targetCreated={mutate} />
        <ul>
          {filteredTargets &&
            filteredTargets.map((target) => (
              <Target
                key={target.id}
                target={target}
                targetDeleted={mutate}
              />
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
  const staticfilteredTargets = await getAllTargetsData();
  return {
    props: { staticfilteredTargets },
    revalidate: 3,
  };
}
