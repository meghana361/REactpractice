import React, { useState } from "react";
import data from "./data";
import "./styles.css";
const Accordian = () => {
//   const [selected, setSelected] = useState(false);
  const [multipleid,setMultipleid]=useState([])

  function handleSelection(currentid){
      let multistorage=[...multipleid];
//       console.log(multistorage);
      const indexid=multistorage.indexOf(currentid);
      console.log(indexid);
      console.log(currentid);
      
      
      if(indexid===-1){
//           // setSelected(currentid=== selected ? null : currentid);
//           // setSelected(currentid);
          multistorage.push(currentid)
//           setSelected(!selected)
}

else{
    multistorage.splice(indexid,1)
    //     setSelected(false)
    //     // setSelected(null)
}
const afterindex=multistorage.indexOf(currentid)
console.log(afterindex);
    setMultipleid(multistorage)

};
// console.log(selected,multistorage,indexid);
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="items">
              <div
                onClick={() => handleSelection(dataitem.id)}
                className="title"
              >
                <h3>{dataitem.question}</h3>
              <span>+</span>
              </div>
              {
//                 // multipleid.find(()=>dataitem.id)===
//                selected&& 
multipleid.indexOf(dataitem.id) !== -1 && (
     <div className="answer">{dataitem.answer}</div>
    )}
{/* //                 // <div>{dataitem.answer}</div> */}
              
            </div>
          ))
        ) : (
          <div>No Data </div>
        )}
      </div>
    </div>
  );
// const [selected, setSelected] = useState(null);
// const [enableMultiSelection, setEnableMultiSelection] = useState(false);
// const [multiple, setMultiple] = useState([]);

// function handleSingleSelection(getCurrentId) {
//   setSelected(getCurrentId === selected ? null : getCurrentId);
// }

// function handleMultiSelection(getCurrentId) {
//   let cpyMutiple = [...multiple];
//   console.log(cpyMutiple);
  
//   const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

//   console.log(findIndexOfCurrentId);
//   if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
//   else cpyMutiple.splice(findIndexOfCurrentId, 1);

//   setMultiple(cpyMutiple);
// }
// console.log(selected, multiple);

// return (
//   <div className="acc-wrapper">
//     <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
//       Enable Multi Selection
//     </button>
//     <div className="accordian">
//       {data && data.length > 0 ? (
//         data.map((dataItem) => (
//           <div className="item">
//             <div
//               onClick={
//                 enableMultiSelection
//                   ? () => handleMultiSelection(dataItem.id)
//                   : () => handleSingleSelection(dataItem.id)
//               }
//               className="title"
//             >
//               <h3>{dataItem.question}</h3>
//               <span>+</span>
//             </div>
//             {enableMultiSelection
//               ? multiple.indexOf(dataItem.id) !== -1 && (
//                   <div className="acc-content ">{dataItem.answer}</div>
//                 )
//               : selected === dataItem.id && (
//                   <div className="acc-content ">{dataItem.answer}</div>
//                 )}
//             {/* {selected === dataItem.id ||
//             multiple.indexOf(dataItem.id) !== -1 ? (
//               <div className="content">{dataItem.answer}</div>
//             ) : null} */}
//           </div>
//         ))
//       ) : (
//         <div>No data found !</div>
//       )}
//     </div>
//   </div>
// );
// };
// const [selected, setSelected] = useState(null);
//   const [enableMultiSelection, setEnableMultiSelection] = useState(false);
//   const [multiple, setMultiple] = useState([]);
//   function handleMultiSelection(getCurrentId) {
//     let cpyMutiple = [...multiple];
//     const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

//     console.log(findIndexOfCurrentId);
//     if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
//     else cpyMutiple.splice(findIndexOfCurrentId, 1);

//     setMultiple(cpyMutiple);
//   }
//   return (
//     <div className="acc-wrapper">
//       {/* <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
//         Enable Multi Selection
//       </button> */}
//       <div className="accordian">
//         {data && data.length > 0 ? (
//           data.map((dataItem) => (
//             <div className="item">
//               <div
//                 onClick={
//                 //   enableMultiSelection
//                     // ?
//                     () => handleMultiSelection(dataItem.id)
//                     // : () => handleSingleSelection(dataItem.id)
//                 }
//                 className="title"
//               >
//                 <h3>{dataItem.question}</h3>
//                 <span>+</span>
//               </div>
//               {
//             //   enableMultiSelection
//                 // ?
//                  multiple.indexOf(dataItem.id) !== -1 && (
//                     <div className="acc-content ">{dataItem.answer}</div>
//                   )
//                 // : selected === dataItem.id && (
//                 //     <div className="acc-content ">{dataItem.answer}</div>
//                 //   )
//                   }
//               {/* {selected === dataItem.id ||
//               multiple.indexOf(dataItem.id) !== -1 ? (
//                 <div className="content">{dataItem.answer}</div>
//               ) : null} */}
//             </div>
//           ))
//         ) : (
//           <div>No data found !</div>
//         )}
//       </div>
//     </div>
//   );
}

export default Accordian;
