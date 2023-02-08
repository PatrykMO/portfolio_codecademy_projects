import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import { fetchSubreddits, selectSubreddits } from '../../store/subRedditSlice';
import './Subreddits.css';
import {setSelectedSubreddit, selectSelectedSubreddit} from '../../store/redditSlice';


const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <Card className="subreddit-card">
      <h2>sub<span>REDDIT</span>ts</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            className={`${selectedSubreddit === subreddit.url && `selected-subreddit`}`}
          >
            <button
              type="button"
              onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
            >
              <img
                src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`}
                alt={`${subreddit.display_name}`}
                className="subreddit-icon"
                style={{ border: `3px solid ${subreddit.primary_color}` }}
              />
              <div className='subbreddit-name-subs-container'>
                  <div className='subreddit-name'>
                    {subreddit.display_name}
                  </div>
                  <div className='subreddit-subs'>
                    {(subreddit.subscribers / 1000000).toFixed(3)} mln subscribers
                  </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Subreddits;
