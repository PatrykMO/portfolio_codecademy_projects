import React from 'react';
import Header from './features/Header/Header';
import Main from './features/Main/Main';
import Subreddits from './features/Subreddits/Subreddits';

function App() {
  return (
    <>
      <Header/> 
      <div className='subreddit'>
        <Subreddits />
      </div>
      <div className='main'>
        <Main/>
      </div>
    </>
  );
}

export default App;
