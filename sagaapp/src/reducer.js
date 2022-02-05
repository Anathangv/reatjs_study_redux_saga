//actions
export const increaseCount = () => ({
  type: 'INCREASE_COUNT'
})

export const myFirstReducer = (state = {count: 1}, action) => {
  switch(action.type){
    case 'INCREASE_COUNT':
      return{...state, count: state.count + 1}
    default:
      return state;
  }
}