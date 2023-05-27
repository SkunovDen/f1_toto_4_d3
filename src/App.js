import React from 'react';
import './App.css';


import Grid from '@mui/material/Grid';
import StartGrid from './components/StartGrid';
import Podium from './components/Podium';
import Extras from './components/Extras';
import Post from './components/Post';


function App() {



  return (
    <div className="App">
      <div className='app-container'>
      <Grid container columns={8} 
        justify="center">


        <Grid item xs={4}>
          <div style={{width: '200px'}}>
            <StartGrid />
          </div>
          
        </Grid>

        <Grid item xs={4}>
          <div style={{width: '200px'}}>
            <Podium />
            <Extras />

            <Post /> 
          </div>


        </Grid>

        
      </Grid>



      
    
      </div>
    </div>
  );
}

export default App;
