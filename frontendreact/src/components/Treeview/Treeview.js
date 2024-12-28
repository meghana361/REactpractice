import React from 'react'
import MenuList from './MenuList'
import "./Treeview.css"

const Treeview = ({menus=[]}) => {
  return (
    <div className='treeview'>
      <MenuList list={menus}/>
    </div>
  )
}

export default Treeview
