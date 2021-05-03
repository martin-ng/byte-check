import React, { useState, FC } from 'react'
import { Logo, Nav } from "./index"

export const Header: FC = () => {
    return (
        <header>
            <Logo />
            <Nav />
            <div className="menu">Menu</div>
        </header>
    )
}
