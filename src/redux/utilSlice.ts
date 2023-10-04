import { CurrentTab, UtilInitialState } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: UtilInitialState = {
    currentTab: 'country',
    searchTerm: 'china',
};

const utilSlice = createSlice({
    name: 'util',
    initialState,
    reducers: {
        changeCurrentTtab: (state, { payload }: { payload: CurrentTab }) => {
            state.currentTab = payload;
        },

        setSearchTerm: (state, { payload }: { payload: string }) => {
            state.searchTerm = payload;
        },
    },
});

export const { changeCurrentTtab, setSearchTerm } = utilSlice.actions;
export default utilSlice.reducer;
