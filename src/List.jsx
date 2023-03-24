import React,{useState} from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const List =(props)=>{

  const [line ,setLine] = useState(false);
  const cutIt = () =>{
    setLine(true);
  }
    return(
        <>
             <div className="list-group">
                <div className="dlt" onClick={cutIt}> 
                <DeleteForeverIcon />
                </div>
                <div>
                  <li style={{textDecoration: line ? 'line-through':'none' }} className="lst">{props.val}</li>
                </div>
              </div>
        </>
    )
};

export default List;