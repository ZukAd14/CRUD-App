import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import PostRender from "../../features/PostRender/PostRender";
import { getAllPosts } from "../../../redux/postRedux";
import { Button } from "react-bootstrap";



const Category = () => {

    const { name } = useParams();
   
    
    const posts = useSelector(state => getAllPosts(state));
    const categoryData = posts.filter(post => post.category === name);
    console.log('name: ', name );
    console.log('cateDa: ', categoryData );
   
    //const check = () => {
       // if(categoryByName.catId === posts.categoryId)
       // return true;
   // }

    if(categoryData.length === 0) return (
        <div className="d-flex justify-content-center flex-column">
            <h1 className='text-center mb-5 mt-5'>This category is empty</h1>
            <Link className="text-center" to={'/categories'}><Button className="btn btn-primary">Go Back!</Button></Link>
        </div>
    )
    else

    return (
        <div className="container">
        <div className='row justify-content-between flex-wrap'>
         
        {categoryData.map(post => 
            <PostRender
                key={post.id}
                {...post} />
                )}
        <Link className="text-center mt-5" to={'/categories'}><Button className="btn btn-primary">Go Back!</Button></Link>
        </div>
        
        </div>
    );
};

export default Category;