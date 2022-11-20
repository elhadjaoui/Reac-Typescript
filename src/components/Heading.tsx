type HeadinParams =
{
    children:string
}

export const Heading = (params:HeadinParams) =>
{
    return <h2>{params.children}</h2>
}