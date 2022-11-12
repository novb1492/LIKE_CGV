export default {
    /**
     * 영화 클릭시 api호출 및 클릭한 영화 id store에 저장
     * @param {store} context 
     * @param {object} data 
     */
    selectMove (context,data) { 
        requestSelect(data);
        //테스트코드
        // let response={moveArr:[{ name: '블랙팬서', id: 1, age: 12, advance_rate: 1 ,select:true}, { name: '자백', id: 2, age: 15, advance_rate: 3 ,select:false}, { name: '리멤버', id: 3, age: 12, advance_rate: 2 ,select:false}]
        //             ,theaterArr : [{ name: '서울', count: 31, id: 1,select:true, local: [{ name: '강남', id: 1 ,select:false,cityId:1}, { name: '강변', id: 2 ,select:false,cityId:1}, { name: '대학로', id: 3 ,select:false,cityId:1}, { name: '구로', id: 4 ,select:false,cityId:1}] }
        //             , { name: '경기', count: 54, id: 2 ,select:false, local: [{ name: '일산', id: 5 ,select:false,cityId:2}, { name: '고양', id: 6 ,select:false,cityId:2}, { name: '파주', id: 7 ,select:false,cityId:2}, { name: '김포한강', id: 8 ,select:false,cityId:2}] }
        //             , { name: '인천', count: 11, id: 3 ,select:false, local: [{ name: '계양', id: 9 ,select:false,cityId:3}, { name: '부평', id: 10 ,select:false,cityId:3}, { name: '인천도화', id: 11 ,select:false,cityId:3}, { name: '청라', id: 12 ,select:false,cityId:3}] }
        //                 ]
        //             ,dateArr : { year: 2022, month: 11, days: [{ date: 8, can: true, dow: '화', today: true ,select:false}, { date: 9, can: true, dow: '수', today: false ,select:false}, { date: 10, can: true, dow: '목', today: false ,select:false}, { date: 11, can: true, dow: '금', today: false ,select:false}, { date: 12, can: true, dow: '토', today: false ,select:false}, { date: 13, can: true, dow: '일', today: false ,select:false}]}
        // };
        // context.commit('changeMoveArr',response.moveArr);
        context.commit('changeMoveId',data.moveId);
        return {flag:true};
    },
    /**
     * 상영관 클릭시 api호출 및 상영관 id store에 저장
     * @param {store} context 
     * @param {object} data 
     */
    selectLocation(context,data){
        requestSelect(data);
        context.commit('changeLocationId',data.locationId);
        return {flag:true};
    },
    /**
     * 날짜 클릭시 api호출 및 클릭한 선택연/월/일 store에 저장
     * @param {store} context 
     * @param {object} data 
     */
    selectDate(context,data){
        requestSelect(data);
        context.commit('chageSelectDate',data.date);
        return {flag:true};
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