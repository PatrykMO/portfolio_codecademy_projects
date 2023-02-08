import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Main.css'
import Post from '../Post/Post';
import { fetchPosts, selectFilteredPosts, setSearchTerm } from '../../store/redditSlice';

function Main() {
    const reddit = useSelector((state) => state.reddit);
    const { searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
      }, [selectedSubreddit, dispatch]);
    
    if (posts.length === 0) {
        return (
          <div className="error">
            <h2>Error"{searchTerm}"</h2>
            <button type="button" onClick={() => dispatch(setSearchTerm(''))}>
              Go home
            </button>
          </div>
        );
    }
    
    return (
        <>
             {posts.map((post) => (
                <Post 
                    key={post.id}
                    post={post}
                />
            ))}
        </>
    )
}

export default Main;