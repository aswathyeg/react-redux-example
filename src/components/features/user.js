import {createSlice} from "@reduxjs/toolkit";// to create reducer in an easy way

 export const userSlice = createSlice({ //all the information about the reducer
 name:"user",  //name of the state
 initialState:{value:{name:"",age:0,email:""}},
 reducers:{//fuctions to change the the state
login:(state,action)=>{
    state.value=action.payload ;

},
 },              

});
export default userSlice.reducer;