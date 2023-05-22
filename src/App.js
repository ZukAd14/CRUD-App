import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';
import About from './components/pages/About/About';
import WrongRoute from './components/pages/WrongRoute/WrongRoute';
import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import Categories from "./components/pages/Categories/Categories";
import Category from "./components/pages/Category/Category";

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/add' element={<PostAdd />} />
        <Route path='/post/edit/:id' element={<PostEdit />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories /> } />
        <Route path='/categories/:name' element={<Category /> } />
        <Route path='*' element={<WrongRoute />} />
      </Routes>
      <Footer />
    </Container>
  );
};
export default App;
