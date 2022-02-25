import React from "react";
import { useDispatch, useSelector } from "react-redux";

function AddForm() {
  const state = useSelector((state) => state);

  return (
    <form>
      <div>
        <span>
          제목: <input type="text" />
        </span>
        <span>
          내용: <input type="text" />
        </span>
      </div>
    </form>
  );
}

export default AddForm;
