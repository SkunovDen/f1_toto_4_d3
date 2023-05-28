import React, { useState } from "react";

import { Box, Stack, Button } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import SendIcon from '@mui/icons-material/Send';
import Textarea from '@mui/joy/Textarea';
import Modal from '@mui/material/Modal';

import { useFinishListStore } from '../store/finishListStore'




const Post = () => {


const modalBoxStyle = {
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
  const handleClose = () => setOpen(false);
    
  const podiumList = useFinishListStore(state => state.finishList)
  const bestLap = useFinishListStore(state => state.bestLap)
  const qualWinner = useFinishListStore(state => state.qualWinner)

  const getPostText = () => {
    var t = ''
    // eslint-disable-next-line
    const b = podiumList.map((slot, index) => {
      t += (`${slot.name}\n`)
      return null
      }
    )
    t += `К ${qualWinner.name}\n`
    t += `ЛК ${bestLap.name}`

    return t
  }

  const handleShow = () => {
    setPostText(prev => getPostText())
    setOpen(prev => true)
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(postText).then(() => {
      console.log('Content copied to clipboard');
    },() => {
      console.error('Failed to copy');
    });
  }

  const [postText, setPostText]=useState('')

  return(
    <Box sx={{marginTop: '25px'}}>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalBoxStyle}>
          <Textarea minRows={12} maxRows={12}
            value={postText} />
          <Button onClick={() => handleCopyToClipboard()}>Copy to clipboard</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={() => handleClose()}>Cancel</Button>
        </Box>
      </Modal>

      <Stack direction="column" spacing={2}>
        <Button className="clearbutton" size="small" variant="contained"
          endIcon={<ArticleIcon />}
          onClick={()=> handleShow()}>
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