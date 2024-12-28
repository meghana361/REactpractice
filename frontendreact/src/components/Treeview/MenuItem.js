import React, { useState } from 'react'
import MenuList from './MenuList'
import {FaMinus, FaPlus} from 'react-icons/fa'

const MenuItem = ({item}) => {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})
    const handletogglechildren=(getcurrentlabel)=>{
setDisplayCurrentChildren({
    ...displayCurrentChildren,
    [getcurrentlabel]:!displayCurrentChildren[getcurrentlabel]
})
console.log(displayCurrentChildren);
    }
  return (
    <li>

    <div className='menuitem'>
      <p>{item.label}</p>
{
    item&&item.children&&item.children.length?(
        <span onClick={()=>handletogglechildren(item.label)}>
{

    displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />

}
{/* const [items, setItems] = useState([1, 2, 3]);

// Add an item using concat
setItems(items.concat(4)); // Output: [1, 2, 3, 4]

// Filter items to remove `2`
setItems(items.filter(item => item !== 2)); // Output: [1, 3]
 */}
        </span>
    ):null
}
      </div>
      {
        item&&item.children&&item.children.length>0&&displayCurrentChildren[item.label]?(
            <MenuList list={item.children}/>
        ):null
    }
    
    </li>
  )
}

export default MenuItem
