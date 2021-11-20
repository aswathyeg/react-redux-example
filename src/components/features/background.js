import{createSlice} from  "@reduxjs/toolkit";
const initialStateValue="";
export const backgroundSlice=createSlice({
    name:"background",
    initialState:{value:initialStateValue},
    reducers:{
        changebackGround:(state,action)=>{
          state.value=action.payload  

        }
    }

})
export const {changebackGround}=backgroundSlice.actions;
export default backgroundSlice.reducer;