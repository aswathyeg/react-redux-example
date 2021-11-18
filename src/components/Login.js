import React from "react";
import { useDispatch } from "react-redux" //to modify values of state 
import { login } from "./features/user";
import { logout } from "./features/user";

export default function Login() {
    const dispatch = useDispatch();
    return (
        <div>

            <button onClick={() => {
                dispatch(login({ name: "jhon", age: 30, email: "a@b.com" }))
            }}>Login</button>



            <button onClick={() => {
                dispatch(logout())
            }}>Logout</button>
        </div>
    )
}