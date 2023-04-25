import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postI } from "../../model/post.interface";
import { addPost, editPost } from "../../redux/posts/slice";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import "./CreatePost.css";
const CreatePost = ({
  postData,
  submitEdit,
}: {
  postData?: postI;
  submitEdit?: Function;
}) => {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.posts.items);

  const [post, setPost] = useState<postI>(
    postData || {
      id: "",
      title: "",
      description: "",
    }
  );

  const updatePostData = (inputID: string, value: string) => {
    setPost({
      ...post,
      id: `${postData?.id || posts?.length}`,
      [inputID]: value,
    });
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    e.target.reset();

    if (postData) {
      dispatch(editPost(post as any));
      submitEdit && submitEdit();
    } else {
      dispatch(addPost(post as any));
      setPost({ id: "", title: "", description: "" });
    }
  };

  return (
    <div className="CreatePost">
      <form onSubmit={submitForm}>
        <Input
          placeholder="Enter Post Title"
          id="title"
          name="title"
          changeFun={(value: string) => updatePostData("title", value)}
          value={post.title}
        />
        <Input
          placeholder="Enter Post Description"
          id="description"
          name="description"
          changeFun={(value: string) => updatePostData("description", value)}
          value={post.description}
        />
        <Button label={postData ? "Edit Post" : "Add Post"} type="submit" />
      </form>
    </div>
  );
};

export default CreatePost;
