 const loggedReducer=(state=false,action)=>{
    switch (action.type){
    case 'isSignIn': 
    return !state;
    default:
        return state;
    }
};
export default loggedReducer;