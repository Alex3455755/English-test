
import './App.css';
import About from './about';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
/* import { getData, SetData } from './switch'; */
import React, { useState } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

let data = [];

function Main(){
  const [page,SetPage] = useState("Default");

function switchPage(){
  switch(page){
    case "Default":
      return <DefaultPage callback={SetPage} />;
    case "List":
      return <ListPage />;
    default:
      return ;
  }
}

  return(
    <div className="App">
      {switchPage()}
    </div>
  );
}

function ListPage(){
  console.log(data);
  return(
    <div>
       <h1>{data[0].name}
       </h1>
      </div>
  )
}



function DefaultPage(props){
  return(
    <div>
      <h2>Введите слова</h2>
      <textarea>

      </textarea>
      <button onClick={() =>{
        data.push({name: "Jhon"})
        props.callback("List");
      }}>Начать тест</button>
    </div>
  );
}


export default App;
