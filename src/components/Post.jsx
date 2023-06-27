import React, { useState } from "react";

import { Box, Stack, Button } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
// import SendIcon from '@mui/icons-material/Send';
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

  const isPrognoseFull = () => {
    var result = true
    podiumList.forEach(slot => {
      if (slot.name === null) {
        result = false
      }
    })

    if (!qualWinner.name) {
      result = false
    }
    if (!bestLap.name) {
      result = false
    }

    return true //result
  }

  const handleShow = () => {
    if(isPrognoseFull()){
      setOpen(prev => true)
    } else {
      alert('Заполните все поля прогноза!')
    }
  }

  function selectText(containerid) {

    if (document.selection) { // IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } 
    else 
    if (window.getSelection) {
      // eslint-disable-next-line
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
  }

  const handleCopyToClipboard = () => {
    selectText('selectable')

    document.execCommand('copy');

    if (window.getSelection) {
      if (window.getSelection().empty) {  // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {  // Firefox
        window.getSelection().removeAllRanges();
      }
    } else if (document.selection) {  // IE?
      document.selection.empty();
    }
  }

  return(
    <Box sx={{marginTop: '25px'}}>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalBoxStyle}>
          <div>
            <div  id="selectable" className="finishList">
            {podiumList.map((slot, index) => {
                return(<div key={index}>
                  {slot.name}
                  <br></br>
                  </div>
                )
              }
            )}

            {'К '}{qualWinner.name}
            <br></br>
            {'ЛК '}{bestLap.name}
          </div>
          </div>
          
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
        {/* <Button className="clearbutton" size="small" variant="contained"
          endIcon={<SendIcon />}>
            Send POST
        </Button> */}
      </Stack>
    </Box>
  )
}

export default Post
