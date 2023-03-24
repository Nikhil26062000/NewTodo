import React,{useState} from "react";
import List from './List';
import "./index.css";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

const App = () => {

    

    const [inputVal , setValue] = useState();
    const [arr,setArr] = useState([]);

    const Status = (event) =>{
        setValue(event.target.value);
    }

  const Adding = () => {
    //initially oldarr and arr are empty see line 12(arr empty hai && oldarr v empty hai)--------------------------------------------------------
    //when first time user is clicking button line 24 and 25 are showing empty arr becz they are emplty phle se hi i.e oldarr and arr empty hai...
    //and when user first time writing any thing wo input val me jayga(line 26) and line 27 k wjh se wo return hokr arr me chla jayga but hum usko next time jab kuch likhega user tabhi dekh skte h kyuki next time wapis loop me line no 24 25 chalega and tabhi it will show us the purana data................................................................

   setArr((oldarr)=>{
      console.log(oldarr);
      console.log(arr);
      console.log("input value is"+inputVal);
      return [...oldarr, inputVal];
    })
    


  };

  return (
  
    <>
      <div className="container">
        <h1>ToDo List</h1>
        <div className="inputPlace">
          <input type="text" placeholder="Add an Item" 
            onChange={Status}
            value={inputVal}
          />
          <Button onClick={Adding} className="btn" size="small">
            <AddIcon />
          </Button>
        </div>

        <div>
         {  arr.map((item,index)=>{
            return(
             <List val={item} 
             key = {index}/>
            );
           })}
        </div>
      </div>
    </>
  );
};

export default App;
