import { configureStore } from "@reduxjs/toolkit";
import topics from '../features/topics/sliceTopics';

export default configureStore({
  reducer: {
    topics: topics
  },
});
