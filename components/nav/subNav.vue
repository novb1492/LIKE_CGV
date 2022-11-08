<template lang="">
    <div class="sub_nav">
        <ul class="sub_nav_content common">
            <li>
                <ul class="sub_nav_content_1" @mouseover="showSubDetail">
                    <li>영화</li>
                    <li class="sub_nav_content_1_text">극장</li>
                    <li class="sub_nav_content_1_text">예매</li>
                    <li class="sub_nav_content_1_text">스토어</li>
                    <li class="sub_nav_content_1_text">이벤트</li>
                    <li class="sub_nav_content_1_text">혜택</li>
                </ul>
            </li>
            <li>
                <span class="sub_nav_content_2_text">|</span>
                <input type="text" style="margin 0;">
                <i class="fa-solid fa-magnifying-glass"></i>
                <span class="sub_nav_content_2_text">|</span>
            </li>
        </ul>
        <hr>
        <div class="sub_nav_detail"  ref="sub_nav_detail" hidden>
            <ul class="sub_nav_detail_contents common" @mouseleave="closeSubDetail">
                <li>
                    <ul class="sub_nav_detail_content">
                        <li>
                            <h4 class="sub_nav_detail_h4">영화</h4>
                        </li>
                        <li class="sub_nav_detail_text">
                            무비차트
                        </li>
                        <li class="sub_nav_detail_text">
                            아트하우스
                        </li>
                        <li class="sub_nav_detail_text">
                            ICECON
                        </li>
                    </ul>
                </li>
                <div class="updown"></div>
                <li>
                    <ul class="sub_nav_detail_content">
                        <li>
                            <h4 class="sub_nav_detail_h4">극장</h4>
                        </li>
                        <li class="sub_nav_detail_text">
                            CGV 극장
                        </li>
                        <li class="sub_nav_detail_text">
                            특별관
                        </li>
                    </ul>
                </li>
                <div class="updown"></div>
                <li>
                    <ul class="sub_nav_detail_content">
                        <li>
                            <h4 class="sub_nav_detail_h4">예매</h4>
                        </li>
                        <li class="sub_nav_detail_text">
                            빠른예매
                        </li>
                        <li class="sub_nav_detail_text">
                            상영스케줄
                        </li>
                        <li class="sub_nav_detail_text">
                            English Ticketing
                        </li>
                        <li class="sub_nav_detail_text">
                            English Schedule
                        </li>
                    </ul>
                </li>
                <div class="updown"></div>
                <li>
                    <ul class="sub_nav_detail_content">
                        <li>
                            <h4 class="sub_nav_detail_h4">스토어</h4>
                        </li>
                        <li class="sub_nav_detail_text">
                            영화관람권
                        </li>
                        <li class="sub_nav_detail_text">
                            기프트카드
                        </li>
                        <li class="sub_nav_detail_text">
                            콤보
                        </li>
                        <li class="sub_nav_detail_text">
                            팝콘
                        </li>
                        <li class="sub_nav_detail_text">
                            음료
                        </li>
                        <li class="sub_nav_detail_text">
                            스낵
                        </li>
                        <li class="sub_nav_detail_text">
                            플레이존
                        </li>
                        <li class="sub_nav_detail_text">
                            씨네샵
                        </li>
                    </ul>
                </li>
                <div class="updown"></div>
                <li>
                    <ul class="sub_nav_detail_content">
                        <li>
                            <h4 class="sub_nav_detail_h4">이벤트</h4>
                        </li>
                        <li class="sub_nav_detail_text">
                            SPECIAL
                        </li>
                        <li class="sub_nav_detail_text">
                            영화/예매
                        </li>
                        <li class="sub_nav_detail_text">
                            멤버십/CLUB
                        </li>
                        <li class="sub_nav_detail_text">
                            CGV 극장별
                        </li>
                        <li class="sub_nav_detail_text">
                            제휴할인
                        </li>
                        <li class="sub_nav_detail_text">
                            당첨자 발표
                        </li>
                        <li class="sub_nav_detail_text">
                            종료된 이벤트
                        </li>
                    </ul>
                </li>
                <div class="updown"></div>
                <li>
                    <ul class="sub_nav_detail_content">
                        <li>
                            <h4 class="sub_nav_detail_h4">혜택</h4>
                        </li>
                        <li class="sub_nav_detail_text">
                            CGV 할인정보
                        </li>
                        <li class="sub_nav_detail_text">
                            CLUB 서비스
                        </li>
                        <li class="sub_nav_detail_text">
                            VIP 라운지
                        </li>
                    </ul>
                </li>
            </ul>
            <hr>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        showSubDetail(){
            this.$refs.sub_nav_detail.hidden=false;
        },
        closeSubDetail(){
            this.$refs.sub_nav_detail.hidden=true;
        }
    }
}
</script>
<style lang="">
    
</style>