
import './App.css';
import {useState} from "react"

function App() {
 const [input,setInput] = useState("")
  // console.log(input)

const calculate=()=>{
  console.log(eval(input))
  // let value;
  // let res=0;
  // if(input.includes("+")){
  //   value = input.split("+")
  //   for(let i=0;i<value.length;i++){
  //     res = res + parseFloat(value[i])
  //   }
  // }
  // if(input.includes("-")){
  //   value = input.split("-")
  //   res = parseFloat(value[0]) - parseFloat(value[1])
  // }
  // if(input.includes("*")){
  //   value = input.split("*")
  //   res = 1
  //   for(let i=0;i<value.length;i++){
  //     res = res * parseFloat(value[i])
  //   }
  // }
  // if(input.includes("/")){
  //   value = input.split("/")
  //     res = parseFloat(value[0]) / parseFloat(value[1])
  // }
  setInput(eval(input))
  console.log(input)
  // console.log(5-0)
}

  return (
    <div className="App">
      <header className="App-header">
     
        <div className="calc">
        <h2>Calculator</h2>
          <div  className="inputClass">
            <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input} maxLength="10"></input>
            <button onClick={()=>{setInput("")}}>C</button>
          </div>
          <div>
            <button onClick={()=>{setInput(input+"1")}}>1</button>
            <button onClick={()=>{setInput(input+"2")}}>2</button>
            <button onClick={()=>{setInput(input+"3")}}>3</button>
            <button onClick={()=>{setInput(input+"/")}}>/</button>
          </div>
          <div>
            <button onClick={()=>{setInput(input+"4")}}>4</button>
            <button onClick={()=>{setInput(input+"5")}}>5</button>
            <button onClick={()=>{setInput(input+"6")}}>6</button>
            <button onClick={()=>{setInput(input+"-")}}>-</button>
          </div>
          <div>
            <button onClick={()=>{setInput(input+"7")}}>7</button>
            <button onClick={()=>{setInput(input+"8")}}>8</button>
            <button onClick={()=>{setInput(input+"9")}}>9</button>
            <button onClick={()=>{setInput(input+"+")}}>+</button>
          </div>
          <div>
            <button onClick={()=>{setInput(input+".")}}>.</button>
            <button onClick={()=>{setInput(input+"0")}}>0</button>
            <button onClick={calculate}>=</button>
            <button onClick={()=>{setInput(input+"*")}}>*</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
