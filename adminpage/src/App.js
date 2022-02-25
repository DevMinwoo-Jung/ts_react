import AddForm from "AddForm/AddForm";
import "./App.css";
import { useSelector } from "react-redux";
import PostLists from "PostLists/PostLists";

function App() {
  const state = useSelector((state) => state);

  const postLists = [...state.addFormAction];

  return (
    <div>
      초특가 야놀자
      <AddForm />
      {postLists.map((post) => (
        <PostLists key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
