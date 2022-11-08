import ticketMutations from "./ticket/ticketMutaion";
import ticketActions from "./ticket/ticketAction";
export const state = () => ({
    num: 1,
    moveArr:[]

}); 
    
export const mutations = ticketMutations;
export const actions = ticketActions;
export const getters = {
  getNum: (state) => {
    return state.num;
  },
  getMoveArr:(state)=>{
    return state.moveArr;
  }
}