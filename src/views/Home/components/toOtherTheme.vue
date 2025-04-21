<template>
  <div class="to-other-theme section">
    <div class="section-title">浏览相关主题</div>
    <div class="btns-content">
      <div class="btn-outline btn-mid">比特币</div>
      <div class="btn-outline btn-mid">加密货币和区块链</div>
      <div class="btn-outline btn-mid">财务会计</div>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
  .btns-content {
    display: flex;
    gap: 0.8rem;
    div {
      color: #2a2b3f;
      border-color: #2a2b3f;
      min-width: 8rem;
      padding: 0 1.2rem;
      font-weight: 700;
      &:hover {
        background-color: #f6f7f9;
      }
    }
  }
</style>