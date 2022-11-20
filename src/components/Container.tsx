import React from "react"

type ContainerParams = {
    styles: React.CSSProperties
}

export const Container = (params:ContainerParams) =>
{
    return (

        <div style={params.styles}>Text content goes here</div>
    )
}