import React from 'react';

// this example shows how to dynamically select a component to render.

const PhotoPost = ({ photoUrl }) => (
    <img src={photoUrl} />
)

const TextPost = ({ content }) => (
    <p>{content}</p>
)

const components = {
    photo: PhotoPost,
    text: TextPost
}

// this component determine whether to render a PhotoPost or TextPost, based on the asType prop.
const ShowPost = ({ asType, ...rest }) => {
    const PostComponent = components[asType];
    return <PostComponent {...rest} />;
}

// ...

export default render => {
    // posts array assumed to come from a database.
    const posts = [
        {
            id: 1,
            asType: 'text',
            content: 'This is a sample post with text contents'
        },
        {
            id: 2,
            asType: 'photo',
            photoUrl: 'http://via.placeholder.com/350x150'
        }
    ];

    render(
        <ul>
            {posts.map(({ id, ...otherPostProps }) => <ShowPost key={id} {...otherPostProps} />)}
        </ul>
    )
}