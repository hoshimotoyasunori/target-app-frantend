import Cookie from "universal-cookie";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Link from "next/link";

const cookie = new Cookie();

export default function MainPage() {
  const router = useRouter();
  const logout = () => {
    cookie.remove("access_token", { path: "/" });
    router.push("/");
  };
  return (
    <Layout title="Main">
      <div>
        <Link href="/target">
          <a>Target-List</a>
        </Link>
      </div>
      <span onClick={logout}>
        logout
      </span>
    </Layout>
  );
}
