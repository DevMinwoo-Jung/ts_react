/* eslint-disable react/button-has-type */
import { useDispatch } from "react-redux";

function PostLists({ post }) {
  const dispatch = useDispatch();

  function removePost() {
    dispatch({
      type: "removePost",
      payload: {
        id: post.id,
      },
    });
  }

  return (
    <div>
      <header>{post.title}</header>
      <span>{post.content}</span>
      <button onClick={removePost}>지우기</button>
    </div>
  );
}

export default PostLists;
