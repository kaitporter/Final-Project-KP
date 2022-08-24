import { Link } from "react-router-dom"
// import styled from "styled-components"

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Hiker Specs</h1>
                </Link>
                <nav>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                        <Link to="/myprofile">My Profile</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar