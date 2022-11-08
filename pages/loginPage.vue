<template lang="">
    <div class="common login_area">
        <ul class="login_area_content">
            <ul class="login_content_box">
                <ul class="login_content">
                    <li class="login_btns">
                            <button class="login_select_btn login_select_btn_f" ref="login_btn" @click="changeContent(1)">로그인</button>
                            <button class="login_select_btn" ref="anonymous_btn" @click="changeContent(2)">비회원 예매</button>
                            <button class="login_select_btn" ref=anonymousCheck_btn @click="changeContent(3)">비회원 예매확인</button>
                    </li>
                    <div id="login" v-if="num===1">
                        <hr class="login_nav_hr1">
                        <ul class="login_main_area"  >
                            <li class="login_top_message">아이디 비밀번호를 입력하신 후,로그인 버튼을 클릭해주세요.</li>
                            <input type="text" class="login_input">
                            <input type="password" class="login_input">
                            <button class="login_btn">로그인</button>
                            <div class="find_acc_area">
                                <div class="remember_me_area">
                                    <input type="checkbox" name="" id="" value="remember_me">
                                    <span class="find_text1">아이디저장</span>
                                </div>
                                <div class="find_links">
                                    <nuxt-link to="/findId" class="find_text1">아이디 찾기</nuxt-link>
                                    <nuxt-link to="/findPwd" class="find_text1">비밀번호 찾기</nuxt-link>
                                </div>
                            </div>
                            <img class="naver_login_btn" src="https://s3.ap-northeast-2.amazonaws.com/www.kimscafe.com/etc/btn_loginNaver.jpg" alt="">
                        </ul>
                        <hr class="login_nav_hr2">
                    </div>
                    <div id="anonymous" v-if="num===2">
                        <hr class="login_nav_hr1">
                        anonymous
                        미구현
                    </div>
                    <div id="anonymousCheck" v-if="num===3">
                        <hr class="login_nav_hr1">
                        anonymousCheck
                        미구현
                    </div>
                </ul>
                <img class="phone_login_banner" src="https://s3.ap-northeast-2.amazonaws.com/www.kimscafe.com/etc/phone_login_banner.png" alt="">
            </ul>
        </ul>
    </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            num: 1,
        }
    },
    mounted() {
        this.changeNav(1);
        this.changeContent(this.num);
    },
    methods: {
        ...mapMutations("navBar", {
            changeNav: "changeNav",
        }),
        changeContent(num) {
            if (num === 1) {
                this.changeLoginContent();
            } else if (num === 2) {
                this.changeAnonymousContent();
            } else if (num === 3) {
                this.changeAnonymousCheckContent();
            }
        },
        changeLoginContent() {
            this.num=1;
            this.$refs.anonymousCheck_btn.classList.remove('login_select_on');
            this.$refs.anonymous_btn.classList.remove('login_select_on');
            this.$refs.login_btn.classList.add('login_select_on');
        },
        changeAnonymousContent() {
            this.num=2;
            this.$refs.anonymousCheck_btn.classList.remove('login_select_on');
            this.$refs.login_btn.classList.remove('login_select_on');
            this.$refs.anonymous_btn.classList.add('login_select_on');
        },
        changeAnonymousCheckContent() {
            this.num=3;
            this.$refs.login_btn.classList.remove('login_select_on');
            this.$refs.anonymous_btn.classList.remove('login_select_on');
            this.$refs.anonymousCheck_btn.classList.add('login_select_on');
        }
    }
}
</script>
<style lang="">
    
</style>