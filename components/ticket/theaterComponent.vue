<template lang="">
    <div>
        <div class="location_area" ref="all_city" v-if="num2===1">
            <div class="city_box">
                <span v-for="(theater,index) in theaterArr" :key="theater.id" class="city_t" :ref="setTheater"
                    @click="changeCity(index)">{{theater.name}}({{theater.count}})</span>
            </div>
            <div class="city_in">
                <span v-for="(location,index) in locationArr" :key="location.id" class="city_in_t" @click="selectLo(location.id)">
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

export default {
    data() {
        return {
            theaterRef: [],
            beforeTheaterRefIndex:0
        }
    },
    computed: {
        ...mapGetters("ticket", {
            num2: "getNum2",
            locationArr:"getLocationArr",
            theaterArr:"getTheaterArr",
            moveId:"getMoveId"
        })
    },
    methods: {
        /**
         * 도시 클릭시 해당 도시 상영관 표시
         * @param {int} index 
         */
        changeCity(index) {
            this.changeLocationArr(this.theaterArr[index].local);
            this.theaterRef[this.beforeTheaterRefIndex].classList.remove('city_t_on');
            this.theaterRef[index].classList.add('city_t_on');
            this.beforeTheaterRefIndex = index;
        },
        /**
         * 극장 관련 dom제어 위해 ref 세팅 
         * @param {el} el 
         */
        setTheater(el) {
            this.theaterRef.push(el);
            //제일 처음 세팅
            this.theaterRef[0].classList.add('city_t_on');
        },
        ...mapMutations("ticket", {
            changeLocationArr:"changeLocationArr",
            changeLocationId:"changeLocationId"
        }),
        ...mapActions("ticket",{
            selectLocation:"selectLocation"
        }),
        /**
         * 해당 상영관 상영정보 가져오는 함수
         * 영화가 선택되어있다면 함께조회
         * @param {int} locationId 
         */
        selectLo(locationId){
            let data=new Object;
            data.locationId=locationId;
            data.moveId=this.moveId;

            this.selectLocation(data);
        }
    }
}
</script>
<style lang="">

</style>