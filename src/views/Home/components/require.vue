<template>
  <div class="require-content mb-32">
    <div class="section-title">要求</div>
    <div class="require-desc ml-32">
      Un qualsiasi dispositivo Computer o Smartphone che navighi online
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
.require-desc {
  padding: 0.4rem 0;
  position: relative;
  &::after {
    content: '';
    display: block;
    height: 0.6rem;
    width: 0.6rem;
    border-radius: 50%;
    background-color: #2a2b3f;
    position: absolute;
    left: -2.4rem;
    top: 1rem;
  }
}
</style>