import React from "react";
import { Box, Stack, Button, Divider, Typography } from '@mui/material';
import { useFinishListStore } from '../store/finishListStore'


const Extras = () => {
  const slotBestLap = useFinishListStore(state => state.bestLap)
  const clearBestLap = useFinishListStore(state => state.clearBestLap)

  const slotQualWinner = useFinishListStore(state => state.qualWinner)
  const clearQualWinner = useFinishListStore(state => state.clearQualWinner)

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

  const dropHandler = (e, slot) => {
    e.preventDefault();
    e.target.style.boxShadow ='none'
    e.target.style.background = 'white'

    addDriverToSlot(slot)
  }

    return(
      <Box>
        <Stack>
          <Typography sx={{margin:'auto', fontWeight:800}}>WINNER OF QUALIFYING:</Typography>
          
          <div className='card'
              onDragLeave={(e) => dragEndHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, slotQualWinner)}> 
            {slotQualWinner.position}&nbsp;:&nbsp;&nbsp;
            {slotQualWinner.name}
            &nbsp;
            {slotQualWinner.number}
          </div>

          <Button sx={{marginY:'20px'}} className="clearbutton" 
              size="small" variant="contained"
              onClick={() => clearQualWinner()}>
            Clear QUAL WINNER
          </Button>
          
          <Divider/>

          <Typography sx={{margin:'auto', fontWeight:800}}>BEST LAP:</Typography>
          <div className='card'
              onDragLeave={(e) => dragEndHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, slotBestLap)}> 
            {slotBestLap.position}&nbsp;:&nbsp;&nbsp;
            {slotBestLap.name}
            &nbsp;
            {slotBestLap.number}
          </div>

          <Button sx={{marginY:'20px'}} className="clearbutton" 
              size="small" variant="contained"
              onClick={() => clearBestLap()}>
            Clear BEST LAP
          </Button>

          <Divider/>
        </Stack> 
      </Box>
    )
}
 export default Extras