<template>
  <div class="fixed-header">
    <div class="title">
      Coinbase Come Comprare Bitcoin e Guadagnare™?
    </div>
    <div class="desc">
      <span class="score">
        4.7
      </span>
      <StarFilled />
      <span class="scored-count">(50个评分)</span>
      <span class="member-count">1127名学生</span>
    </div>
  </div>
</template>
<script setup>
import {
  StarFilled,
} from '@ant-design/icons-vue';
</script>
<style lang="less" scoped>
  .fixed-header {
    background-color: #16161d;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    min-height: 6.4rem;
    padding: 0.8rem 1.6rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.4rem;
  }
  .title {
    font-weight: 700;
  }
  .desc {
    display: inline-flex;
    gap: 0.6rem;
    align-items: center;
    font-size: 1.4rem;
  }
  .score {
    color: #f69c08;
  }
  .anticon {
    color: #f69c08;
    font-size: 1.2rem;
  }
  .scored-count {
    text-decoration: underline;
    color: #c0c4fc;
    cursor: pointer;
  }
</style>