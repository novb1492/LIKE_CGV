<template lang="">
    <header class="">
        <img src="https://s3.ap-northeast-2.amazonaws.com/www.kimscafe.com/etc/banner.jpg" alt="최상단 광고 이미지" class="top_banner common">
        <nav class="main_nav common">
            <img src="https://s3.ap-northeast-2.amazonaws.com/www.kimscafe.com/etc/logo.png" alt="사이트 로고" class="nav_icon">
            <ul class="main_nav_content">
                <nuxt-link to="/loginPage?select=login" class="main_nav_content_auth">
                    <i class="fa-solid fa-lock fa-lg main_nav_content_icon"></i>
                    <span class="main_nav_content_text">로그인</span>
                </nuxt-link>
                <li class="main_nav_content_auth">
                    <i class="fa-regular fa-user fa-lg main_nav_content_icon"></i>
                    <span class="main_nav_content_text">회원가입</span>
                </li>
                <li class="main_nav_content_auth">
                    <i class="fa-regular fa-user fa-lg main_nav_content_icon"></i>
                    <span class="main_nav_content_text">MY CGV</span>
                </li>
                <li class="main_nav_content_auth">
                    <i class="fa-solid fa-headset fa-lg main_nav_content_icon"></i>
                    <span class="main_nav_content_text">고객센터</span>
                </li>
            </ul>
        </nav>
        <hr class="main_nav_hr">
        <subNavVue/>
    </header>
</template>
<script>
import subNavVue from './subNav.vue';
export default {
    components: { subNavVue }

}
</script>
<style lang="">
    
</style>