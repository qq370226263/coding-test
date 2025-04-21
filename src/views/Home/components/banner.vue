<template>
  <div class="banner">
    <div class="page-body-main">
      <div class="breadcromb page-body-section">
        <a href="#">财务会计</a>
        <RightOutlined class="icon-right"/>
        <a href="#">加密货币和区块链</a>
        <RightOutlined class="icon-right"/>
        <a href="#">比特币</a>
      </div>
      <div class="main-title page-body-section mb-16">
        Coinbase Come Comprare Bitcoin e Guadagnare™?
      </div>
      <div class="main-description page-body-section mb-24">
        Come Acquistare e Guadagnare Facilmente Bitcoin Su Coinbase Corso Online Completo In Italiano
      </div>
      <div class="score-content page-body-section mb-16">
        <span class="score">4.7</span>
        <span class="star">
          <StarFilled/>
          <StarFilled/>
          <StarFilled/>
          <StarFilled/>
          <StarOutlined/>
        </span>
        <span class="scored-count"><a class="link-underline">(50个评分)</a></span>
        <span class="member-count">1,127个学生</span>
      </div>
      <div class="author-content page-body-section mb-16">
        <span>创建者</span>
        <span>
          <a class="link-underline">ACI69 | Trading ™</a>
        </span>
      </div>
      <div class="tips-content page-body-section">
        <div class="tip">
          <ExclamationCircleOutlined />
          <span>上次更新时间: 2025/3</span>
        </div>
        <div class="tip">
          <GlobalOutlined/>
          <span>意大利语</span>
        </div>
        <div class="tip">
          <ProfileOutlined />
          <span>意大利语[自动]</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  RightOutlined,
  StarOutlined,
  StarFilled,
  ExclamationCircleOutlined,
  GlobalOutlined,
  ProfileOutlined
} from '@ant-design/icons-vue';

</script>
<style lang="less" scoped>
.banner {
  background-color: #16161d;
  color: #fff;
}
.breadcromb {
  margin-bottom: 1.6rem;
  // padding: 0.4rem;
  a {
    color: #c0c4fc;
    font-weight: 700;
  }
}
.icon-right {
  font-size: 1.2rem;
  padding: 0.2rem;
  margin: 0.4rem;
}
.main-title {
  font-size: 3.2rem;
  font-weight: 700;
}
.main-description {
  font-size: 1.8rem;
}
.score-content, .author-content, .tips-content {
  font-size: 1.4rem;
  display: flex;
  gap: 0.4rem;
  align-items: center;
}
.score {
  color: #f69c08;
}
.star {
  display: inline-flex;
  gap: 0.4rem;
  :deep(.anticon) {
    &.anticon-star svg {
      width: 0.8rem;
      height: 0.8rem;
      color: #f69c08;
    }
  }
}
.link-underline {
  color: #c0c4fc;
  text-decoration: underline;
}
.tips-content {
  gap: 0.8rem;
}
.tip {
  :deep(.anticon) {
    svg {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
}

</style>