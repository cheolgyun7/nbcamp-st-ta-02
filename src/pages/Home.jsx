import React, { useState } from "react";
import { addTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";
import Detail from "./Detail";

const Home = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(title));
    dispatch(addTodo(body));
  };

  return (
    <>
      <form onSubmit={onsubmit}>
        <h1>Home입니다</h1>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit">제출하기</button>
      </form>
      <Detail />
    </>
  );
};

export default Home;
