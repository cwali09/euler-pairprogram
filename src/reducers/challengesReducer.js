import initial state from './initialState'



//Wtf is THIS???
export default function challengesreducer(state=initialState.challenges, action) {
  switch(action.type) {
    case 'GET_CHALLENGES':
      return action.payload;
    default:
      return state;
  }
}
