import { useState } from "react"
export function NewTodoForm(props){
    props.onSubmit    
    const [newitem,setnewitem]=useState("")
    function handleSubmit(e){
        e.preventDefault()
       
    
          props.onSubmit(newitem)
          setnewitem("")
        }



   return( <form onSubmit={handleSubmit} className="new_item-form">
         <div className="form-row">
          <label htmlFor="item">new item</label>
          <input 
          value={newitem}
          onChange={e => setnewitem(e.target.value)}
          type="text" id="item "/>
         </div>
         <button className="btn">Add</button>
        </form>)
}