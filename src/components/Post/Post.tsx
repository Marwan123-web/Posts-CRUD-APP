import Button from "../../shared/Button/Button";
import "./Post.css";
const Post = () => {
  return (
    <div className="postBox">
      <h2 className="Title"> post Tilte</h2>
      <p className="desc"> post Desc</p>
      <Button label="Edit" />
      <Button label="Delete" />
    </div>
  );
};

export default Post;
