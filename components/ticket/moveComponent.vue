<template lang="">
    <div>
        <div class="m_sort">
            <span class="m_sort_t m_sort_t_f">예매율순</span>
            <span class="m_sort_t">가나다순</span>
        </div>
        <hr class="m_sort_hr">
        <div class="ticket_m_n_area" v-if="num===1">
            <div v-for="(move,index) in moveArr" :key="move.id" class="ticket_m_n" @click="clickMove(index)"
                :id="move.id" :ref="setItemRef">
                <button>{{move.age}}</button>
                <span class="move_n">{{move.name}}</span>
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

    export default {
        computed: {
            ...mapGetters("ticket", {
                num: "getNum",
                moveArr: "getMoveArr"
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
            clickMove(index) {
                if (this.clickIndex === null) {
                    this.moveRef[index].classList.add('ticket_m_n_on');
                    this.clickIndex = index;
                    this.selectMove(null);
                    return;
                }
                this.moveRef[this.clickIndex].classList.remove('ticket_m_n_on');
                this.moveRef[index].classList.add('ticket_m_n_on');
                this.clickIndex = index; 
                //해당 영화 상영관,날짜 들고오는 action에서 api호출해야함
                this.selectMove(null);
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