import PostRender from '../../features/PostRender/PostRender';
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postRedux";
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {

    const posts = useSelector(state => getAllPosts(state));

    return (
        <div>
            <div className='d-flex justify-content-between mb-5'>
                <h1>All posts</h1>
                <Link to={'/post/add'}>
                <button type="button" class="btn btn-outline-info">Add post</button>
                </Link>
            </div>
            <div className='container'>
                <div className='row justify-content-between flex-wrap'>
                    {posts.map(post =>
                        <PostRender
                        key={post.id}
                        {...post} />
                        )}
                </div>
            </div>
        </div>
    );
};

export default Home;