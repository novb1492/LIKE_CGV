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
                <div class="ticket_content_m">
                    <h4 class="ticket_content_t">영화</h4>
                    <div class="ticket_m_content">
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
                        <div class="m_sort">
                            <span class="m_sort_t m_sort_t_f">예매율순</span>
                            <span class="m_sort_t">가나다순</span>
                        </div>
                        <hr class="m_sort_hr">
                        <div class="ticket_m_n_area" v-if="num===1">
                            <div v-for="(move,index) in moveArr" :key="move.id" class="ticket_m_n"
                                @click="clickMove(index)" :id="move.id" :ref="setItemRef">
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
                </div>
                <div class="ticket_content_m">
                    <h4 class="ticket_content_t">극장</h4>
                    <div class="ticket_m_content">
                        <div class="ticket_m_btns">
                            <button class="ticket_m_btn ticket_m_btn_on" @click="changeCate2(1)" ref="all_btn2">
                                <span class="ticket_m_btn_t ">전체</span>
                            </button>
                            <button class="ticket_m_btn" @click="changeCate2(2)" ref="art_house_btn2">
                                <span class="ticket_m_btn_t">아트하우스</span>
                            </button>
                            <button class="ticket_m_btn" @click="changeCate2(3)" ref="special_btn2">
                                <span class="ticket_m_btn_t">특별관</span>
                            </button>
                        </div>
                        <div class="location_area" ref="all_city" v-if="num2===1">
                            <div class="city_box">
                                <span v-for="(theater,index) in theaterArr" :key="theater.id" class="city_t" :ref="setTheater" @click="changeCity(index)">{{theater.name}}({{theater.count}})</span>
                            </div>
                            <div class="city_in">
                                <span v-for="(location,index) in locationArr" :key="location.id"  class="city_in_t">
                                    {{location.name}}
                                </span>
                            </div>
                        </div>
                        <div class="location_area" ref="art_house_city" v-if="num2===2">
                            art_house 미구현
                        </div>
                        <div class="location_area" ref="special_city" v-if="num2===3">
                            special 미구현
                        </div>
                    </div>
                </div>
            </div>
            <img class="ticket_img" src="https://s3.ap-northeast-2.amazonaws.com/www.kimscafe.com/etc/ticket_banner.jpg"
                alt="" srcset="">
        </div>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex';

    export default {
        asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
            let moveArr = [{ name: '블랙팬서', id: '1', age: 12, advance_rate: 1 }, { name: '자백', id: '2', age: 15, advance_rate: 3 }, { name: '리멤버', id: '3', age: 12, advance_rate: 2 }];
            let theaterArr = [{ name: '서울' ,count:31,id:'1',local:[{name:'강남',id:'1'},{name:'강변',id:'2'},{name:'대학로',id:'3'},{name:'구로',id:'4'}]}
            ,{ name: '경기' ,count:54,id:'2',local:[{name:'일산',id:'5'},{name:'고양',id:'6'},{name:'파주',id:'7'},{name:'김포한강',id:'8'}]}
            ,{ name: '인천' ,count:11,id:'3',local:[{name:'계양',id:'9'},{name:'부평',id:'10'},{name:'인천도화',id:'11'},{name:'청라',id:'12'}]}
            ];
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
            return { moveArr: moveArr,theaterArr:theaterArr };
        },
        data() {
            return {
                moveRef: [],
                clickIndex: null,
                num: 1,
                num2:1,
                locationArr:[],
                theaterRef:[],
                beforeTheaterRefIndex:0
            }
        },
        mounted() {
            this.changeNav(1);
            this.beforeContentRef = this.$refs.all;
            this.locationArr=this.theaterArr[0].local;
            this.theaterRef[0].classList.add('city_t_on');
        },
        methods: {
            changeCity(index){
                this.locationArr=this.theaterArr[index].local;
                this.theaterRef[this.beforeTheaterRefIndex].classList.remove('city_t_on');
                this.theaterRef[index].classList.add('city_t_on');
                this.beforeTheaterRefIndex=index;
            },
            setTheater(el){
                this.theaterRef.push(el);
            },
            ...mapMutations("navBar", {
                changeNav: "changeNav",
            }),
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
            },
            changeCate(cate) {
                if (cate === 1) {
                    this.num = 1;
                    this.allOn(this.$refs.all_btn,this.$refs.art_house_btn,this.$refs.special_btn);
                } else if (cate === 2) {
                    this.num = 2;
                    this.artHouseOn(this.$refs.all_btn,this.$refs.art_house_btn,this.$refs.special_btn);
                } else if (cate === 3) {
                    this.num = 3;
                    this.specialOn(this.$refs.all_btn,this.$refs.art_house_btn,this.$refs.special_btn);
                }
            },
            allOn(all_btn,art_house_btn,special_btn) {
                all_btn.classList.add('ticket_m_btn_on');
                art_house_btn.classList.remove('ticket_m_btn_on');
                special_btn.classList.remove('ticket_m_btn_on');
            },
            artHouseOn(all_btn,art_house_btn,special_btn) {
                all_btn.classList.remove('ticket_m_btn_on');
                art_house_btn.classList.add('ticket_m_btn_on');
                special_btn.classList.remove('ticket_m_btn_on');
            },
            specialOn(all_btn,art_house_btn,special_btn) {
                all_btn.classList.remove('ticket_m_btn_on');
                art_house_btn.classList.remove('ticket_m_btn_on');
                special_btn.classList.add('ticket_m_btn_on');
            },
            changeCate2(cate) {
                if (cate === 1) {
                    this.num2 = 1;
                    this.allOn(this.$refs.all_btn2,this.$refs.art_house_btn2,this.$refs.special_btn2);
                } else if (cate === 2) {
                    this.num2 = 2;
                    this.artHouseOn(this.$refs.all_btn2,this.$refs.art_house_btn2,this.$refs.special_btn2);
                } else if (cate === 3) {
                    this.num2 = 3;
                    this.specialOn(this.$refs.all_btn2,this.$refs.art_house_btn2,this.$refs.special_btn2);
                }
            }
        }
    }
</script>
<style lang="">

</style>