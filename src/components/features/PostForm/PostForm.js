import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './PostForm.module.scss';
import { Button, Col, Form, Row } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [date, setDate] = useState(props.date || '');
    const [description, setDescription] = useState(props.description || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, date, description, content });
    };
    console.log('pro: ', props)
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
            <Button variant="primary" className="mt-4" type="submit">{actionText}</Button>
        </form>
    );
};

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionText: PropTypes.string.isRequired,
};

export default PostForm;