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

  const dragEnterHandler = (e) => {
    setEnableDrop(prev => !checkFinishListToContains())

    e.preventDefault();
    // console.log('dragOverHandler : ', checkFinishListToContains() );
    if (!checkFinishListToContains()) {
      e.target.style.boxShadow ='0px 0px 11px 7px rgba(34, 60, 80, 0.3)'
      e.target.style.background = 'lightgray'
    } else {
      e.target.style.boxShadow ='0px 0px 11px 7px rgba(254, 0, 0, 0.8)'
    }
  }

  const dragEndHandler = (e) => {
    e.target.style.boxShadow ='none'
    e.target.style.background = 'white'
  }

  const dragOverHandler = (e) => {
    e.preventDefault(); 
  }


  const dropHandler = (e) => {
    e.preventDefault();
    
    e.target.style.boxShadow ='none'
    e.target.style.background = 'white'
    if (enableDrop){
      addDriverToSlot(slot)
    }
  }

  

    return(
      <Box>
       
        <div className='card'
        onDragEnter={(e)=>dragEnterHandler(e)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, slot)}
        >
            {slot.name}
            &nbsp;
            {slot.number}
        </div> 
      </Box>
    )
}

export default PodiumSlot