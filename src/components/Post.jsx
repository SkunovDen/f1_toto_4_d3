import React, { useState } from "react";

import { Box, Stack, Button } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import SendIcon from '@mui/icons-material/Send';


import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useFinishListStore } from '../store/finishListStore'




const Post = () => {


const style = {
    position :'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    
  const podiumList = useFinishListStore(state => state.finishList)

    return(
        <Box sx={{marginTop: '25px'}}>
            <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {podiumList.map((slot, index) => {
                return(
                <Typography key={index} >
                    {index}.{slot.name}
                </Typography>)
            })}
            <Button>Copy to clipboard</Button>
          </Box>
        </Modal>
      </div>

            <Stack direction="column" spacing={2}>
                <Button className="clearbutton" size="small" variant="contained"
                 endIcon={<ArticleIcon />}
                 onClick={()=> setOpen(true)}>
                    Generate POST
                </Button>
                <Button className="clearbutton" size="small" variant="contained"
                 endIcon={<SendIcon />}>
                    Send POST
                </Button>
            </Stack>
        </Box>
    )
}

export default Post