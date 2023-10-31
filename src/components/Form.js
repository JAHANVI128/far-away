import { useState } from "react";

export default function Form({onAddItems}){
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    // const [items,setItems] = useState([]);
    
    // function handleAddItems(item){
      //   setItems((items) => [...items, item])
      // }
      
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
      // console.log(newItem);
  
      // handleAddItems(newItem);
      onAddItems(newItem);
  
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