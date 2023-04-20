import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import "./CreatePost.css";
const CreatePost = () => {
  return (
    <div className="CreatePost">
      <form>
        <Input placeholder="Enter Post Title" />
        <Input placeholder="Enter Post Description" />
        <Button label="Add Post" />
      </form>
    </div>
  );
};

export default CreatePost;
