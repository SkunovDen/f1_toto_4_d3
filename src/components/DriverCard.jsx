import React from "react";
import { useFinishListStore } from '../store/finishListStore'


const DriverCard = (props) => {
  const driver = props.driver

  const setDragged = useFinishListStore(state => state.setCurrentDragged)


  const dragStartHandler = (e, driver) => {
    setDragged(driver)
  }


  return(
      <div className='card'
                  onDragStart={(e) => dragStartHandler(e, driver)}
                  draggable={true}>
                  {driver.name}
                  &nbsp;
                  {driver.number}
              </div> 
  )
}

export default DriverCard