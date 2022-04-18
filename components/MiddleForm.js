import { useContext } from "react";
import { StateContext } from "../context/StateContext";
import Cookie from "universal-cookie";

const cookie = new Cookie();

export default function MiddleForm({ middleCreated }) {
  const { selectedmiddle, setSelectedmiddle } = useContext(StateContext);
  const create = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/middles/`, {
      method: "POST",
      body: JSON.stringify({ middle: selectedmiddle.middle }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${cookie.get("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        alert("JWT Token not valid");
      }
    });
    setSelectedmiddle({ id: 0, middle: "" });
    middleCreated();
  };
  const update = async (e) => {
    e.preventDefault();
    await fetch(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/middles/${selectedmiddle.id}/`,
      {
        method: "PUT",
        body: JSON.stringify({ middle: selectedmiddle.middle }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${cookie.get("access_token")}`,
        },
      }
    ).then((res) => {
      if (res.status === 401) {
        alert("JWT Token not valid");
      }
    });
    setSelectedmiddle({ id: 0, middle: "" });
    middleCreated();
  };
  return (
    <div>
      <form onSubmit={selectedmiddle.id !== 0 ? update : create}>
        <input
          type="text"
          value={selectedmiddle.middle}
          onChange={(e) =>
            setSelectedmiddle({ ...selectedmiddle, middle: e.target.value })
          }
        />
        <button type="submit">
          {selectedmiddle.id !== 0 ? "update" : "create"}
        </button>
      </form>
    </div>
  );
}
