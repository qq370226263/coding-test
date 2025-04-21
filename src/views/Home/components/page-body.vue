<template>
  <div class="page-body-main">
    <div class="page-body-section">
      <WhatWillLearn />
      <ToOtherTheme />
      <CourseContent/>
      <Require />
      <CourseDescripion/>
    </div>
  </div>
</template>
<script setup>
import WhatWillLearn from './what-will-learn.vue';
import ToOtherTheme from './to-other-theme.vue';
import CourseContent from './course-content.vue';
import Require from './require.vue';
import CourseDescripion from './course-descripion.vue';
</script>
<style lang="less" scoped>
.page-body-section {
  :deep(.section-title) {
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
    font-weight: 700;
  }
}
</style>