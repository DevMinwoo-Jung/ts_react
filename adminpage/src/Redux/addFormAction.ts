type post = {
  id: number;
  title: string;
  content: string;
};

const basicState: post[] = [
  { id: 0, title: "멋진신발", content: "멋진신발" },
  { id: 1, title: "멋진신발1", content: "멋진신발" },
  { id: 2, title: "멋진신발2", content: "멋진신발" },
  { id: 3, title: "멋진신발3", content: "멋진신발" },
  { id: 4, title: "멋진신발4", content: "멋진신발" },
];

// eslint-disable-next-line default-param-last
export function addFormAction(state = basicState, action: any): post[] {
  if (action.type === "addPost") {
    const checkPosts = state.find((element) => {
      return element.title === action.payload.title;
    });
    if (checkPosts) {
      alert("도배하면 안돼유!");
    } else {
      const copy = [...state];
      console.log(action.payload);
      copy.push(action.payload);
      return copy;
    }
  }
  if (action.type === "removePost") {
    const checkId = action.payload.id;
    const copy = [...state];
    return copy.filter((element) => element.id !== checkId);
  }
  return state;
}
