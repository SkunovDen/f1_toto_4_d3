import { create } from 'zustand'

export const useFinishListStore = create((set) => ({
  driversList: [
    {id: 101, order: 3, name: 'Max Verstappen', team: 'Red Bull', number: 1},
    {id: 102, order: 3, name: 'Logan Sargeant', team: 'Wiliams', number: 2},
    {id: 103, order: 3, name: 'Lando Norris', team: 'McLaren', number: 4},
    {id: 104, order: 3, name: 'Pierre Gasly', team: 'Alpine', number: 10},
    {id: 105, order: 3, name: 'Sergio Perez', team: 'Red Bull', number: 11},
    {id: 105, order: 3, name: 'Fernando Alonso', team: 'Aston Martin', number: 14},
    {id: 107, order: 3, name: 'Charles Leclerc', team: 'Ferrari', number: 16},
    {id: 108, order: 3, name: 'Lance Stroll', team: 'Aston Martin', number: 18},
    {id: 109, order: 3, name: 'Kevin Magnussen', team: 'Haas', number: 20},
    {id: 110, order: 3, name: 'Nyck de Vries', team: 'AlphaTauri', number: 21},
    {id: 111, order: 3, name: 'Yuki Tsunoda', team: 'AlphaTauri', number: 22},
    {id: 112, order: 3, name: 'Alex Albon', team: 'Wiliams', number: 23},
    {id: 113, order: 3, name: 'Zhou Guanyu', team: 'Alfa Romeo', number:24},
    {id: 114, order: 3, name: 'Nico Hulkenberg', team: 'Haas', number: 27},
    {id: 115, order: 3, name: 'Esteban Ocon', team: 'Alpine', number: 31},
    {id: 116, order: 3, name: 'Lewis Hamilton', team: 'Mercedes', number: 44},
    {id: 117, order: 3, name: 'Carlos Sainz', team: 'Ferrari', number: 55},
    {id: 118, order: 3, name: 'George Russell', team: 'Mercedes', number: 63},
    {id: 119, order: 3, name: 'Valtteri Bottas', team: 'Alfa Romeo', number: 77},
    {id: 120, order: 3, name: 'Oscar Piastri', team: 'McLaren', number: 81}
  ],

//FINISH LIST
  finishList : [
      {position:1, id: 0, name: ''},
      {position:2, id: 0, name: ''},
      {position:3, id: 0, name: ''},
      {position:4, id: 0, name: ''},
      {position:5, id: 0, name: ''},
      {position:6, id: 0, name: ''},
      {position:7, id: 0, name: ''},
      {position:8, id: 0, name: ''},
      {position:9, id: 0, name: ''},
      {position:10, id: 0, name: ''}
  ],

  addDriverToSlot: (slot) => set((state) => {
    if (slot.position === 'BL') {
      return({...state, 
        bestLap: {...state.bestLap, name: state.dragged.name}
      })
    }

    if (slot.position === 'Qual') {
      return({...state, 
        qualWinner: {...state.qualWinner, name: state.dragged.name}
      })
    }
    const updatedList = state.finishList.map(pos => {
      if (pos.position === slot.position) { 
        return ({
          ...pos, name: state.dragged.name
        })
      } else {
        return pos
      }
    })

    return ({...state, finishList: updatedList})
  }),

  clearFinishList: () =>  set((state) => {
      return ({
        ...state,
        finishList : [
            {position:1, id: 0, name: ''},
            {position:2, id: 0, name: ''},
            {position:3, id: 0, name: ''},
            {position:4, id: 0, name: ''},
            {position:5, id: 0, name: ''},
            {position:6, id: 0, name: ''},
            {position:7, id: 0, name: ''},
            {position:8, id: 0, name: ''},
            {position:9, id: 0, name: ''},
            {position:10, id: 0, name: ''}
        ],
      })
  }),

  clearFinishListSlot: (slot) =>  set((state) => {
    return ({
      ...state})
  }),
  

//EXTRAS
  bestLap: {position:'BL', id: 0, name: ''},
  qualWinner: {position:'Qual', id: 0, name: ''},

  clearBestLap: () => set((state) => {
    return ({
      ...state,  bestLap: {position:'BL', id: 0, name: ''}
    })
  }),

  clearQualWinner: () => set((state) => {
    return ({
      ...state, qualWinner: {position:'Qual', id: 0, name: ''}
    })
  }),





  dragged : null,
  
  setCurrentDragged: (driver) => set((state) =>{
      return ({...state, dragged: driver})
  }),


}))


