import * as React from 'react'
import './css/app.css'
import { Header, Section } from './components/index'

const { useState } = React

export const App = () => {

    return (
        <div>
            <Header />
            <Section />
        </div>
    )

}