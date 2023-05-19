import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editPost, getPostById } from "../../../redux/postRedux";
import PostForm from "../PostForm/PostForm";


const EditPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));
    
    const handleSubmit = post => {
        dispatch(editPost({ id: id, ...post  }));
        navigate('/');
    }

    if(!postData) return <Navigate to='/' />
    else
    return (
        <PostForm 
        action={handleSubmit} 
        actionText='Edit post' 
        id={id} 
        title={postData.title}
        author={postData.author}
        date={postData.publishedDate}
        description={postData.shortDescription}
        content={postData.content}
        />
    );
};

export default EditPostForm;