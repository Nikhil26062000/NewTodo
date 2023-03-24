import {useState} from 'react';

export default function Testing() {
  const [names, setNames] = useState([]);

  const handleClick = () => {
    // 👇️ push to end of the state array\
    
    console.log(names);
  
    setNames(current => [...current,'nikhil']);

    console.log(names);

    
    // 👇️ spread an array into the state array
    // setNames(current => [...current, ...['Carl', 'Delilah']]);

    // 👇️ push to the beginning of the state array
    // setNames(current => ['Zoey', ...current]);
  };


  return (
    <div>
      <div>
        <button onClick={handleClick}>
          Push to state array
        </button>
      </div>

      {names.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element}</h2>
          </div>
        );
      })}
    </div>
  );
}