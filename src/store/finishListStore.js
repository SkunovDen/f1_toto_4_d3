import { create } from 'zustand'

export const useFinishListStore = create((set) => ({
  driversList: [
    {id: 101, order: 3, name: 'Ферстаппен', team: 'Red Bull', number: 1},
    {id: 102, order: 3, name: 'Сарджент', team: 'Wiliams', number: 2},
    {id: 103, order: 3, name: 'Норрис', team: 'McLaren', number: 4},
    {id: 104, order: 3, name: 'Гасли', team: 'Alpine', number: 10},
    {id: 105, order: 3, name: 'Перес', team: 'Red Bull', number: 11},
    {id: 105, order: 3, name: 'Алонсо', team: 'Aston Martin', number: 14},
    {id: 107, order: 3, name: 'Леклер', team: 'Ferrari', number: 16},
    {id: 108, order: 3, name: 'Стролл', team: 'Aston Martin', number: 18},
    {id: 109, order: 3, name: 'Магнуссен', team: 'Haas', number: 20},
    {id: 110, order: 3, name: 'Де Вриз', team: 'AlphaTauri', number: 21},
    {id: 111, order: 3, name: 'Цунода', team: 'AlphaTauri', number: 22},
    {id: 112, order: 3, name: 'Албон', team: 'Wiliams', number: 23},
    {id: 113, order: 3, name: 'Чжоу', team: 'Alfa Romeo', number:24},
    {id: 114, order: 3, name: 'Хюлкенберг', team: 'Haas', number: 27},
    {id: 115, order: 3, name: 'Окон', team: 'Alpine', number: 31},
    {id: 116, order: 3, name: 'Хэмилтон', team: 'Mercedes', number: 44},
    {id: 117, order: 3, name: 'Сайнс', team: 'Ferrari', number: 55},
    {id: 118, order: 3, name: 'Расселл', team: 'Mercedes', number: 63},
    {id: 119, order: 3, name: 'Боттас', team: 'Alfa Romeo', number: 77},
    {id: 120, order: 3, name: 'Пиастри', team: 'McLaren', number: 81}
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


