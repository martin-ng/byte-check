import React, { FC, useState, ChangeEvent } from 'react'
import { TextView, Stats } from "./TextHomeIndex"
import { Welcome } from "../index"
import { longestCommonSubsequence, printDifference } from "../../utils"
import './textCompare.css'

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
    const [sameOne, setSameOne] = useState<string[]>([])
    const [deleted, setDeleted] = useState<string[]>([])
    const [sameTwo, setSameTwo] = useState<string[]>([])
    const [added, setAdded] = useState<string[]>([])
    const [deletedLength, setDeletedLength] = useState<number>(0)
    const [addedLength, setAddedLength] = useState<number>(0)

    const countDiff = (array: string[]) => {
        let count: number = 0
        for (let i: number = 0; i < array.length; i++) {
            if (array[i] !== undefined) {
                count++
            }
        }
        return count
    }

    const checkDifferences = (): void => {

        setChecking(true)

        const dataOne: string = first.split(' ')
        const dataTwo: string = second.split(' ')

        let one: any = longestCommonSubsequence(dataOne, dataTwo)
        let finalData: Array<Array<string>> = printDifference(one, dataOne, dataTwo, dataOne.length, dataTwo.length)
        let delLength: number = countDiff(finalData[1])
        let addLength = countDiff(finalData[3])

        setSameOne(finalData[0])
        setDeleted(finalData[1])
        setSameTwo(finalData[2])
        setAdded(finalData[3])
        setDeletedLength(delLength)
        setAddedLength(addLength)
    }


    // * This is a temporary fix * //
    const clearAll = (): void => {
        window.location.reload(false)
    }

    return (
        <div className="content-container">
            {!checking && <Welcome /> ? (
                <Welcome />) : (
                <div>

                    <div className="text-view-container">
                        <TextView sameText={sameOne} deletedOrAdded={deleted} status="deleted" />
                        <TextView sameText={sameTwo} deletedOrAdded={added} status="added" />
                    </div>
                    <div className="stats">
                        <Stats count={deletedLength} status={"deleted"} />{" "}
                        <Stats count={addedLength} status={"added"} />
                    </div>
                </div>
            )}

            <div className="text-input-container">
                <textarea placeholder="Your text here" onChange={setFirst} />
                <textarea placeholder="Your text here" onChange={setSecond} />
            </div>

            <div className="button-container">
                <div className="button">
                    <button onClick={() => checkDifferences()}>Click</button>
                </div>
                <div className="button">
                    <button onClick={() => clearAll()}>Clear All</button>
                </div>
            </div>
        </div>
    )
}