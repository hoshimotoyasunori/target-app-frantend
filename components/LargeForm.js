import { useContext } from "react";
import { StateContext } from "../context/StateContext";
import Cookie from "universal-cookie";

const cookie = new Cookie();

export default function LargeForm({ largeCreated }) {
  const { selectedlarge, setSelectedlarge } = useContext(StateContext);
  const create = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/larges/`, {
      method: "POST",
      body: JSON.stringify({ large: selectedlarge.large }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${cookie.get("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        alert("JWT Token not valid");
      }
    });
    setSelectedlarge({ id: 0, large: "" });
    largeCreated();
  };
  const update = async (e) => {
    e.preventDefault();
    await fetch(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/larges/${selectedlarge.id}/`,
      {
        method: "PUT",
        body: JSON.stringify({ large: selectedlarge.large }),
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
    setSelectedlarge({ id: 0, large: "" });
    largeCreated();
  };
  return (
    <div>
      <form onSubmit={selectedlarge.id !== 0 ? update : create}>
        <input
          type="text"
          value={selectedlarge.large}
          onChange={(e) =>
            setSelectedlarge({ ...selectedlarge, large: e.target.value })
          }
        />
        <button type="submit">
          {selectedlarge.id !== 0 ? "update" : "create"}
        </button>
      </form>
    </div>
  );
}
