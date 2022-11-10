<template lang="">
    <div>
        <div class="m_sort">
            <span class="m_sort_t m_sort_t_f">예매율순</span>
            <span class="m_sort_t">가나다순</span>
        </div>
        <hr class="m_sort_hr">
        <div class="ticket_m_n_area" v-if="num===1">
            <div v-for="(move,index) in moveArr" :key="move.id" class="ticket_m_n" @click="clickMove(index,move.id)"
                :id="move.id" :ref="setItemRef">
                <button>{{move.age}}</button>
                <span class="move_n ticket_m_n_on" v-if="move.select">{{move.name}}</span>
                <span class="move_n " v-else>{{move.name}}</span>
            </div>
        </div>
        <div class="art_house" v-if="num===2">
            art_house 미구현
        </div>
        <div class="special" v-if="num===3">
            special 미구현
        </div>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
import { ticketPagechangeRouter } from '../../assets/js/jslib';

    export default {
        computed: {
            ...mapGetters("ticket", {
                num: "getNum",
                moveArr: "getMoveArr",
                locationId:"getLocationId",
                date:"getSelectDate"
            })
        },
        data() {
            return {
                moveRef: [],
                clickIndex: null
            }
        },
        methods: {
            /**
             * 영화 클릭시 호출 api 및 css 효과 변경
             * @param {int} index 
             */
            clickMove(index,moveId) {
                this.callSelectAction(moveId);
                if (this.clickIndex === null) {
                    this.moveRef[index].classList.add('ticket_m_n_on');
                    this.clickIndex = index;
                    return;
                }
                this.moveRef[this.clickIndex].classList.remove('ticket_m_n_on');
                this.moveRef[index].classList.add('ticket_m_n_on');
                this.clickIndex = index; 
            },
            /**
             * 조회 action 호출
             */
            async callSelectAction(moveId){
                let data=new Object;
                data.locationId=this.locationId;
                data.moveId=moveId;
                data.date=this.date;
                let result=await this.selectMove(data);
                console.log(result);
                ticketPagechangeRouter(this.$router,moveId,this.locationId,this.date);
            },
            /**
             * 영화 dom 제어 위해 
             * @param {el} move 
             */
            setItemRef(move) {
                this.moveRef.push(move);
            },
            ...mapActions("ticket", {
                selectMove: "selectMove"
            })
        }
    }
</script>
<style lang="">

</style>