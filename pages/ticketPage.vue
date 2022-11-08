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
            <img class="ticket_content_l ticket_img" src="https://s3.ap-northeast-2.amazonaws.com/www.kimscafe.com/etc/ticket_banner.jpg" alt="" srcset="">
            <div class="ticket_content">
                <div class="ticket_content_m">
                    <h4 class="ticket_content_t">영화</h4>
                    <div class="ticket_m_content">
                        <div class="ticket_m_btns">
                            <button class="ticket_m_btn">
                                <span class="ticket_m_btn_t">전체</span>
                            </button>
                            <button class="ticket_m_btn">
                                <span class="ticket_m_btn_t">아트하우스</span>
                            </button>
                            <button class="ticket_m_btn">
                                <span class="ticket_m_btn_t">특별관</span>
                            </button>
                        </div>
                        <div class="m_sort">
                            <span class="m_sort_t m_sort_t_f">예매율순</span>
                            <span class="m_sort_t">가나다순</span>
                        </div>
                        <hr class="m_sort_hr">
                        <div class="ticket_m_n_area">
                            <div v-for="(move,index) in moveArr" :key="move.id" class="ticket_m_n" @click="clickMove(index)" :id="move.id" :ref="setItemRef">
                                <button>{{move.age}}</button>
                                <span class="move_n">{{move.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img class="ticket_img" src="https://s3.ap-northeast-2.amazonaws.com/www.kimscafe.com/etc/ticket_banner.jpg" alt="" srcset="">
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        let moveArr=[{name:'블랙팬서',id:'1',age:12,advance_rate:1
            ,theater:[{loc:'서울',id:'1',count:31,locDe:[{name:'강남',id:'1'},{name:'강변',id:'2'},{name:'건대',id:'3'}]}
            ,{loc:'경기',id:'2',count:54,locDe:[{name:'고양행신',id:'4'},{name:'파주',id:'5'},{name:'김포한강',id:'6'}]}
            ]
        }
        ,{name:'자백',id:'2',age:15,advance_rate:3
            ,theater:[{loc:'서울',id:'1',count:31,locDe:[{name:'강남',id:'1'},{name:'구로',id:'7'},{name:'건대',id:'3'}]}
            ,{loc:'경기',id:'2',count:54,locDe:[{name:'고양행신',id:'4'},{name:'일산',id:'8'},{name:'김포한강',id:'6'}]}
            ]
        },{name:'리멤버',id:'3',age:12,advance_rate:2
            ,theater:[{loc:'서울',id:'1',count:31,locDe:[{name:'강남',id:'1'},{name:'대학로',id:'9'},{name:'동대문',id:'10'}]}
            ,{loc:'경기',id:'2',count:53,locDe:[{name:'김포',id:'11'},{name:'다산',id:'12'},{name:'김포한강',id:'6'}]}
            ]
        }]
        return {moveArr:moveArr};
    },
    data() {
        return {
            moveRef:[]
        }
    },
    mounted() {
        this.changeNav(1);
        console.log(this.moveArr);

    },
    methods: {
        ...mapMutations("navBar", {
            changeNav: "changeNav",
        }),
        clickMove(index){
            console.log(this.moveRef[index]);
        },
        setItemRef(move){
            this.moveRef.push(move);
        }
    }
}
</script>
<style lang="">
    
</style>