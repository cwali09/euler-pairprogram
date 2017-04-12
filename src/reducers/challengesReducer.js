import initial state from './initialState'



//Wtf is THIS???
// nvm this is redux shit; learn it later
// redux is client side data storage
export default function challengesreducer(state=initialState.challenges, action) {
  switch(action.type) {
    case 'GET_CHALLENGES':
      return action.payload;
    default:
      return state;
  }
}
