import * as React from 'react'
import './styles.css'

const { useState } = React

export const App = () => {
    const [count, setCount] = useState(0)

    return <h1>React TypeScript Webpack Template {process.env.NODE_ENV}
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}></button>
    </h1>

}