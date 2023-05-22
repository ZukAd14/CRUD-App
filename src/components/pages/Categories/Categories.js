import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import styles from './Categories.module.scss';

const Categories = () => {

    const categories = useSelector(getAllCategories);

    return (
        <ListGroup >
            {categories.map(cat => (
               <ListGroup.Item className={styles.list} key={cat.id}>
                    <Link to={`/categories/${cat.name}`}>{cat.name}</Link>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default Categories;