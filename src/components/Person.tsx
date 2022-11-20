type personprops = {
    name: {
        firstname:string
        lastname:string
    }
}

export const  Person = (param: personprops) => {
    return(<div>
        <h2>Welcome {param.name.firstname}  {param.name.lastname } </h2>
    </div>)
   
}


