<template lang="">
    <div class="ticket_content_d">
        <h4 class="ticket_content_t">날짜</h4>
        <div class="date_area_header">
            <div class="year">{{dateArr.year}}</div>
            <div class="month">{{dateArr.month}}</div>
        </div>
        <div class="date_area">
            <div v-for="(day, index) in dateArr.days" :key="day.date" class="date_box" @click="select(day,index)"
                ref="dates">
                <span class="dow">{{day.dow}}</span>
                <span class="day">{{day.date}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
import { ticketPagechangeRouter } from '../../assets/js/jslib';

    export default {
        data() {
            return {
                beforeDateRefIndex: null
            }
        },
        computed: {
            ...mapGetters("ticket", {
                dateArr: "getDayArr",
                locationId:"getLocationId",
                moveId:"getMoveId",
            })
        },
        methods: {
            ...mapActions("ticket", {
                selectDate: "selectDate"
            }),
            /**
             * 날짜 클릭시 작동하는함수
             * @param {int} day 
             * @param {int} index 
             */
            select(day, index) {
                this.selectCallAction(day);
                if (this.beforeDateRefIndex === null) {
                    this.$refs.dates[index].classList.add('dow_on');
                    this.beforeDateRefIndex = index;
                    return;
                }
                this.$refs.dates[this.beforeDateRefIndex].classList.remove('dow_on');
                this.$refs.dates[index].classList.add('dow_on');
                this.beforeDateRefIndex = index;
                
            },
            /**
             * 날짜 클릭시 acion 호출함수
             * @param {object} day 
             */
            async selectCallAction(day){
                let data=new Object;
                data.moveId=this.moveId;
                data.locationId=this.locationId;
                data.date={year:this.dateArr.year,month:this.dateArr.month,day:day};
                let result=await this.selectDate(data);
                ticketPagechangeRouter(this.$router,this.moveId,this.locationId,`${this.dateArr.year}-${this.dateArr.month}-${day.date}`,result);
            }
        }
    }
</script>
<style lang="">

</style>