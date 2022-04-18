import Link from "next/link";
import { useContext } from "react";
import Cookie from "universal-cookie";
import { StateContext } from "../context/StateContext";

const cookie = new Cookie();

export default function Middle({ middle, middleDeleted }) {
  const { setSelectedmiddle } = useContext(StateContext);
  const deletemiddle = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/middles/${middle.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${cookie.get("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        alert("JWT Token not valid");
      }
    });
    middleDeleted();
  };
  // console.log('------')
  // console.log('user_id')
  // console.log(middle.user_id)
  // console.log('target_large')
  // console.log(middle.id)
  // console.log('middle_middle')
  // console.log(middle.middle)
  // console.log('------')
  return (
    <div>
      <span>{middle.id}</span>
      {" : "}
      <Link href={`/middles/${middle.id}`}>
        <a>{middle.middle}</a>
      </Link>
      <div>
        <svg
          onClick={() => setSelectedmiddle(middle)}
          className="editicon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        <svg
          className="deleteicon"
          onClick={deletemiddle}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </div>
  );
}
