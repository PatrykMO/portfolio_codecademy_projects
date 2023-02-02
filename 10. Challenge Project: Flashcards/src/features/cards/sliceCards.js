import { createSlice } from "@reduxjs/toolkit";

export const sliceCards = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const {cardId, front, back} = action.payload;
            state.cards[cardId] = {
                id: cardId,
                front: front,
                back: back
            }
        }
    }
});

// export selector
export const selectCards = state => state.cards.cards;
// export actions and reducer
export const { addCard } = sliceCards.actions;
export default sliceCards.reducer;

