import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './PostForm.module.scss';
import { Button, Col, Form, Row } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';



const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.date || '');
    const [shortDescription, setShortDescription] = useState(props.description || '');
    const [content, setContent] = useState(props.content || '');
    const [category, setCategory] = useState(props.category || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    

    
    const categories = useSelector(getAllCategories);
    //console.log('categoryId(state): ', categoryId)
    //console.log('categoryName(state): ', categoryName);
    //console.log('cID(const): ', cID);
    //console.log('cName(const): ', cName)
    //console.log('cID.catId(const): ', cID.catId);

    
    const handleSubmit = () => {
        setContentError(!content)
        setDateError(!publishedDate)
        if(content && publishedDate){
            action({ title, author, publishedDate, shortDescription, content, category });
        }
    };
    
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    //console.log('pro: ', props, props.date)
    return (
        <form className={styles.container} onSubmit={validate(handleSubmit)}>
            <h1>Add Post</h1>
            <Row>
                <Col lg={5}>
                    <Form.Group className="mb-2">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                        {...register("title", { required: true, minLength: 3, maxLength: 30 })}
                        type="text" 
                        placeholder="Enter title" 
                        value={title} 
                        onChange={e => setTitle(e.target.value)} />
                        {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min 3)</small>}
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={5}>
                    <Form.Group className="mb-2">
                        <Form.Label>Author</Form.Label>
                        <Form.Control 
                        {...register("author", { required: true, minLength: 3 })}
                        type="text" 
                        placeholder="Enter Author" 
                        value={author} 
                        onChange={e => setAuthor(e.target.value)} />
                        {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min 3)</small>}
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={5}>
                    <Form.Group className="mb-2">
                        <Form.Label>Published</Form.Label>
                        <DatePicker dateFormat="MM/dd/yyyy" placeholder="Enter Date" selected={publishedDate} onChange={(date) => setPublishedDate(date)}/>
                        {dateError && <small className="d-block form-text text-danger mt-2">Pick up a date</small>}
                    </Form.Group>
                </Col>
            </Row>
            <Form.Select aria-label='Default select example' onChange={e => setCategory(e.target.value)} >
                <option hidden >{category || 'Select Category'} </option>
                {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
            </Form.Select>
            <Form.Group className="mb-2">
                <Form.Label>Short description</Form.Label>
                <Form.Control 
                {...register("shortDescription", { required: true, minLength: 20 })}
                as="textarea" 
                placeholder="Enter description" 
                value={shortDescription} 
                onChange={e => setShortDescription(e.target.value)}/>
                {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Short Description is too short (min 20)</small>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Main content</Form.Label>
                <ReactQuill theme='snow' value={content} onChange={setContent} />
                {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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