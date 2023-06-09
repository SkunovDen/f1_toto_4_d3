import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DriverCard from "./DriverCard";
import { useFinishListStore } from '../store/finishListStore'

const StartGrid = (props) => {
    const drivers = useFinishListStore(state => state.driversList)

    const sortDrivers = (d1, d2) => {
        return d1.number - d2.number
    }

    return(
        <Box>
            <Stack>
                <Typography sx={{marginLeft:'70px', marginRight:'auto', fontWeight:800}}>ПИЛОТЫ</Typography>
                {drivers.sort(sortDrivers).map((driver,index) => 
                    <DriverCard startDrag={props.startDrag} driver={driver} key={index} />
                )}
            </Stack>
        </Box>
    )
}

export default StartGrid