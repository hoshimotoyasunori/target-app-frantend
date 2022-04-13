import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useEffect } from "react";
import useSWR from "swr";
import {  getAllTargetIds, getTargetData} from "../../lib/targets";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Target({staticTarget,id,}) {
  const router = useRouter();
  const { data: target, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-target/${id}`,
    fetcher,
    {
      fallbackData: staticTarget,
    }
  );
  useEffect(() => {
    mutate();
  },[mutate]);

  if (router.isFallback || !target) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={target.target}>
      <p>
        {"ID : "}
        {target.id}
      </p>
      <p>{target.target}</p>
      <div className="container">
        <div className="target_container">
          <div className="target_box">
            <p>{target.target1_1}</p>
            <p>{target.target1_2}</p>
            <p>{target.target1_3}</p>
            <p>{target.target1_4}</p>
            <p>{target.target1_5}</p>
            <p>{target.target1_6}</p>
            <p>{target.target1_7}</p>
            <p>{target.target1_8}</p>
            <p>{target.target1_9}</p>
          </div>
          <div className="target_box">
            <p>{target.target2_1}</p>
            <p>{target.target2_2}</p>
            <p>{target.target2_3}</p>
            <p>{target.target2_4}</p>
            <p>{target.target2_5}</p>
            <p>{target.target2_6}</p>
            <p>{target.target2_7}</p>
            <p>{target.target2_8}</p>
            <p>{target.target2_9}</p>
          </div>
          <div className="target_box">
            <p>{target.target3_1}</p>
            <p>{target.target3_2}</p>
            <p>{target.target3_3}</p>
            <p>{target.target3_4}</p>
            <p>{target.target3_5}</p>
            <p>{target.target3_6}</p>
            <p>{target.target3_7}</p>
            <p>{target.target3_8}</p>
            <p>{target.target3_9}</p>
          </div>
          <div className="target_box">
            <p>{target.target4_1}</p>
            <p>{target.target4_2}</p>
            <p>{target.target4_3}</p>
            <p>{target.target4_4}</p>
            <p>{target.target4_5}</p>
            <p>{target.target4_6}</p>
            <p>{target.target4_7}</p>
            <p>{target.target4_8}</p>
            <p>{target.target4_9}</p>
          </div>
          <div className="target_box">
            <p>{target.target5_1}</p>
            <p>{target.target5_2}</p>
            <p>{target.target5_3}</p>
            <p>{target.target5_4}</p>
            <p>{target.target}</p>
            <p>{target.target5_6}</p>
            <p>{target.target5_7}</p>
            <p>{target.target5_8}</p>
            <p>{target.target5_9}</p>
          </div>
          <div className="target_box">
            <p>{target.target6_1}</p>
            <p>{target.target6_2}</p>
            <p>{target.target6_3}</p>
            <p>{target.target6_4}</p>
            <p>{target.target6_5}</p>
            <p>{target.target6_6}</p>
            <p>{target.target6_7}</p>
            <p>{target.target6_8}</p>
            <p>{target.target6_9}</p>
          </div>
          <div className="target_box">
            <p>{target.target7_1}</p>
            <p>{target.target7_2}</p>
            <p>{target.target7_3}</p>
            <p>{target.target7_4}</p>
            <p>{target.target7_5}</p>
            <p>{target.target7_6}</p>
            <p>{target.target7_7}</p>
            <p>{target.target7_8}</p>
            <p>{target.target7_9}</p>
          </div>
          <div className="target_box">
            <p>{target.target8_1}</p>
            <p>{target.target8_2}</p>
            <p>{target.target8_3}</p>
            <p>{target.target8_4}</p>
            <p>{target.target8_5}</p>
            <p>{target.target8_6}</p>
            <p>{target.target8_7}</p>
            <p>{target.target8_8}</p>
            <p>{target.target8_9}</p>
          </div>
          <div className="target_box">
            <p>{target.target9_1}</p>
            <p>{target.target9_2}</p>
            <p>{target.target9_3}</p>
            <p>{target.target9_4}</p>
            <p>{target.target9_5}</p>
            <p>{target.target9_6}</p>
            <p>{target.target9_7}</p>
            <p>{target.target9_8}</p>
            <p>{target.target9_9}</p>
          </div>
        </div>
      </div>
      <Link href="/target">
        <a>
          <span>Back to target</span>
        </a>
      </Link>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = await getAllTargetIds();
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const staticTarget = await getTargetData(params.id);
  return {
    props: {
      id: staticTarget.id,
      staticTarget,
    },
    revalidate: 3,
  };
}
