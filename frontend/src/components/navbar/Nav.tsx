import React, { FC } from "react"
import { NavLink } from "react-router-dom"

export const Nav: FC = () => {
    return (
        <ul>
            <li>
                <NavLink exact to="/home" className="nav-home">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/about" className="nav-about">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/login">
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/signup">
                    Signup
                </NavLink>
            </li>
        </ul>
    )
}