
type list = {
     names : {
            first:string,
            last:string
     }[]
}

export const PersonList = (param:list) =>
{
        return(<div>
           {param.names.map(name => {
            return(
                <h2>{name.first} {name.last }</h2>
            )
           })}
        </div>)
}