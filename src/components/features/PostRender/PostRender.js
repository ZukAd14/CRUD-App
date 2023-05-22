import { Link } from 'react-router-dom';
import dateToStr from '../../../utils/dateToStr';





const PostRender = (props) => {

   
 
    
  
    return (
        <div className='col-md-4 col-sm-6 border border-secondary rounded py-4 mb-3'>
            <h4 className='mb-3' >{props.title}</h4>
            <p><strong>Author:</strong> {props.author}</p>
            <p><strong>Published:</strong> {dateToStr(props.publishedDate)}</p>
            <p><strong>Category:</strong> {props.category}</p>
            <p>{props.shortDescription}</p>
            <Link to={`/post/${props.id}`}>
                <button type="submit" className="btn btn-primary">Read more</button>
            </Link>
        </div>
        /*<Row>
            {posts.map(post => 
                <Col key={post.id} className='col-md-4 col-sm-6 border border-secondary rounded py-4 mb-3'>
                    <h4 className='mb-3'>{post.title}</h4>
                    <p><strong>Author:</strong> {post.author}</p>
                    <p><strong>Published:</strong> {dateToStr(post.publishedDate)}</p>
                    <p><strong>Category:</strong> {post.category}</p>
                    <p>{props.shortDescription}</p>
                    <Link to={`/post/${props.id}`}>
                        <button type="submit" className="btn btn-primary">Read more</button>
                    </Link>
                </Col>
                )}
        </Row>*/
    );
};

export default PostRender;