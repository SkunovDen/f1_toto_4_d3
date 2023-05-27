import React from "react";

import { Box, Stack, Button } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import SendIcon from '@mui/icons-material/Send';



const Post = () => {
    return(
        <Box sx={{marginTop: '25px'}}>
            <Stack direction="column" spacing={2}>
                <Button className="clearbutton" size="small" variant="contained"
                 endIcon={<ArticleIcon />}>
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