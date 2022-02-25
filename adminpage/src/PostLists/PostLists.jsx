function PostLists({ post }) {
  return (
    <div>
      <header>{post.title}</header>
      <span>{post.content}</span>
    </div>
  );
}

export default PostLists;
