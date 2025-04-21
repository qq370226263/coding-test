<template>
  <Header />
  <div class="landing-page">
    <Banner/>
    <SideBar/>
    <PageBody/>
  </div>
  <Footer />
</template>

<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Banner from './components/banner.vue';
import SideBar from './components/side-bar.vue';
import PageBody from './components/page-body.vue';
// 组件逻辑可以在这里添加
</script>

<style scoped>
.landing-page {
  position: relative;
}

</style> 