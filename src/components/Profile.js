import { useSelector } from "react-redux"; //to accessing values over states 

export default function Profile() {
    const user = useSelector((state) => state.user.value)
    const themeColor = useSelector((state) => state.theme.value)
    const backgroundColor = useSelector((state) => state.background.value)
    return (
        <div style={{color:themeColor ,background:backgroundColor}}>
            <h1>Profile Page</h1>
            <p>
                Name:{user.name}
            </p>
            <p>
                Age:{user.age}
            </p>
            <p>
                Email:{user.email}
            </p>
        </div>
    )
}