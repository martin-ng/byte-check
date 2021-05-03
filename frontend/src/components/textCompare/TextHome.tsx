import React, { FC, useState, ChangeEvent } from 'react'
import { TextInput } from "./TextHomeIndex"

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


    const handleInputChange = (event: any) => {
        event.preventDefault()
    }

    return (
        <div>
            {/* <TextInput />
             */}
            {/* <input placeholder="first" type="text" value={first} onChange={setFirst}></input> */}
            <input placeholder="second" type="text" value={second} onChange={setSecond}></input>

        </div>
    )
}