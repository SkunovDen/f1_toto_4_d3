import React, { useState } from "react";
import Box from '@mui/material/Box';
import { useFinishListStore } from '../store/finishListStore'


const PodiumSlot = (props) => {
  const slot = props.slot
  const [enableDrop, setEnableDrop] = useState(true)

  const addDriverToSlot = useFinishListStore(state => state.addDriverToSlot)
  const dragged = useFinishListStore(state => state.dragged)
  const finishList = useFinishListStore(state => state.finishList)

  const checkFinishListToContains = () => {
    // console.log('FINISH LIST : ', finishList);
    // console.log('Dragged : ', dragged);

    var contains = false;
    finishList.forEach(slot => {
      if (slot.name === dragged.name) {
        console.log("CONTAINS");
        contains = true;
      }
    })
    return contains
  }

  const dragEnterHandler = () => {
    setEnableDrop(prev => !checkFinishListToContains())
  }

  const dragEndHandler = (e) => {
    e.target.style.boxShadow ='none'
    e.target.style.background = 'white'
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.boxShadow ='0px 0px 11px 7px rgba(34, 60, 80, 0.3)'
    e.target.style.background = 'lightgray'    
  }


  const dropHandler = (e) => {
    e.preventDefault();
    console.log("DROP ", enableDrop);
    
    e.target.style.boxShadow ='none'
    e.target.style.background = 'white'
    if (enableDrop){
      addDriverToSlot(slot)
    }
  }

  

    return(
      <Box>
       
        <div className='card'
        onDragEnter={()=>dragEnterHandler()}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, slot)}
        > {slot.position}&nbsp;:&nbsp;&nbsp;
            {slot.name}
            &nbsp;
            {slot.number}
        </div> 
      </Box>
    )
}

export default PodiumSlot