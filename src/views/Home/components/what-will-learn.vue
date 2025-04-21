<template>
  <div class="what-will-learn">
      <div class="section-title">
        您将会学到
      </div>
      <ul>
        <li>
          <CheckOutlined />
          <span>Guadagnare 10$ (circa 8€) di Benvenuto GRATIS</span>
        </li>
        <li>
          <CheckOutlined />
          <span>Come Funziona Coinbase Per Comprare BITCOIN</span>
        </li>
        <li>
          <CheckOutlined />
          <span>Come Funziona Coinbase Per Comprare Altre Criptovalute</span>
        </li>
      </ul>
    </div>
</template>
<script setup>
import { CheckOutlined } from '@ant-design/icons-vue';

</script>
<style lang="less" scoped>
  .what-will-learn {
    padding: 2.4rem 0 1.6rem 0;
    border: 1px solid #d1d2e0;
    margin-bottom: 3.2rem;
    color: #2a2b3f;
  }
  .section-title {
    font-size: 2.4rem;
    margin: 0 2.4rem 1.6rem 2.4rem;
    font-weight: 700;
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 2.4rem;
    li {
      padding: 0.4rem 0;
      width: calc(50% - ( 2.4rem / 2 ));
      display: flex;
      gap: 1.6rem;
      font-size: 1.4rem;
      min-height: 1.96rem;
      line-height: 1.4;
      :deep(.anticon) {
        svg {
          height: 1.5rem;
          width: 1rem;
        }
      }
    }
  }
</style>