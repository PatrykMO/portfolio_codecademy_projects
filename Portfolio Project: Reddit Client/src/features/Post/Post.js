import React from 'react';
import './Post.css';
import Card from '../../components/Card';

function Post(props) {
    const {post} = props;

    return (
        <article key={post.id}>
            <Card>
                <div className='post-container'>
                    <div className='post-title'>
                        <h3 >{post.title}</h3>
                    </div>
                    <div className='post-image-container'>
                        <img src={post.url} alt='Reddit Post'/>
                    </div>
                    <div className='post-info'>
                        <p>Author: {post.author}</p>
                    </div>
                </div>
            </Card>
        </article>
    )
}

export default Post;