import { useState } from "react";
import Logo from "./components/Logo"; 
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

// const initialItems = [
//   { 
//     id: 1, 
//     description: "Passports", 
//     quantity: 2, 
//     packed: false 
//   },{ 
//     id: 2, 
//     description: "Socks", 
//     quantity: 12, 
//     packed: true
//   },{ 
//     id: 3, 
//     description: "Charger", 
//     quantity: 1, 
//     packed: false 
//   }
// ];

export default function App(){

  const [items,setItems] = useState([]);
  // const [items,setItems] = useState(initialItems);
  // const [numItems, setNumItems] = useState(0);
  // const numItems = items.length;

  function handleAddItems(item){
    setItems((items) => [...items, item])
    // setNumItems((num) => num + 1);
  }

  function handleDeleteItem(id){
    // console.log(id);
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id){
    setItems((items) => items.map((item) => item.id === id ? {...item, packed : !item.packed} : item));
  }

  function handleClearList(){
    const confirm = window.confirm("Are you sure you want to delete all the items?");

    if(confirm) setItems([]);
  }

  return (
    <div className="app">
      <Logo/>
      <Form onAddItems = {handleAddItems}/>
      <PackingList items = {items} onDeleteItem = {handleDeleteItem} onToggleItem = {handleToggleItem} onClearList = {handleClearList}/>
      <Stats items = {items}/>
    </div>
  )
}

// function Logo(){
//   return <h1>🌴 Far Away 💼</h1>
// }

// function Form({onAddItems}){
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   // const [items,setItems] = useState([]);
  
//   // function handleAddItems(item){
//     //   setItems((items) => [...items, item])
//     // }
    
//     function handleSubmit(e){
//       e.preventDefault();
//       // console.log(e);
      
//     if(!description || !quantity) return; // validation
    
//     const newItem = {
//       description,
//       quantity,
//       packed : false,
//       id : Date.now()
//     };
//     // console.log(newItem);

//     // handleAddItems(newItem);
//     onAddItems(newItem);

//     setDescription("");
//     setQuantity(1);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>What do you need for your trip?</h3>
//       <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
//         {/* <option value="" disabled selected>Select an item...</option>
//         <option value={1}>1</option>
//         <option value={2}>2</option>
//         <option value={3}>3</option>
//       <option value={4}>4</option> */}
//         {Array.from({length : 20} , (_,i) => i + 1).map((num) => (<option value={num} key={num}>{num}</option>))}
//       </select>
//       <input type="text" placeholder="Item Name" value={description} onChange={(e) => {
//         // console.log(e.target);
//         setDescription(e.target.value)}}></input>
//       <button>Add</button>
//     </form>  
//   );
// }

// function PackingList({items, onDeleteItem, onToggleItem, onClearList}){
  
//   const [sortBy, setSortBy] = useState("input");

//   let sortedItems;

//   if(sortBy === "input") sortedItems = items;

//   if(sortBy === "description"){
//     sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
//   }

//   if(sortBy === "packed"){
//     sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed)); 
//   }
  
//   return (
//     <div className="list">
//       <ul>
//         {/* LIST */}
//         {/* {initialItems.map(item => <Item item = {item} key={item.id}/>)} */}
//         {sortedItems.map(item => <Item item = {item} onDeleteItem = {onDeleteItem} onToggleItem = {onToggleItem} key={item.id}/>)}
//       </ul>

//       <div className="actions">
//         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//           <option value="input">Sort by input order</option>
//           <option value="description">Sort by description</option>
//           <option value="packed">Sort by packed status</option>
//         </select>
//         <button onClick={onClearList}>Clear List</button>
//       </div>
//     </div>
//   );
// }

// function Item({item, onDeleteItem, onToggleItem}){
//   return (
//     <li>
//       <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)}></input>
//       <span style={ item.packed ? { textDecoration : "line-through"} : {}}>
//         {item.quantity}
//         {item.description}
//       </span>
//       <button onClick={() => onDeleteItem(item.id)}>❌</button>
//     </li>
//   );
// }

// function Stats({items}){

//   if(!items.length){
//     return (
//       <p className="stats">
//         <em>
//           Start adding items to your packing list 🚀
//         </em>
//       </p>
//     );
//   }

//   const numItems = items.length;
//   const numPacked = items.filter((item) => item.packed).length;
//   const percentage = Math.round((numPacked / numItems) * 100);

//   return (
//     <footer className="stats">
//       <em>
//         {percentage === 100 ? 'You got everything! Ready to go ✈️' : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
//         {/* 💼 You have {numItems} items on your list, and you already packed {""} {numPacked} ({percentage}%) */}
//       </em>
//     </footer>
//   );
// }