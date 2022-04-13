import { useContext } from "react";
import { StateContext } from "../context/StateContext";
import Cookie from "universal-cookie";

const cookie = new Cookie();

export default function TargetForm({ targetCreated }) {
  const { selectedtarget, setSelectedtarget } = useContext(StateContext);
  const create = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/targets/`, {
      method: "POST",
      body: JSON.stringify({ target: selectedtarget.target }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${cookie.get("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        alert("JWT Token not valid");
      }
    });
    setSelectedtarget({ id: 0, target: "" });
    targetCreated();
  };
  const update = async (e) => {
    e.preventDefault();
    await fetch(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/targets/${selectedtarget.id}/`,
      {
        method: "PUT",
        body: JSON.stringify({ target: selectedtarget.target }),
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
    setSelectedtarget({ id: 0, target: "" });
    targetCreated();
  };
  return (
    <div>
      <form onSubmit={selectedtarget.id !== 0 ? update : create}>
        <input
          type="text"
          value={selectedtarget.target}
          onChange={(e) =>
            setSelectedtarget({ ...selectedtarget, target: e.target.value })
          }
        />
        <button
          type="submit"
        >
          {selectedtarget.id !== 0 ? "update" : "create"}
        </button>
      </form>
    </div>
  );
}