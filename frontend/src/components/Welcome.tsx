import React, { FC } from "react";

export const Welcome: FC = () => {
    console.log('welcome')
    return (
        <div className="welcome">
            <h4>
                Welcome to Byte Check
            </h4>
        </div>
    )
}