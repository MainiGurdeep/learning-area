import React, { useState } from "react";
import "./styles.css";
const url='https://jsonplaceholder.typicode.com/users';
function fetchdata (){
  fetch('https://jsonplaceholder.typicode.com/users')
.then( response=>response.json())
.then(json=>console.log(json));
}
function App() {
const[data,setdata]=useState('');
  const getUsers = () => {
  fetchdata();
  data.map((data)=>{
    <li>
      {data.name};
      </li>
  }   

  const sortList = () => {
      
    const sortedlist=data.sort((a,b)=>a.name.localeCompare(b.name));
      // sort the user list by name's length
      // on first click list will sorted in assending order
      // on second click list will be sorted in descending order
      // on third click default list will be rendered
      // on fourth click again start form step 1
  }
  
  return (
    <main>
      <h1>User List</h1>
      <div>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={sortList}>Sort list by name's length</button>
      </div>
      <ul>
        {sortedlist}    
      
      </ul>
    </main>
  )
}

export default App;
