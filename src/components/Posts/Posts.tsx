import { useSelector } from "react-redux";
import { postI } from "../../model/post.interface";
import Post from "../Post/Post";
import "./Posts.css";
const Posts = () => {
  const posts = useSelector((state: any) => state.posts.items);

  return (
    <div className="postsBox">
      {posts?.map((post: postI) => (
        <Post post={post} key={post?.id} />
      ))}
    </div>
  );
};

export default Posts;
