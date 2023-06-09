import React from "react";
import { Box, Button, Stack, Typography} from "@mui/material";



import PodiumSlot from "./PodiumSlot";
import { useFinishListStore } from '../store/finishListStore'

const Podium = () => {
    const podiumList = useFinishListStore(state => state.finishList)
    const clearFinishList = useFinishListStore(state => state.clearFinishList)
    const clearFinishListSlot = useFinishListStore(state => state.clearFinishListSlot)

    const sortDrivers = (d1, d2) => {
        return d1.position - d2.position
    }
    
    return(
        <Box>
            <Stack>
                <Typography sx={{marginLeft: 0, marginTop: '25px', fontWeight:800}}>
                    ПРОГНОЗ
                </Typography>

                {podiumList.sort(sortDrivers).map((driver,index) => 
                    <Stack direction="row" spacing={2} key={index}>
                        <Box>
                            <div className="slotname" style={{minWidth : '3em'}}>
                                {++index}
                            </div>
                        </Box>

                        <PodiumSlot slot={driver} key={index} />
                        
                        <Box>                       
                            <div className="slotname clearslot" style={{minWidth : '3em'}}
                                onClick={()=>clearFinishListSlot(index)}>
                                &times;
                            </div>
                        </Box>
                    </Stack>         
                )}
                
                <Button sx={{marginY:'20px'}} className="clearbutton" size="small" variant="contained"
                    onClick={() => clearFinishList()}>
                        CLEAR LIST
                </Button>
               
            </Stack>
            
        </Box>
    )
}

export default Podium