
import React, { useState } from 'react';
import './App.css';
import JSONDATA from './MOCK_DATA.json'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  function handleChange(event){
      const searchInput = event.target.value;
      setSearchTerm(searchInput);
  }
  return (
    <div className="App">
      <input type='text' placeholder='search...' onChange={handleChange} />
      {JSONDATA.filter((val)=>{
        if (searchTerm === ''){
          return val
        }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      }).map((val, key)=>{
        return (
        <div className='user' key={key}>
          <p>{val.first_name}</p>
          
          </div>
          )
        
      })}
    </div>
  );
}

export default App;
