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
    import { mapGetters } from 'vuex';

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
            clickMove(index) {
                if (this.clickIndex === null) {
                    this.moveRef[index].classList.add('ticket_m_n_on');
                    this.clickIndex = index;
                    return;
                }
                this.moveRef[this.clickIndex].classList.remove('ticket_m_n_on');
                this.moveRef[index].classList.add('ticket_m_n_on');
                this.clickIndex = index;
            },
            setItemRef(move) {
                this.moveRef.push(move);
            }
        }
    }
</script>
<style lang="">

</style>