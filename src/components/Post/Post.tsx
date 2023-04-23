import { useState } from "react";
import { useDispatch } from "react-redux";
import { postI } from "../../model/post.interface";
import { deletePost } from "../../redux/posts/slice";
import Button from "../../shared/Button/Button";
import CreatePost from "../CreatPost/CreatePost";
import "./Post.css";

const Post = ({ post }: { post: postI }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const toogleEditPost = () => {
    setIsShow(!isShow);
  };

  const dispatch = useDispatch();
  return (
    <div className="postBox">
      <h2 className="Title"> {post?.title}</h2>
      <p className="desc"> {post?.description}</p>
      <Button label={isShow ? "Cancel" : "Edit"} clickFun={toogleEditPost} />
      <Button
        label="Delete"
        clickFun={() => dispatch(deletePost(post as any))}
      />
      {isShow && <CreatePost postData={post} submitEdit={toogleEditPost} />}
    </div>
  );
};

export default Post;
