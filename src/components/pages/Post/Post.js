import { Link, Navigate, useParams } from 'react-router-dom';
import styles from './Post.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById, removePost } from '../../../redux/postRedux';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


const Post = props => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));
   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRemove = e => {
        e.preventDefault();
        dispatch(removePost(postData.id));
    }

    if(!postData) return <Navigate to='/' />
    else
    return (
        <div className={styles.container}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to remove this post?</Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Return
                    </Button>
                    <Button variant='danger' onClick={handleRemove}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='d-flex justify-content-between'>
                <h1>{postData.title}</h1>
                <div>
                    <Link to={`../post/edit/${id}`} >
                        <button type="button" className="btn btn-outline-info">Edit</button>
                    </Link>
                    <button type="button" className="btn btn-outline-danger ms-2" onClick={handleShow}>Delete</button>
                </div>
            </div>
            <div>
                <p className='mt-4 mb-0'><strong>Author: </strong>{postData.author}</p>
                <p className='mt-0 pt-0 mb-4'><strong>Published: </strong>{postData.publishedDate}</p>
                <p>{postData.content}</p>
            </div>
        </div>
    );
};

export default Post;