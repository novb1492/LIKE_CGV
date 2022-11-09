<template lang="">
    <div class="ticket_m_btns">
        <button class="ticket_m_btn ticket_m_btn_on" @click="changeCate(1)" ref="all_btn">
            <span class="ticket_m_btn_t">전체</span>
        </button>
        <button class="ticket_m_btn" @click="changeCate(2)" ref="art_house_btn">
            <span class="ticket_m_btn_t">아트하우스</span>
        </button>
        <button class="ticket_m_btn" @click="changeCate(3)" ref="special_btn">
            <span class="ticket_m_btn_t">특별관</span>
        </button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations("ticket", {
            changeNum: "changeNum",
        }),
        changeCate(cate) {
            if (cate === 1) {
                this.changeNum(1);
                this.allOn(this.$refs.all_btn, this.$refs.art_house_btn, this.$refs.special_btn);
            } else if (cate === 2) {
                this.changeNum(2);
                this.artHouseOn(this.$refs.all_btn, this.$refs.art_house_btn, this.$refs.special_btn);
            } else if (cate === 3) {
                this.changeNum(3);
                this.specialOn(this.$refs.all_btn, this.$refs.art_house_btn, this.$refs.special_btn);
            }
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
        },
        changeCate2(cate) {
            if (cate === 1) {
                this.num2 = 1;
                this.allOn(this.$refs.all_btn2, this.$refs.art_house_btn2, this.$refs.special_btn2);
            } else if (cate === 2) {
                this.num2 = 2;
                this.artHouseOn(this.$refs.all_btn2, this.$refs.art_house_btn2, this.$refs.special_btn2);
            } else if (cate === 3) {
                this.num2 = 3;
                this.specialOn(this.$refs.all_btn2, this.$refs.art_house_btn2, this.$refs.special_btn2);
            }
        }
    },
}
</script>
<style lang="">

</style>