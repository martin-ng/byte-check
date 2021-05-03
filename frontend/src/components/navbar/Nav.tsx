import React, { FC } from "react"

export const Nav: FC = () => {
    return (
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Login/Signup</a></li>
            <li className="close">X</li>
        </ul>
    )
}