import * as React from 'react'
import './css/app.css'

const { useState } = React

export const App = () => {

    return (
        <div>
            <header>
                <div className="logo">
                    <h1>Byte Check</h1>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Login/Signup</a></li>
                </ul>
            </header>
            <section>

            </section>
        </div>
    )

}