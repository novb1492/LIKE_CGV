export default {
    /**
     * 영화 클릭시 api호출 및 클릭한 영화 id store에 저장
     * 상영관 / 날짜 모두 선택 되어있다면 시간도 같이 가져와야함
     * @param {*} context 
     * @param {object} data 
     */
    selectMove (context,data) { 
        // if(data.locationId!==0&&data.date!==null){
        //     //상영관 날짜 모두 선택되어있을때
        //     //예약 가능 시간 조회
        // }else if(data.locationId!==0&&data.date===null){
        //     //상여관만 선택되어있을때
        //     //상영 가능 날짜 조회
        // }else{
        //     //영화만 선택했을때
        //     //가능 상영관 날짜 조회
        // }
        console.log(data);
        context.commit('changeMoveId',data.moveId);
    },
    /**
     * 상영관 클릭시 api호출 및 상영관 id저장
     * @param {*} context 
     * @param {object} data 
     */
    selectLocation(context,data){
        // if(){
        //     //날짜면 선택
        //     //상영가능 날짜 및 영화조회 
        //     context.commit('changeMoveArr',[]);
        // }else if(){
        //     //영화가 먼저 선택되어있다면
        //     //해당 상영관 상영가능 날짜조회
        // }else{
        //     //영화,날짜 모두 선택되어있다면
        //     //해당 날짜 상영시간표 조회
        // }
        console.log(data);
        context.commit('changeLocationId',data.locationId);
    }
}