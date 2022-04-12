import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import {
  getAllMainTargetIds,
  getMainTargetData,
  getTop_LeftData,
  getTop_CenterData,
  getTop_RightData,
  getCenter_LeftData,
  getCenter_RightData,
  getUnder_LeftData,
  getUnder_CenterData,
  getUnder_RightData,
  getTop_Left_SubData,
  getTop_Center_SubData,
  getTop_Right_SubData,
  getCenter_Left_SubData,
  getCenter_Right_SubData,
  getUnder_Left_SubData,
  getUnder_Center_SubData,
  getUnder_Right_SubData,
} from "../../lib/maintargets";

export default function MainTarget({
  maintarget,
  top_left,
  top_center,
  top_right,
  center_left,
  center_right,
  under_left,
  under_center,
  under_right,
  top_left_sub,
  top_center_sub,
  top_right_sub,
  center_left_sub,
  center_right_sub,
  under_left_sub,
  under_center_sub,
  under_right_sub,
}) {
  const router = useRouter();

  if (router.isFallback || !maintarget) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={maintarget.maintarget}>
      <p>
        {"ID : "}
        {maintarget.id}
      </p>
      <p>{maintarget.maintarget}</p>
      <div className="container">
        <div className="target_container">
          <div className="target_box">
            <p>{top_left_sub.top_left_1}</p>
            <p>{top_left_sub.top_left_2}</p>
            <p>{top_left_sub.top_left_3}</p>
            <p>{top_left_sub.top_left_4}</p>
            <p>{top_left.top_left}</p>
            <p>{top_left_sub.top_left_5}</p>
            <p>{top_left_sub.top_left_6}</p>
            <p>{top_left_sub.top_left_7}</p>
            <p>{top_left_sub.top_left_8}</p>
          </div>
          <div className="target_box">
            <p>{top_center_sub.top_center_1}</p>
            <p>{top_center_sub.top_center_2}</p>
            <p>{top_center_sub.top_center_3}</p>
            <p>{top_center_sub.top_center_4}</p>
            <p>{top_center.top_center}</p>
            <p>{top_center_sub.top_center_5}</p>
            <p>{top_center_sub.top_center_6}</p>
            <p>{top_center_sub.top_center_7}</p>
            <p>{top_center_sub.top_center_8}</p>
          </div>
          <div className="target_box">
            <p>{top_right_sub.top_right_1}</p>
            <p>{top_right_sub.top_right_2}</p>
            <p>{top_right_sub.top_right_3}</p>
            <p>{top_right_sub.top_right_4}</p>
            <p>{top_right.top_right}</p>
            <p>{top_right_sub.top_right_5}</p>
            <p>{top_right_sub.top_right_6}</p>
            <p>{top_right_sub.top_right_7}</p>
            <p>{top_right_sub.top_right_8}</p>
          </div>
          <div className="target_box">
            <p>{center_left_sub.center_left_1}</p>
            <p>{center_left_sub.center_left_2}</p>
            <p>{center_left_sub.center_left_3}</p>
            <p>{center_left_sub.center_left_4}</p>
            <p>{center_left.center_left}</p>
            <p>{center_left_sub.center_left_5}</p>
            <p>{center_left_sub.center_left_6}</p>
            <p>{center_left_sub.center_left_7}</p>
            <p>{center_left_sub.center_left_8}</p>
          </div>
          <div className="target_box">
            <p>{top_left.top_left}</p>
            <p>{top_center.top_center}</p>
            <p>{top_right.top_right}</p>
            <p>{center_left.center_left}</p>
            <p>{maintarget.maintarget}</p>
            <p>{center_right.center_right}</p>
            <p>{under_left.under_left}</p>
            <p>{under_center.under_center}</p>
            <p>{under_right.under_right}</p>
          </div>
          <div className="target_box">
            <p>{center_right_sub.center_right_1}</p>
            <p>{center_right_sub.center_right_2}</p>
            <p>{center_right_sub.center_right_3}</p>
            <p>{center_right_sub.center_right_4}</p>
            <p>{center_right.center_right}</p>
            <p>{center_right_sub.center_right_5}</p>
            <p>{center_right_sub.center_right_6}</p>
            <p>{center_right_sub.center_right_7}</p>
            <p>{center_right_sub.center_right_8}</p>
          </div>
          <div className="target_box">
            <p>{under_left_sub.under_left_1}</p>
            <p>{under_left_sub.under_left_2}</p>
            <p>{under_left_sub.under_left_3}</p>
            <p>{under_left_sub.under_left_4}</p>
            <p>{under_left.under_left}</p>
            <p>{under_left_sub.under_left_5}</p>
            <p>{under_left_sub.under_left_6}</p>
            <p>{under_left_sub.under_left_7}</p>
            <p>{under_left_sub.under_left_8}</p>
          </div>
          <div className="target_box">
            <p>{under_center_sub.under_center_1}</p>
            <p>{under_center_sub.under_center_2}</p>
            <p>{under_center_sub.under_center_3}</p>
            <p>{under_center_sub.under_center_4}</p>
            <p>{under_center.under_center}</p>
            <p>{under_center_sub.under_center_5}</p>
            <p>{under_center_sub.under_center_6}</p>
            <p>{under_center_sub.under_center_7}</p>
            <p>{under_center_sub.under_center_8}</p>
          </div>
          <div className="target_box">
            <p>{under_right_sub.under_right_1}</p>
            <p>{under_right_sub.under_right_2}</p>
            <p>{under_right_sub.under_right_3}</p>
            <p>{under_right_sub.under_right_4}</p>
            <p>{under_right.under_right}</p>
            <p>{under_right_sub.under_right_5}</p>
            <p>{under_right_sub.under_right_6}</p>
            <p>{under_right_sub.under_right_7}</p>
            <p>{under_right_sub.under_right_8}</p>
          </div>
        </div>
      </div>
      <Link href="/maintarget">
        <a>
          <span>Back to maintarget</span>
        </a>
      </Link>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = await getAllMainTargetIds();
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const maintarget = await getMainTargetData(params.id);
  const top_left = await getTop_LeftData(params.id);
  const top_center = await getTop_CenterData(params.id);
  const top_right = await getTop_RightData(params.id);
  const center_left = await getCenter_LeftData(params.id);
  const center_right = await getCenter_RightData(params.id);
  const under_left = await getUnder_LeftData(params.id);
  const under_center = await getUnder_CenterData(params.id);
  const under_right = await getUnder_RightData(params.id);
  const top_left_sub = await getTop_Left_SubData(params.id);
  const top_center_sub = await getTop_Center_SubData(params.id);
  const top_right_sub = await getTop_Right_SubData(params.id);
  const center_left_sub = await getCenter_Left_SubData(params.id);
  const center_right_sub = await getCenter_Right_SubData(params.id);
  const under_left_sub = await getUnder_Left_SubData(params.id);
  const under_center_sub = await getUnder_Center_SubData(params.id);
  const under_right_sub = await getUnder_Right_SubData(params.id);

  return {
    props: {
      maintarget,
      top_left,
      top_center,
      top_right,
      center_left,
      center_right,
      under_left,
      under_center,
      under_right,
      top_left_sub,
      top_center_sub,
      top_right_sub,
      center_left_sub,
      center_right_sub,
      under_left_sub,
      under_center_sub,
      under_right_sub,
    },
    revalidate: 3,
  };
}
