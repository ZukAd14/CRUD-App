const initialState = {
    posts: [
        {
            id: '1',
            title: 'Post1',
            shortDescription: 'short description of the article',
            content: 'Main content',
            publishedDate: new Date('01-03-2023'),
            author: 'John Doe',
            category: 'Sport'
        },
        {
            id: '2',
            title: 'Post2',
            shortDescription: 'short description of the article',
            content: 'Main content',
            publishedDate: new Date('09-03-2023'),
            author: 'Mark Wahlberg',
            category: 'Movies'
        },
        {
            id: '3',
            title: 'Post3',
            shortDescription: 'short description of the article',
            content: 'Main content',
            publishedDate: new Date('07-04-2023'),
            author: 'Jimmy Hendrix',
            category: 'Sport'
        },
        {
            id: '4',
            title: 'Post4',
            shortDescription: 'short description of the article',
            content: 'Main content',
            publishedDate: new Date('11-05-2023'),
            author: 'Ezio Auditore Da Firenze',
            category: 'News'
        }
    ],
    categories: [
        {
            catId: '1',
            name: 'Sport'
        },
        {
            catId: '2',
            name: 'News'
        },
        {
            catId: '3',
            name: 'Movies'
        }
    ]
};

export default initialState;