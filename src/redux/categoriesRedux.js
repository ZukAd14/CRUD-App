

//selectors
export const getAllCategories = ({ categories }) => categories;
export const getPostByCategory = ({ posts }, catId) => posts.find(post => post.category === catId);
export const getFilteredPosts = ({ posts }, catId) => posts
.filter(post => post.category === catId);
//actions

//action creators

const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
            return statePart;
    };
};

export default categoriesReducer;