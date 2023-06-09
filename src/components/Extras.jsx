import React from "react";
import { Box, Stack, Typography } from '@mui/material';
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
          <Typography sx={{marginLeft: 0, marginTop:'25px', fontWeight:800}}>
              ПОБЕДИТЕЛЬ КВАЛИФИКАЦИИ
          </Typography>

          <Stack direction="row" spacing={2}>
            <Box>
                <div className="slotname" style={{minWidth : '3em'}}>
                    K
                </div>
            </Box>

            <Box>
              <div className='card'
                  onDragLeave={(e) => dragEndHandler(e)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDrop={(e) => dropHandler(e, slotQualWinner)}> 
                {slotQualWinner.name}
              </div>
            </Box>
            
            <Box>                       
                <div className="slotname clearslot" style={{minWidth : '3em'}}
                    onClick={() => clearQualWinner()}>
                    &times;
                </div>
            </Box>
          </Stack>


          <Typography sx={{marginLeft:0, marginTop:'25px', fontWeight:800}}>
            ЛУЧШИЙ КРУГ
          </Typography>
          
          <Stack direction="row" spacing={2}>  
            <Box>
              <div className="slotname" style={{minWidth : '3em'}}>
                ЛK
              </div>
            </Box>

            <Box>
              <div className='card'
                  onDragLeave={(e) => dragEndHandler(e)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDrop={(e) => dropHandler(e, slotBestLap)}> 
                {slotBestLap.name}
              </div>
            </Box>
            
            <Box>                       
                <div className="slotname clearslot" style={{minWidth : '3em'}}
                    onClick={() => clearBestLap()}>
                    &times;
                </div>
            </Box>
          </Stack> 

        </Stack> 
      </Box>
    )
}
 export default Extras