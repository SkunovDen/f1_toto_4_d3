import React from "react";
import Box from '@mui/material/Box';
import { useFinishListStore } from '../store/finishListStore'


const PodiumSlot = (props) => {
  const slot = props.slot

  const addDriverToSlot = useFinishListStore(state => state.addDriverToSlot)

  const dragEndHandler = (e) => {
    e.target.style.boxShadow ='none'
    e.target.style.background = 'white'
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.boxShadow ='0px 0px 11px 7px rgba(34, 60, 80, 0.3)'
    e.target.style.background = 'lightgray'
  }


  const dropHandler = (e, card) => {
    e.preventDefault();
    e.target.style.boxShadow ='none'
    e.target.style.background = 'white'

    addDriverToSlot(slot)
  }

    return(
      <Box>
       
        <div className='card'
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