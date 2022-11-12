<template lang="">
    <div class="ticket_m_btns" v-if="flag">
        <button class="ticket_m_btn ticket_m_btn_on" @click="changeCate(arr[0])" ref="all_btn">
            <span class="ticket_m_btn_t">전체</span>
        </button>
        <button class="ticket_m_btn" @click="changeCate(arr[1])" ref="art_house_btn">
            <span class="ticket_m_btn_t">아트하우스</span>
        </button>
        <button class="ticket_m_btn" @click="changeCate(arr[2])" ref="special_btn">
            <span class="ticket_m_btn_t">특별관</span>
        </button>
    </div>
    <div class="ticket_m_btns" v-else>
        <button class="ticket_m_btn ticket_m_btn_on" @click="changeCate(arr[0])" ref="all_btn2">
            <span class="ticket_m_btn_t">전체</span>
        </button>
        <button class="ticket_m_btn" @click="changeCate(arr[1])" ref="art_house_btn2">
            <span class="ticket_m_btn_t">아트하우스</span>
        </button>
        <button class="ticket_m_btn" @click="changeCate(arr[2])" ref="special_btn2">
            <span class="ticket_m_btn_t">특별관</span>
        </button>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import { ticketPagechangeRouter } from '../../assets/js/jslib';

export default {
    props: ["arr", "flag"],
    computed: {
        ...mapGetters("ticket", {
            locationId:"getLocationId",
            moveId: "getMoveId",
            date: "getSelectDate"
        })
    },
    methods: {
        ...mapMutations("ticket", {
            changeNum: "changeNum",
            changeNum2:"changeNum2",
            changeLocationId:"changeLocationId",
            changeMoveId:"changeMoveId"
        }),
        changeCate(cate) {
            if (cate === 1) {
                this.changeNum(1);
                this.allOn(this.$refs.all_btn, this.$refs.art_house_btn, this.$refs.special_btn);
            } else if (cate === 2) {
                this.changeNum(2);
                this.chnageMoveCate();
                this.artHouseOn(this.$refs.all_btn, this.$refs.art_house_btn, this.$refs.special_btn);
            } else if (cate === 3) {
                this.changeNum(3);
                this.chnageMoveCate();
                this.specialOn(this.$refs.all_btn, this.$refs.art_house_btn, this.$refs.special_btn);
            } else if (cate === 4) {
                this.changeNum2(1);
                this.allOn(this.$refs.all_btn2, this.$refs.art_house_btn2, this.$refs.special_btn2);
            } else if (cate === 5) {
                this.changeNum2(2);
                this.changeLocaCate();
                this.artHouseOn(this.$refs.all_btn2, this.$refs.art_house_btn2, this.$refs.special_btn2);
            } else if (cate === 6) {
                this.changeNum2(3);
                this.changeLocaCate();
                this.specialOn(this.$refs.all_btn2, this.$refs.art_house_btn2, this.$refs.special_btn2);
            }
        },
        chnageMoveCate(){
            this.changeMoveId(0);
            ticketPagechangeRouter(this.$router,0,this.locationId,this.date,{flag:true});
        },
        changeLocaCate(){
            this.changeLocationId(0);
            ticketPagechangeRouter(this.$router,this.moveId,0,this.date,{flag:true});
        },
        allOn(all_btn, art_house_btn, special_btn) {
            all_btn.classList.add('ticket_m_btn_on');
            art_house_btn.classList.remove('ticket_m_btn_on');
            special_btn.classList.remove('ticket_m_btn_on');
        },
        artHouseOn(all_btn, art_house_btn, special_btn) {
            all_btn.classList.remove('ticket_m_btn_on');
            art_house_btn.classList.add('ticket_m_btn_on');
            special_btn.classList.remove('ticket_m_btn_on');
        },
        specialOn(all_btn, art_house_btn, special_btn) {
            all_btn.classList.remove('ticket_m_btn_on');
            art_house_btn.classList.remove('ticket_m_btn_on');
            special_btn.classList.add('ticket_m_btn_on');
        }
    }
}
</script>
<style lang="">

</style>