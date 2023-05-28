import React from "react";
import { useFinishListStore } from '../store/finishListStore'


const DriverCard = (props) => {
  const driver = props.driver

  const setDragged = useFinishListStore(state => state.setCurrentDragged)

  return(
    <div className='card'
        onDragStart={(e) => setDragged(driver)}
        draggable={true}>
          <div style={{width:'70%',marginLeft:'10px'}}>
          {driver.name}
          </div>

        &nbsp;
        <div className="number">
        {driver.number}
        </div>
        
    </div> 
  )
}

export default DriverCard