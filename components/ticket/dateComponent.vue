<template lang="">
    <div class="ticket_content_d">
        <h4 class="ticket_content_t">날짜</h4>
        <div class="date_area_header">
            <div class="year">{{dateArr.year}}</div>
            <div class="month">{{dateArr.month}}</div>
        </div>
        <div class="date_area">
            <div v-for="(day, index) in dateArr.days" :key="day.date" class="date_box" @click="select(day,index)"
                :ref="setDateRef">
                <span class="dow">{{day.dow}}</span>
                <span class="day">{{day.date}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        data() {
            return {
                dateRef: [],
                beforeDateRefIndex: null
            }
        },
        computed: {
            ...mapGetters("ticket", {
                dateArr: "getDayArr",
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
                if (this.beforeDateRefIndex === null) {
                    this.dateRef[index].classList.add('dow_on');
                    this.beforeDateRefIndex = index;
                    return;
                }
                this.dateRef[this.beforeDateRefIndex].classList.remove('dow_on');
                this.dateRef[index].classList.add('dow_on');
                this.beforeDateRefIndex = index;
                let data=new Object;
                data.date={year:this.dateArr.year,month:this.dateArr.month,day:day};
                this.selectDate(data);
            },
            /**
             * 컴포넌트 생성시 dom접근 저장함수
             * @param {el} el 
             */
            setDateRef(el) {
                this.dateRef.push(el);
            }
        }
    }
</script>
<style lang="">

</style>