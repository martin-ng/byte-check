import React, { FC, useState, ChangeEvent } from 'react'
import { TextView } from "./TextHomeIndex"


export const TextHome: FC = () => {

    const useInput = (initialValue: any) => {
        const [value, setValue] = useState<any>(initialValue)

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value)
        }
        return [value, handleChange]
    }

    const [first, setFirst] = useInput('')
    const [second, setSecond] = useInput('')
    const [checking, setChecking] = useInput(false)
    const [comparison, setComparison] = useInput([])
    const [sameOne, setSameOne] = useInput([])
    const [deleted, setDeleted] = useInput([])
    const [sameTwo, setSameTwo] = useInput([])
    const [added, setAdded] = useInput([])


    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
    }

    return (
        <div className="text-container">

            <div className="text-input">
                <textarea value={first} placeholder="Your text here" onChange={setFirst} />
                <textarea value={second} placeholder="Your text here" onChange={setSecond} />

            </div>

            <button onClick={ }>Click</button>
        </div>
    )
}