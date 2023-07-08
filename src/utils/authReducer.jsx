export const authReducer = (state, action)=>{
  switch(action.type){
    case 'LOGIN':
      return true
    case 'LOGOUT':
      return false
    default:
      break;
  }
}