import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export enum colorSchemes {
    light = 'light',
    dark = 'dark',
    system = 'system'
}

const initialState = {
    colorScheme: colorSchemes.system
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setThemeMode: (state, action: PayloadAction<colorSchemes>) => {
            state.colorScheme = action.payload
        }
    }
});

export const {setThemeMode} = themeSlice.actions;

export default themeSlice.reducer;