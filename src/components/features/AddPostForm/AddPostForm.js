import { Button, Col, Form, Row } from "react-bootstrap";
import styles from './AddPostForm.module.scss';
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postRedux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddPostForm = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({title, author, publishedDate: date, shortDescription: description, content}));
        navigate('/');
    }
    return (
        
        <form className={styles.container} onSubmit={handleSubmit}>
            <h1>Add Post</h1>
            <Row>
                <Col lg={5}>
                    <Form.Group className="mb-2">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} required/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={5}>
                    <Form.Group className="mb-2">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Enter Author" value={author} onChange={e => setAuthor(e.target.value)} required/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={5}>
                    <Form.Group className="mb-2">
                        <Form.Label>Published</Form.Label>
                        <Form.Control type="text" placeholder="Enter Date" value={date} onChange={e => setDate(e.target.value)} required/>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-2">
                <Form.Label>Short description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Main content</Form.Label>
                <Form.Control as="textarea" placeholder="Enter Content" value={content} onChange={e => setContent(e.target.value)}></Form.Control>
            </Form.Group>
            <Button variant="primary" className="mt-4" type="submit">Add Post</Button>
        </form>
        
    );
};

export default AddPostForm;