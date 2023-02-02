import { createSlice } from "@reduxjs/toolkit";

export const sliceTopics = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const {id, name, icon} = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            };
        },
        addQuizId: (state, action) => {
            const {quizId, topicId} = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

// selector
export const selectTopics = state => state.topics.topics;
// actions + reducers export
export const { addTopic, addQuizId } = sliceTopics.actions;
export default sliceTopics.reducer;
