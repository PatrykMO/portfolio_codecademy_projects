import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/sliceTopics";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: []
    },
    reducers: {
        addQuiz: (state, action) => {
            const { quizId, name, topicId, cardIds } = action.payload;
            state.quizzes[quizId] = {
                id: quizId,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            };
        }
    }
});

export const addQuizAddQuizId = quiz => {
    const { quizId, name, topicId, cardIds } = quiz;
    return (dispatch) => {
        dispatch(addQuiz(quiz));
        dispatch(addQuizId({ quizId: quizId, topicId: topicId}));
    }
}

// export selector
export const selectQuizzes = state => state.quizzes.quizzes;
// export actions and reducers
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;