import Layout from "../components/Layout";
import Link from "next/link";
import { getAllMainTargetsData } from "../lib/maintargets";
import MainTarget from "../components/MainTarget";

export default function MainTargetPage({ filteredMainTargets }) {
  return (
    <Layout title="MainTarget">
      <ul>
        {filteredMainTargets &&
          filteredMainTargets.map((maintarget) => (
            <MainTarget key={maintarget.id} maintarget={maintarget} />
          ))}
      </ul>
      <Link href="/main">
        <a>
          <span>Back to main</span>
        </a>
      </Link>
    </Layout>
  );
}

export async function getStaticProps() {
  const filteredMainTargets = await getAllMainTargetsData();
  return {
    props: { filteredMainTargets },
    revalidate: 3,
  };
}
