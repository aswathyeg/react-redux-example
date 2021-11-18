import { createSlice } from "@reduxjs/toolkit";// to create reducer in an easy way

const initialStateValue = { name: "", age: 0, email: "" }

export const userSlice = createSlice({ //all the information about the reducer
    name: "user",  //name of the state
    initialState: { value: initialStateValue },
    reducers: {//fuctions to change the the state


        login: (state, action) => {
            state.value = action.payload;// acces dispatch from Login

        },
        logout: (state) => {
            state.value = initialStateValue;

        }
    },

});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;