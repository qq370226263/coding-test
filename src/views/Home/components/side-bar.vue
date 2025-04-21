<template>
  <div class="page-body-main">
    <div :class="['side-bar-wrapper', positionType]">
      <div class="video-content">
        <img
          src="https://img-c.udemycdn.com/course/480x270/3524274_d5ed_5.jpg"
          srcset="https://img-c.udemycdn.com/course/240x135/3524274_d5ed_5.jpg 240w, https://img-c.udemycdn.com/course/480x270/3524274_d5ed_5.jpg 480w, https://img-c.udemycdn.com/course/750x422/3524274_d5ed_5.jpg 750w"
          sizes="(min-width: 1080px) 340px,(min-width: 43.8125rem) 600px,100vw"
          width="340"
          height="185"
        />
        <div class="mask"></div>
        <div class="play-icon">
          <PlayCircleFilled />
        </div>
        <div class="text">预览本课程</div>
      </div>
      <div class="perchase-section"
        ref="perchaseSection"
      >
        <div class="cost">$99</div>
        <div class="add-to-cart btn-filled btn-large">添加至购物车</div>
        <div class="buy-it-now btn-outline btn-large">立刻购买</div>
        <div class="promise">30天退款保证</div>
        <div class="class-description">
          <div class="title">本课程包括:</div>
          <ul>
            <li>
              <YoutubeOutlined />
              <span>2小时 长的随选视频</span>
            </li>
            <li>
              <FileTextOutlined />
              <span>1篇文章</span>
            </li>
            <li>
              <FileDoneOutlined />
              <span>2个可下载资源</span>
            </li>
            <li>
              <MobileOutlined />
              <span>在移动设备和电视上观看</span>
            </li>
            <li>
              <EyeOutlined />
              <span>完整的永久访问权</span>
            </li>
            <li>
              <TrophyOutlined />
              <span>结业证书</span>
            </li>
          </ul>
        </div>
        <div class="btns-content">
          <div class="btn-ghost btn-mid">分享</div>
          <div class="btn-ghost btn-mid">将该课程作为礼物赠送</div>
          <div class="btn-ghost btn-mid">使用优惠券</div>
        </div>
        <div class="coupon-tip">
          <div class=""><b>KRLETSLEARNNOW</b>适用</div>
          <div>Udemy 优惠券</div>
        </div>
        <div class="coupon-use">
          <input placeholder="输入优惠券"/>
          <div class="btn-filled btn-mid use-btn">应用</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  PlayCircleFilled,
  YoutubeOutlined,
  FileTextOutlined,
  FileDoneOutlined,
  MobileOutlined,
  EyeOutlined,
  TrophyOutlined,
} from '@ant-design/icons-vue';
import { ref, onMounted, onUnmounted } from 'vue';

const perchaseSection = ref(null);
const positionType = ref('box-normal'); // 'normal', 'fixed', 'bottom'

const checkPosition = () => {
  if (!perchaseSection.value) return;
  
  const rect = perchaseSection.value.getBoundingClientRect();
  const parentRect = perchaseSection.value.parentElement.getBoundingClientRect();
  const footer = document.querySelector('.footer');
  const banner = document.querySelector('.banner'); 

  
  const buffer = 50;
  const currentScrollY = window.scrollY;
  const lastScrollY = ref(currentScrollY);

  if (banner) {
    const bannerRect = banner.getBoundingClientRect();
    if (bannerRect.bottom > 0) {
      positionType.value = 'box-normal';
      return;
    }
  }

  if (footer) {
    const footerRect = footer.getBoundingClientRect();
    if (footerRect.top <= window.innerHeight) {
      if (positionType.value !== 'box-bottom') {
        positionType.value = 'box-bottom';
      }
      return;
    }
  }

  if (Math.abs(rect.top) > buffer) {
    if (rect.top < -buffer && positionType.value !== 'box-fixed') {
      positionType.value = 'box-fixed';
    } else if (rect.top > buffer && positionType.value !== 'box-normal') {
      positionType.value = 'box-normal';
    }
  }

  lastScrollY.value = currentScrollY;
};

function throttle(fn, delay) {
  let timer = null;
  return function() {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  }
}
const throttledCheck = throttle(checkPosition, 100); 

onMounted(() => {
  window.addEventListener('scroll', throttledCheck);
  checkPosition();
});

onUnmounted(() => {
  window.removeEventListener('scroll', throttledCheck);
});

</script>
<style lang="less" scoped>
  .side-bar-wrapper {
    margin-left: 79.6rem;
    position: absolute;
    top: 3.2rem;
    width: 34rem;
    z-index: 1;
    border-bottom: 1px solid #d1d2e0;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(6, 17, 118, 0.08), 0 4px 12px rgba(6, 17, 118, 0.08);
    background-color: #fff;
    background-color: #fff;
    transition: transform 0.3s ease, top 0.3s ease;
    transform: translateZ(0);
    will-change: transform, position;
    &.box-normal {
      transform: translateY(0);
    }
    &.box-fixed {
      position: fixed;
      top: 1.6rem;
      z-index: 3;
      transform: translateY(0);
      .video-content{
        display: none;
      }
    }
    &.box-bottom {
      position: absolute;
      bottom: 1.6rem;
      top: auto;
      transform: translateY(0);
    }
  }
  .video-content {
    position: relative;
    color: #fff;
    .text {
      position: absolute;
      text-align: center;
      left: 0;
      right: 0;
      bottom: 1.6rem;
      font-weight: 700;
    }
  }
  .mask, .play-icon {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .mask {
    background: linear-gradient(180deg, rgba(22, 22, 29, 0) 0%, rgba(22, 22, 29, 0.9) 100%);
  }
  .play-icon {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    :deep(.anticon) {
      svg {
        width: 6.4rem;
        height: 6.4rem;
        color: #fff;
      }
    }
  }
  .perchase-section {
    padding: 2.4rem;
  }
  .cost {
    margin-bottom: 0.8rem;
    font-size: 2.4rem;
    font-weight: 700;
    padding: 0.4rem 0;
  }
  .add-to-cart {
    margin: 1.6rem 0 0.8rem 0;
  }
  .buy-it-now {
    margin: 0.8rem 0;
  }
  .promise {
    margin: 1.6rem 0 0.8rem 0;
    font-size: 1.2rem;
    text-align: center;
  }
  .class-description {
    padding-top: 1.6rem;
    .title {
      margin-bottom: 0.8rem;
      font-weight: 700;
    }
    ul li{
      font-size: 1.4rem;
      padding: 0.4rem 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.6rem;
    }
  }
  .btns-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
      font-size: 14px;
      text-decoration: underline;
      text-decoration-color: #af72fd;
      text-underline-offset: 0.3rem;
    }
  }
  .coupon-tip {
    border: 1px dashed #d1d2e0;
    display: flex;
    flex-direction: column;
    margin: 0.8rem 0;
    height: 4.8rem;
    padding-left: 0.8rem;
    color: #9194ac;
    font-size: 1.4rem;
    justify-content: center;
  }
  .coupon-use {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    input {
      padding: 0 1.6rem;
      border: 1px solid #9194ac;
      flex: 1;
    }
    .use-btn {
      min-width: 8rem;
      font-weight: 700;
    }
  }
</style>