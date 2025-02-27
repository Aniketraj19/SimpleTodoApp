import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  return (
    <div>
      <input
        style={{ margin: 10, padding: 10 }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        style={{ margin: 10, padding: 10 }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setdescription(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("todo added");
          });
        }}
        style={{ margin: 10, padding: 10 }}
      >
        Add a todo
      </button>
    </div>
  );
}
