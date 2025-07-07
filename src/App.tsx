
import './App.css'

type Person ={
  name: string;
  age?: number;
}

let person: Person = {
  name : "mateo",
  age : 20,
};

let lotsOfPeople: Person[];

let printName : (name: string) => never;
// function printName (name: string){
//   console.log(name);
// }

// printName("Mateo");


function App() {

  return (
    <>

      <h1>Hello World</h1>
      
    </>
  )
}

export default App
