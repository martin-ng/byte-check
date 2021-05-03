import React, { FC } from 'react'

type Props = {
    sameText: Array<string>,
    deletedOrAdded: Array<string>,
    status: string,
}

export const TextView: FC<Props> = ({ sameText, deletedOrAdded, status }) => {
    let lineContent: string = status === "deleted" ? "lineContentDel" : "lineContentAdd"
    console.log("same", sameText)
    return (
        <div className="textView">
            <div style={{ height: "100px" }}></div>
            <table className="textCompare" cellSpacing="0" cellPadding="0">
                <tbody>
                    <tr className={lineContent}>
                        <td>
                            {sameText.length <= deletedOrAdded.length
                                ? deletedOrAdded.map((word: string, index: number) => {
                                    if (word === undefined) {
                                        return <span key={index}>{sameText[index]} </span>;
                                    } else {
                                        return (
                                            <span key={index} className={status}>
                                                {deletedOrAdded[index]}{" "}
                                            </span>
                                        );
                                    }
                                })
                                : sameText.map((word: string, index: number) => {
                                    if (word === undefined) {
                                        return (
                                            <span key={index} className={status}>
                                                {deletedOrAdded[index]}{" "}
                                            </span>
                                        );
                                    } else {
                                        return <span key={index}>{sameText[index]} </span>;
                                    }
                                })}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}