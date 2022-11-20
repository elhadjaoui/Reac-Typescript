import './App.css';
// import { Person } from "./components/Person"
// import { PersonList } from "./components/PersonList"
// import { Greet } from "./components/Greett"
// import { Status } from "./components/Status"
// import { Heading } from "./components/Heading"
// import { Oscar } from "./components/Oscar"
// import { Button } from "./components/Button"
// import { Container } from "./components/Container"
// import { LoggedIn } from "./components/State/LoggedIn"
// import { User } from "./components/State/User"
import {Counter} from "./components/Reducer/Counter"
import {Box} from "./components/context/Box"
import {User} from "./components/context/User"
import {UserContexProvider} from "./components/context/UserContext"

function App() {

  const props = {
    firstname: 'Mohamed',
    lastname: "El hadjaoui"
  }
  const name_list = [
    {
      first: 'simo',
      last: 'hadja'
    },
    {
      first: 'simo1',
      last: 'hadja1'
    },
    {
      first: 'simo2',
      last: 'hadja2'
    },
    {
      first: 'simo3',
      last: 'hadja3'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        {/* <code> < Greet name='Mohamed' isLoggedIn={true} /></code> */}
       {/* <Person name={props}/> */}
       {/* <PersonList names={name_list}/> */}
        {/* <Status message='success'></Status> */}
        {/* <Oscar >
          <Heading >Oscar goes to me </Heading>
        </Oscar> */}
        {/* <Button  handleClick={(event, id)=>
        {
          console.log("Button Clicked", event, id)
        }}> Clik me</Button> */}
        {/* <Container styles={{border: '10px solid black', padding:'10rem'}}></Container> */}

        {/* <LoggedIn></LoggedIn> */}
        {/* <User name='Mohamed' email='achra-2060@outlook.fr'></User> */}
        {/* <Counter ></Counter> */}
        {/* <Box></Box> */}
        <UserContexProvider>

        <User name='mohamed' email='achraf-2060@outlook.fr'></User>
        </UserContexProvider>
      </header>
    </div>
  );
}

export default App;
