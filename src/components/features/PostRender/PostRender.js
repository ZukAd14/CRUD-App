import { Link } from 'react-router-dom';
import styles from './PostRender.module.scss';


const PostRender = (props) => {

    

    return (
        <div className='col-md-4 col-sm-6 border border-secondary rounded py-4 mb-3'>
            <h4 className='mb-3' >{props.title}</h4>
            <p><strong>Author:</strong> {props.author}</p>
            <p><strong>Published:</strong> {props.publishedDate}</p>
            <p>{props.shortDescription}</p>
            <Link to={`/post/${props.id}`}>
                <button type="button" class="btn btn-primary">Read more</button>
            </Link>
        </div>
    );
};

export default PostRender;