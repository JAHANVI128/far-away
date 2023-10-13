import { useState } from "react";

const initialItems = [
  { 
    id: 1, 
    description: "Passports", 
    quantity: 2, 
    packed: false 
  },{ 
    id: 2, 
    description: "Socks", 
    quantity: 12, 
    packed: true
  },{ 
    id: 3, 
    description: "Charger", 
    quantity: 1, 
    packed: false 
  }
];

export default function App(){
  return (
    <div className="app">
      <Logo/>
      <Form/>
      <PackingList/>
      <Stats/>
    </div>
  )
}

function Logo(){
  return <h1>🌴 Far Away 💼</h1>
}

function Form(){
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e){
    e.preventDefault();
    // console.log(e);
    
    if(!description || !quantity) return; // validation
    
    const newItem = {
      description,
      quantity,
      packed : false,
      id : Date.now()
    };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {/* <option value="" disabled selected>Select an item...</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option> */}
        {Array.from({length : 20} , (_,i) => i + 1).map((num) => (<option value={num} key={num}>{num}</option>))}
      </select>
      <input type="text" placeholder="Item Name" value={description} onChange={(e) => {
        // console.log(e.target);
        setDescription(e.target.value)}}></input>
      <button>Add</button>
    </form>  
  );
}

function PackingList(){
  return (
    <div className="list">
      <ul>
        {/* LIST */}
        {initialItems.map(item => <Item item = {item} key={item.id}/>)}
      </ul>
    </div>
  );
}

function Item({item}){
  return (
    <li>
      <span style={ item.packed ? { textDecoration : "line-through"} : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats(){
  return (
    <footer>
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
