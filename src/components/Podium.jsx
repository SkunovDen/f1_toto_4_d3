import React from "react";
import { Box, Button, Stack, Divider, Typography } from "@mui/material";


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
             {/* sx={{border: '1px solid wheat', borderRadius: '11px', margin: 3}}> */}

            <Stack>
                <Typography sx={{margin:'auto', fontWeight:800}}>POSITIONS PREDICTION:</Typography>
                {podiumList.sort(sortDrivers).map((driver,index) => 
                    <PodiumSlot slot={driver} key={index} />
                )}
                
                <Button sx={{marginY:'20px'}} className="clearbutton" size="small" variant="contained"
                    onClick={() => clearFinishList()}>CLEAR LIST</Button>
                <Divider/>
            </Stack>
            
        </Box>
    )
}

export default Podium