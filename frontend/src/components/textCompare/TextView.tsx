import React, { FC } from 'react'

type Props = {
    sameText: Array<string>,
    deletedOrAdded: Array<string>,
    status: string,
}

export const TextView: FC<Props> = ({ sameText, deletedOrAdded, status }) => {
    let lineContent: string = status === "deleted" ? "lineContentDel" : "lineContentAdd"

    // * .map() method does not iterate over undefined, hence a new array was utilized to do so * //
    const newDeletedOrAdded: (string | undefined)[] = [...deletedOrAdded]
    const newSame: (string | undefined)[] = [...sameText]

    return (
        <div className="textView">
            <div style={{ height: "50px" }}></div>
            <table className="textCompare" cellSpacing="0" cellPadding="0">
                <tbody>
                    <tr className={lineContent}>
                        <td>
                            {newSame.length <= newDeletedOrAdded.length
                                ? newDeletedOrAdded.map((word: string | undefined, index: number) => {
                                    if (word === undefined) {
                                        return <span key={index}>{newSame[index]} </span>;
                                    } else {
                                        return (
                                            <span key={index} className={status}>
                                                {newDeletedOrAdded[index]}{" "}
                                            </span>
                                        );
                                    }
                                })
                                : newSame.map((word: string | undefined, index: number) => {
                                    if (word === undefined) {
                                        return (
                                            <span key={index} className={status}>
                                                {newDeletedOrAdded[index]}{" "}
                                            </span>
                                        );
                                    } else {
                                        return <span key={index}>{newSame[index]} </span>;
                                    }
                                })}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}