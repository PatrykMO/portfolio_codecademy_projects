export const API_ROOT = 'https://www.reddit.com';


// Fetching subreddit posts from reddit
export const getSubredditPosts = async (subreddit) => {
  try {
    const response = await fetch(`${API_ROOT}${subreddit}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  } catch (err) {
    console.log(err);
  }
};

// Fetching subreddits from reddit

export const getSubreddits = async () => {
  try {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
  } catch (err) {
    console.log(err);
  }
};