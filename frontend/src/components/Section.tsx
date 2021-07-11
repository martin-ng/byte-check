import React, { FC } from 'react'
import { TextHome, About, Login, Signup } from './index'
import { Route, Switch } from 'react-router-dom';

export const Section: FC = () => {
    return (
        <section>
            <Switch>
                <Route exact path='/' component={TextHome} />
                <Route path='/about' component={About} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
            </Switch>
        </section>
    )
}
