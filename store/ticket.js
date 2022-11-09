import ticketMutations from "./ticket/ticketMutaion";
import ticketActions from "./ticket/ticketAction";
export const state = () => ({
    num: 1,
    moveArr:[],
    theaterArr:[],
    num2:1,
    locationArr:[],
    locationId:0,
    moveId:0,
    dayArr:[],

}); 
    
export const mutations = ticketMutations;
export const actions = ticketActions;
export const getters = {
  getNum: (state) => {
    return state.num;
  },
  getMoveArr:(state)=>{
    return state.moveArr;
  },
  getTheaterArr:(state)=>{
    return state.theaterArr;
  },
  getNum2: (state) => {
    return state.num2;
  },
  getLocationArr:(state)=>{
    return state.locationArr;
  },
  getMoveId:(state)=>{
    return state.moveId;
  },
  getLocationId:(state)=>{
    return state.locationId;
  },
  getDayArr:(state)=>{
    return state.dayArr;
  },
}