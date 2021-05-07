import React, { FC } from 'react'

type Props = {
    count: number,
    status: string
}

export const Stats: FC<Props> = ({ count, status }) => {
    const divType: string = status === "deleted" ? "removedDiv" : "addDiv";
    const addOrRemoved: string = status === "deleted" ? "removed" : "additions";
    const countType: string = status === "deleted" ? "Removals" : "Additions";
    const negOrPos: string = status === "deleted" ? "-" : "+";

    return (
        <div>
            <div className={divType}>
                <em className={addOrRemoved}>{negOrPos}</em>
                <span className="statsClass">
                    {count} {countType}
                </span>
            </div>
        </div>
    );
}