import React, { FC, useState, ChangeEvent } from 'react'
import { TextView } from "./TextHomeIndex"
import { leastCommonSubsequence, printDifference } from "../../utils"

export const TextHome: FC = () => {

    const useInput = (initialValue: any) => {
        const [value, setValue] = useState<any>(initialValue)

        const handleChange = (event: any) => {
            setValue(event.target.value)
        }
        return [value, handleChange]
    }

    const [first, setFirst] = useInput('')
    const [second, setSecond] = useInput('')
    const [checking, setChecking] = useState<boolean>(false)
    const [comparison, setComparison] = useState<string[]>([])
    const [sameOne, setSameOne] = useState<string[]>([])
    const [deleted, setDeleted] = useState<string[]>([])
    const [sameTwo, setSameTwo] = useState<string[]>([])
    const [added, setAdded] = useState<string[]>([])

    const checkDifferences = (): void => {
        console.log('testing')

        setChecking(true)
        setComparison([])

        const dataOne: string = first.split(' ')
        const dataTwo: string = second.split(' ')

        let one: any = leastCommonSubsequence(dataOne, dataTwo)
        let finalData: Array<Array<string>> = printDifference(one, dataOne, dataTwo, dataOne.length, dataTwo.length)
        console.log('final', finalData)
    }

    return (
        <div className="text-container">

            <div className="text-input">
                <textarea placeholder="Your text here" onChange={setFirst} />
                <textarea placeholder="Your text here" onChange={setSecond} />
            </div>

            <button onClick={() => checkDifferences()}>Click</button>
        </div>
    )
}