
import {useState} from 'react'; 

function CounterComponent (){
    let [counter , setCounter] = useState(0);
const addValue = () => {
    if(counter <=19){
        setCounter(counter + 1);
    }
}
const removeValue = () => {
    if(counter >=1){
        setCounter(counter -1);
    }
}

  return ( 
    <>
  <div style={{justifyContent:"center", textAlign:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>   
  <h1>Ahmed Code</h1>
  <h2>Counter is {counter}</h2>
  <button onClick={addValue}>Add Counter +{counter}</button>
  <br/>
  <button onClick={removeValue}>Decrease Counter -{counter}</button>
  </div>
    </>  
  );
}

export default CounterComponent