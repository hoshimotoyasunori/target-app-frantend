import { useContext } from "react";
import { StateContext } from "../context/StateContext";
import Cookie from "universal-cookie";

const cookie = new Cookie();

export default function TaskForm({ taskCreated }) {
  const { selectedtask, setSelectedtask } = useContext(StateContext);
  const create = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/tasks/`, {
      method: "POST",
      body: JSON.stringify({ task: selectedtask.task }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${cookie.get("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        alert("JWT Token not valid");
      }
    });
    setSelectedtask({ id: 0, task: "" });
    taskCreated();
  };
  const update = async (e) => {
    e.preventDefault();
    await fetch(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/tasks/${selectedtask.id}/`,
      {
        method: "PUT",
        body: JSON.stringify({ task: selectedtask.task }),
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
    setSelectedtask({ id: 0, task: "" });
    taskCreated();
  };
  return (
    <div>
      <form onSubmit={selectedtask.id !== 0 ? update : create}>
        <input
          type="text"
          value={selectedtask.task}
          onChange={(e) =>
            setSelectedtask({ ...selectedtask, task: e.target.value })
          }
        />
        <button type="submit">
          {selectedtask.id !== 0 ? "update" : "create"}
        </button>
      </form>
    </div>
  );
}
