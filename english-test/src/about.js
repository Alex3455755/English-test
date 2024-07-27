import { getData,SetData } from "./switch";
import { useEffect,useState } from "react";

function About() {
  const [items,SetItems] = useState([{name:""}]);
  useEffect(() => {
    SetItems(getData());
    SetData({});
  });
    return (
      <div className="App">
       <h1>{items[0].name}
       </h1>
      </div>
    );
  }


export default About;