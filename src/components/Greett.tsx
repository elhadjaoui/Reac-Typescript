type parameters =
    {
        name: string
        messageCount?:number // optional field
        isLoggedIn:boolean
    }

export const Greet = (par: parameters) => {
    const {messageCount = 0} = par
    return (

        <div><h2> {par.isLoggedIn ? `welcome ${par.name} you have ${messageCount} messages` : "hello guest"}  </h2></div>
    );
}