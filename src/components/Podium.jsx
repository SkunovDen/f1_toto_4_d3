import React from "react";
import { Box, Button, Stack, Divider, Typography} from "@mui/material";



import PodiumSlot from "./PodiumSlot";
import { useFinishListStore } from '../store/finishListStore'

const Podium = () => {
    const podiumList = useFinishListStore(state => state.finishList)
    const clearFinishList = useFinishListStore(state => state.clearFinishList)


    const sortDrivers = (d1, d2) => {
        return d1.position - d2.position
    }
    
    return(
        <Box>
            <Stack>
                <Typography sx={{margin:'auto', fontWeight:800}}>
                    ПРОГНОЗ
                </Typography>
                {podiumList.sort(sortDrivers).map((driver,index) => 
                    <Stack direction="row" spacing={2}>
                        <div className="slotname" style={{minWidth : '3em'}}>
                            {++index}
                        </div>
                        <PodiumSlot slot={driver} key={index} />
                    </Stack>         
                )}
                
                <Button sx={{marginY:'20px'}} className="clearbutton" size="small" variant="contained"
                    onClick={() => clearFinishList()}>CLEAR LIST</Button>
                <Divider/>
            </Stack>
            
        </Box>
    )
}

export default Podium