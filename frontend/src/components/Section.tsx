import React, { FC } from 'react'
import { TextHome, About, Login, Signup } from './index'
import { Route } from 'react-router-dom';

export const Section: FC = () => {
    return (
        <section>
            <Route path='/' component={TextHome} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
        </section>
    )
}
