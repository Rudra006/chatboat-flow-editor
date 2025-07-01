import React, { useState } from 'react'

function CustomizeSelect() {
const [selectedOption, setSelectedOption]= useState("");

const handelChange =(event)=>{
    console.log("selecte value is", event.target.value)
    setSelectedOption(event.target.value);
}

const childs= ['child1', 'child2', 'child3'];
 
const [parentChecked, setParentChecked] = useState(false);

const [childrenChecked, setChildrenChecked] = useState([
    childs.reduce((acc, value)=> ({...acc, [value]: false}), {})
]);
const handelParentchange= (e)=>{
    const isChecked= e.target.checked
    setParentChecked(isChecked);
    const updateChildren= {}
    for(const child of childs){
        updateChildren[child]= isChecked;
    }
    setChildrenChecked(updateChildren)
}
const handelChildChange = (event)=>{
       const {name, checked}= event.target;
       const updatedChildren= {
        ...childrenChecked,
        [name]: checked
       }
       setChildrenChecked(updatedChildren);
       const parentCHeck= Object.values(updatedChildren).every((value)=> value == true);
       setParentChecked(parentCHeck)
}
  return (
    <div>
      {/* <select onChange={handelChange} value={selectedOption}>
        <option name="" value="option1">option 1</option>
        <option value="option2">option 2</option>
        <option value="option3">option 3</option>
      </select> */}
      <div>
      <label htmlFor="checkbox">Parent</label>
      <input name='parent' type='checkbox' checked={parentChecked} onChange={handelParentchange}  />
      </div>
      <div>
        {childs.map((item, ind)=>(
            <div key={ind}>
            <label htmlFor={item}>{item}</label>
            <input type='checkbox' name={item} checked={childrenChecked[item]} onChange={handelChildChange} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default CustomizeSelect
