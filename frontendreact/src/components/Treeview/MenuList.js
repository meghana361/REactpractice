import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({list=[]}) => {
  return (
    <ul className='menulist'>
      {
        list&&list.length?list.map((listitem)=><MenuItem item={listitem}/>):null
      }
    </ul>
  )
}

export default MenuList
