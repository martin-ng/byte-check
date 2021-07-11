import React, { FC } from "react"
import { NavLink } from "react-router-dom"

export const Nav: FC = () => {
    return (
        <ul>
            <li>
                <NavLink className="nav-home" to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className="nav-about">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/login">
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink to="/signup">
                    Signup
                </NavLink>
            </li>
        </ul>
    )
}