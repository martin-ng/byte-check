import * as React from 'react'
import './css/app.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, Section } from './components/index'

export const App = () => {

    return (
        <Router>
            <div>
                <Header />
                <Section />
            </div>
        </Router>
    )

}