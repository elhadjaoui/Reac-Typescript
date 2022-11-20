import React from "react"

type OscarParams =
{
    children:React.ReactNode
}


export const Oscar = (props:OscarParams) =>
{
    return <div>{props.children}</div>
}