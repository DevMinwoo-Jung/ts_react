/* eslint-disable react/button-has-type */
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

function AddForm() {
  const titleRef = useRef();
  const contentRef = useRef();

  const dispatch = useDispatch();

  function addPost(e) {
    e.preventDefault();
    dispatch({
      type: "addPost",
      payload: {
        id: Math.random(),
        title: titleRef.current.value,
        content: contentRef.current.value,
      },
    });
    titleRef.current.value = "";
    contentRef.current.value = "";
  }

  return (
    <form>
      <div>
        <span>
          제목: <input ref={titleRef} type="text" />
        </span>
        <span>
          내용: <input ref={contentRef} type="text" />
        </span>
      </div>
      <button onClick={addPost}>글쓰기</button>
    </form>
  );
}

export default AddForm;
