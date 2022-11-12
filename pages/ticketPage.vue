<template lang=" ">
    <div class="ticket_page_area">
        <div class="ticket_page_btns common">
            <button class="ticket_page_btn">ENGLISH</button>
            <button class="ticket_page_btn">
                <i class="fa-regular fa-clock"></i>
                <span>상영시간표</span>
            </button>
            <button class="ticket_page_btn">
                <i class="fa-solid fa-rotate-left"></i>
                <span>예매 다시하기</span>
            </button>
        </div>
        <div class="ticket_content_area">
            <img class="ticket_content_l ticket_img"
                src="https://s3.ap-northeast-2.amazonaws.com/www.kimscafe.com/etc/ticket_banner.jpg" alt="" srcset="">
            <div class="ticket_content">
                <!--영화 영역-->
                <div class="ticket_content_m">
                    <h4 class="ticket_content_t">영화</h4>
                    <div class="ticket_m_content">
                        <ticketCateBtnsVue :arr="[1,2,3]" :flag="true"/>
                        <moveComponentVue />
                    </div>
                </div>
                <!--극장 영역-->
                <div class="ticket_content_m">
                    <h4 class="ticket_content_t">극장</h4>
                    <div class="ticket_m_content">
                        <ticketCateBtnsVue :arr="[4,5,6]" :flag="false"/>
                        <theaterComponentVue/>
                    </div>
                </div>
                <!--날짜 영역-->
                <dateComponentVue/>
                <!--시간영역-->
                <timeComponentVue/>
            </div>
            <img class="ticket_img" src="https://s3.ap-northeast-2.amazonaws.com/www.kimscafe.com/etc/ticket_banner.jpg"
                alt="" srcset="">
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import moveComponentVue from '../components/ticket/moveComponent.vue';
import ticketCateBtnsVue from '../components/ticket/ticketCateBtns.vue';
import theaterComponentVue from '../components/ticket/theaterComponent.vue';
import dateComponentVue from '../components/ticket/dateComponent.vue';
import timeComponentVue from '../components/ticket/timeComponent.vue';
import { setTiketPage } from '../assets/js/jslib';
export default {
    asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
        let moveArr = [{ name: '블랙팬서', id: 1, age: 12, advance_rate: 1 }, { name: '자백', id: 2, age: 15, advance_rate: 3 }, { name: '리멤버', id: 3, age: 12, advance_rate: 2 }];
        let theaterArr = [{ name: '서울', count: 31, id: 1,select:true, local: [{ name: '강남', id: 1 }, { name: '강변', id: 2 }, { name: '대학로', id: 3 }, { name: '구로', id: 4 }] }
            , { name: '경기', count: 54, id: 2 ,select:false, local: [{ name: '일산', id: 5 }, { name: '고양', id: 6 }, { name: '파주', id: 7 }, { name: '김포한강', id: 8 }] }
            , { name: '인천', count: 11, id: 3 ,select:false, local: [{ name: '계양', id: 9 }, { name: '부평', id: 10 }, { name: '인천도화', id: 11 }, { name: '청라', id: 12 }] }
        ];
        let dateArr = { year: 2022, month: 11, days: [{ date: 8, can: true, dow: '화', today: true }, { date: 9, can: true, dow: '수', today: false }, { date: 10, can: true, dow: '목', today: false }, { date: 11, can: true, dow: '금', today: false }, { date: 12, can: true, dow: '토', today: false }, { date: 13, can: true, dow: '일', today: false }] };
        // let moveArr=[{name:'블랙팬서',id:'1',age:12,advance_rate:1
        //     ,theater:[{loc:'서울',id:'1',count:31,locDe:[{name:'강남',id:'1'},{name:'강변',id:'2'},{name:'건대',id:'3'}]}
        //     ,{loc:'경기',id:'2',count:54,locDe:[{name:'고양행신',id:'4'},{name:'파주',id:'5'},{name:'김포한강',id:'6'}]}
        //     ]
        // }
        // ,{name:'자백',id:'2',age:15,advance_rate:3
        //     ,theater:[{loc:'서울',id:'1',count:31,locDe:[{name:'강남',id:'1'},{name:'구로',id:'7'},{name:'건대',id:'3'}]}
        //     ,{loc:'경기',id:'2',count:54,locDe:[{name:'고양행신',id:'4'},{name:'일산',id:'8'},{name:'김포한강',id:'6'}]}
        //     ]
        // },{name:'리멤버',id:'3',age:12,advance_rate:2
        //     ,theater:[{loc:'서울',id:'1',count:31,locDe:[{name:'강남',id:'1'},{name:'대학로',id:'9'},{name:'동대문',id:'10'}]}
        //     ,{loc:'경기',id:'2',count:53,locDe:[{name:'김포',id:'11'},{name:'다산',id:'12'},{name:'김포한강',id:'6'}]}
        //     ]
        // }]
        return { moveArr: moveArr, theaterArr: theaterArr, dateArr: dateArr };
    },
    components: { ticketCateBtnsVue, moveComponentVue, theaterComponentVue, dateComponentVue,timeComponentVue },
    computed: {
        ...mapGetters("ticket", {
            num: "getNum",
        })
    },
    head() {
        return {
            title: "예매 | 영화 그 이상의 강동.CGV",
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'CGV는 선진화된 관람문화와 최고의 서비스로 고객에게 잊을 수 없는 감동을 선사합니다. CGV홈페이지를 통해 영화 예매뿐만 아니라 그 이상의 서비스와 감동을 전달하고, 다양한 즐거움과 특별한 경험을 제공하고자 합니다.',
                },
            ],
        }
    },
    mounted() {
        this.changeNav(1);
        setTiketPage(this,this.moveArr,this.theaterArr,this.dateArr);
    },
    methods: {
        ...mapMutations("navBar", {
            changeNav: "changeNav",
        }),
        ...mapMutations("ticket", {
            changeMoveArr: "changeMoveArr",
            changeTheaterArr: "changeTheaterArr",
            changeLocationArr: "changeLocationArr",
            changeDayArr: "changeDayArr"
        })
    }
}
</script>
<style lang="">

</style>