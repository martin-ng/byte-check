import React, { FC } from 'react'
import { About, Login, Signup } from './index'
import { Route } from 'react-router-dom';

export const Section: FC = () => {
    return (
        <section>
            <About />
            <Login />
            <Signup />
        </section>
    )
}
