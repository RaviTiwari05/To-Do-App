import { useEffect, useState} from "react";
import ToDo from "./components/ToDo";
import { addToDO, getAllToDo } from "./utils/HandleApi";


function App() {

 const [toDo, setToDo] = useState([])
 const [text, setText] = useState("")

useEffect(() => {
  getAllToDo(setToDo)
}, [])

  return (
    <div className="App">
      
<div className="container">

<h1>To Do App</h1>

<div className="top">
  <input 
  type="text" 
  placeholder="Add ToDos..."
  value={text}
  onChange={(e) => setText(e.target.value)}
  />

<div className="add" onClick={addToDO}>Add</div>
</div>

<div class="list-group">

{toDo.map((item) => <ToDo key={item._id} text={item.text} />)}

</div>

</div>

    </div>
  );
}

export default App;
