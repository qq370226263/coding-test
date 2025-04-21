<template>
  <div class="footer">
    <section class="footer-section" v-for="item in footerConfig" :key="item.title">
      <div class="section-title">
        {{ item.title }}
      </div>
      <div class="section-content">
        <div class="section-item" v-for="i in item.list" :key="i.title">
          <div class="item-title">
            {{ i.title }}
          </div>
          <div class="item-list">
            <div class="item-list-item" v-for="j in i.list" :key="j">
              <a href="#">
                {{ j }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <div class="logo-content">
          <a href="/">
            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" height="34" loading="eager"/>
          </a>
          <div>@2025 Udemy,Inc.</div>
        </div>
        <div class="cookie-setting">
          Cookie 设置
        </div>
        <div class="i18n-setting">
          <GlobalOutlined />
          <span>中文(简体)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { footerConfig } from './config';
import { GlobalOutlined } from '@ant-design/icons-vue';
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  color: #fff;
}
.footer-section {
  background-color:#1d1e27;
  &:nth-child(2n) {
    background-color:#111116;
  }
  padding:0 4.8rem;
  padding-top: 2.4rem;
}
.section-title {
  margin: 1.6rem 0 2.4rem 0;
}
.section-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.section-item {
  width: 25%;
  .item-title {
    margin: 1.6rem 0;
    font-weight: 700;
  }
  .item-list {
    margin: 0 1.6rem 2.4rem 0;
    font-size: 1.4rem;
    a {
      color: #fff;
      display: block;
      padding-bottom: 0.4rem;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.footer-bottom {
  padding: 0 4.8rem;
  background-color: #111116;
  border-top: 1px solid #9194ac;
}
.footer-bottom-content {
  padding: 2.4rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.4rem;
  justify-content: space-between;
}
.cookie-setting {
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
.logo-content {
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
  align-items: center;
  div {
    padding-top: 0.8rem;
  }
}
.i18n-setting {
  display: inline-flex;
  gap: 0.4rem;
  align-items: center;
  cursor: pointer;
  
  .anticon {
    font-size: 1.6rem;
  }
}

:deep(.anticon) {
  font-size: 1.6rem;
}
</style>