export default {
    /**
     * 영화 클릭시 api호출 및 클릭한 영화 id store에 저장
     * @param {store} context 
     * @param {object} data 
     */
    selectMove (context,data) { 
        requestSelect(data);
        context.commit('changeMoveId',data.moveId);
    },
    /**
     * 상영관 클릭시 api호출 및 상영관 id store에 저장
     * @param {store} context 
     * @param {object} data 
     */
    selectLocation(context,data){
        requestSelect(data);
        context.commit('changeLocationId',data.locationId);
    },
    /**
     * 날짜 클릭시 api호출 및 클릭한 선택연/월/일 store에 저장
     * @param {store} context 
     * @param {object} data 
     */
    selectDate(context,data){
        requestSelect(data);
        console.log(data);
        context.commit('chageSelectDate',data.date);
    },
}
/**
 * 서버에게 조회 api 요청하는 함수
 * @param {object} data 
 * @returns 
 */
async function requestSelect(data) {
    console.log(data);
    let response=null;
    //영화, 영화 기준 상영 가능 상영관 및 날짜 가져옴
    //극장, 극장 기준 상영 가능 영화 및 날짜 가져옴
    //날짜, 날짜 기준 상영 가능 영화 및 극장 가져옴
    //영화,극장, 영화,극장 기준 상영 가능 영화 및 날짜 가져옴
    //날짜,영화  날짜,영화 기준 상영 가능극장 가져옴
    //극장,날짜 극장,날짜 기준 상영 가능 영화 가져옴
    //영화,극장,날짜 영화,극장,날짜 기준 상영 가능 시간 가져옴
    return response;
}