<template lang="">
    <div>
        <div class="location_area" ref="all_city" v-if="num2===1">
            <div class="city_box">
                <span v-for="(theater,index) in theaterArr" ref="theaters" :key="theater.id" class="city_t" @click="changeCity(index)">
                    {{theater.name}}({{theater.count}})
                </span>
            </div>
            <div class="city_in">
                <span v-for="(location,index) in locationArr" :key="location.id" class="city_in_t" @click="selectLo(location.id,index)" ref="incitys">
                    {{location.name}}
                </span>
            </div>
        </div>
        <div class="location_area" ref="art_house_city" v-if="num2===2">
            art_house 미구현
        </div>
        <div class="location_area" ref="special_city" v-if="num2===3">
            special 미구현
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import {ticketPagechangeRouter}from "../../assets/js/jslib";
export default {
    data() {
        return {
            beforeTheaterRefIndex: 0,
            clickIndex:null
        }
    },
    computed: {
        ...mapGetters("ticket", {
            num2: "getNum2",
            locationArr: "getLocationArr",
            theaterArr: "getTheaterArr",
            moveId: "getMoveId",
            date: "getSelectDate"
        })
    },
    methods: {
        /**
         * 도시 클릭시 해당 도시 상영관 표시
         * @param {int} index 
         */
        changeCity(index) {
            this.changeLocationArr(this.theaterArr[index].local);
            this.$refs.theaters[this.beforeTheaterRefIndex].classList.remove('city_t_on');
            this.$refs.theaters[index].classList.add('city_t_on');
            this.beforeTheaterRefIndex = index;
            //도시 선택시 선택상영관 및 url 초기화
            this.changeLocationId(0);
            let result={flag:true};
            this.changeRouter(0,result);
        },
        ...mapMutations("ticket", {
            changeLocationArr: "changeLocationArr",
            changeLocationId: "changeLocationId"
        }),
        ...mapActions("ticket", {
            selectLocation: "selectLocation"
        }),
        /**
         * 도시내 사영관 선택시 함수
         * @param {int} locationId 
         */
        selectLo(locationId, index) {
            this.callSelectAction(locationId);
            if (this.clickIndex === null) {
                this.$refs.incitys[index].classList.add('city_in_on');
                this.clickIndex = index;
                return;
            }
            this.$refs.incitys[this.clickIndex].classList.remove('city_in_on');
            this.$refs.incitys[index].classList.add('city_in_on');
            this.clickIndex = index;
        },
        /**
         * 조회 action호출
         * @param {int} locationId 
         */
        async callSelectAction(locationId) {
            let data = new Object;
            data.locationId = locationId;
            data.moveId = this.moveId;
            data.date = this.date;
            let result=await this.selectLocation(data);
            this.changeRouter(locationId,result);
        },
        changeRouter(locationId,result){
            ticketPagechangeRouter(this.$router,this.moveId,locationId,this.date,result);
        }
    }
}
</script>
<style lang="">

</style>