<template>
  <div class="header">
    <div class="smart-bar">
      <div class="smart-bar-text">
          <a href="#">
            <span>
              <span class="text-bolder">准备好与时俱进了吗？</span>
              <span>通过 Udemy Business 获得技能。</span>
            </span>
          </a>
      </div>
      <div class="close-content">
        <div class="close-btn">
          <CloseOutlined />
        </div>
      </div>
    </div>
    <div class="normal-header">
      <div class="logo">
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" height="34" width="91" loading="lazy"/>
      </div>
      <div class="mid-btn tooltip-content">探索</div>
      <div class="search-content">
        <div class="search-input-content">
          <div class="search-icon mid-ten">
            <SearchOutlined />
          </div>
          <input class="search-input" placeholder="查找装甲课程，提升职业生涯"/>
        </div>
      </div>
      <div class="mid-btn tooltip-content">
        Udemy Business
      </div>
      <div class="mid-btn tooltip-content">
        在 Udemy 上授课
      </div>
      <div class="mid-btn tooltip-content">
        <ShoppingCartOutlined />
      </div>
      <div class="mid-btn btn-border login-btn">
        请登录
      </div>
      <div class="mid-btn btn-border btn-filled register-btn">
        注册
      </div>
      <div class="mid-btn btn-border">
        <GlobalOutlined />
      </div>
    </div>
  </div>
</template>

<script setup>
import { GlobalOutlined, SearchOutlined, ShoppingCartOutlined, CloseOutlined } from '@ant-design/icons-vue';
</script>

<style lang="less" scoped>
.smart-bar {
  background-color: #5022c3;
  display: flex;
  flex-direction: row;
  z-index: 1010;
  position: relative;
}
.smart-bar-text {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 1.6rem 2.4rem;
  
  .text-bolder{
    font-weight: 700;
    margin-right: 0.4rem;
    position: relative;
    &::after {
      content: '';
      height: 1.2rem;
      width: 0.1rem;
      background-color: #fff;
      position: absolute;
      right: -0.1rem;
      bottom: 0;
    }
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  span {
    font-size: 1.6rem;
    line-height: 1.4;
  }
}
.close-btn {
  width: 4rem;
  height: 4rem;
  padding: 0.1rem;
  margin: 0.8rem;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.normal-header {
  padding: 0 2.4rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  height: 7.2rem;
  z-index: 1010;
  position: relative;
  background-color: #fff;
  :deep(.anticon) {
    font-size: 1.6rem;
  }
}
.login-btn {
  color: #6d28d2;
  font-weight: 700;
  width: 8rem;
}
.register-btn {
  color: #fff;
  font-weight: 700;
  background-color: #6d28d2;
  width: 8rem;
  &:hover {
    background-color: #892de1;
    color: #fff;
  }
}

.search-content {
  flex: 1;
  height: 4.8rem;
  border: 1px solid #9194ac;
  border-radius: 100rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.search-icon {
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
}
.search-input-content {
  display: flex;
  // flex-direction: col;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}
.search-input {
  width: 100%;
  flex: 1;
  width: 100%;
  margin-right: 2rem;
}

</style>