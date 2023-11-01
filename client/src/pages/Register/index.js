import React from "react";

function Register() {
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        password: ""
    })
    return (
        <div className="flex justify-center h-screen items-center bg-primary">
            <div className="bg-white p-5">
                <div className="flex flex-col p-5">
                    <h1 >
                        Blog-Register
                    </h1>
                    <input type="text" placeholder="Enter your name" value={user.name} onChange={(e) => {
                        setUser({ ...user, name: e.target.value })
                    }} />
                    <input
                        type="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                    />
                    <input
                        type="password"
                        placeholder="Your Password"
                        value={user.password}
                        onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                    />
                    <button className="bg-primary text-white"> Register </button>
                </div>
            </div>

        </div>
    )
}
export default Register;