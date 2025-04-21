<template>
  <div class="other-lessons">
    <div class="section-title-2">
      学生还购买了
    </div>
    <div :class="['lessons-content', {'hide': showMore}]">
      <div class="lesson" v-for="i in lessons" :key="i.title">
        <div class="image">
          <img :src="i.image"/>
        </div>
        <div class="desc-content">
          <div class="desc-title">
            {{ i.title }}
          </div>
          <div class="desc">
            <span :class="['hot', {'show': i.isHot}]">热门课程</span>
            <span :class="['best', {'show': i.isBest}]">最受好评</span>
            <span class="time">总共{{ i.totalHour }}小时·</span>
            <span class="updateDate">更新日期 {{ i.updateTime }}</span>
          </div>
        </div>
        <div class="score-content">
          <div class="score">
            <span>{{ i.score }}</span>
            <StarFilled/>
          </div>
          <div class="count">
            <TeamOutlined />
            <span>{{ i.count }}</span>
          </div>
          <div class="cost">
            RM{{ i.cost }}
          </div>
        </div>
        <div class="subscribe">
          <HeartOutlined />
        </div>
      </div>
    </div>
    <div
      :class="[
        'btn-mid',
        'btn-outline',
        'show-more',
      ]"
      @click="toggle"
    >{{ showMore ? '显示更多' : '显示更少' }}</div>
  </div>
</template>
<script setup>
import { lessons } from './config.js';
import {
  StarFilled,
  TeamOutlined,
  HeartOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';
const showMore = ref(true);
const toggle = () => {
  showMore.value = !showMore.value
}
</script>
<style lang="less" scoped>
.section-title-2 {
  font-size: 2.4rem;
  font-weight: 700;
}
.lessons-content {
  &.hide {
    max-height: 61rem;
    overflow: hidden;
  }
}
.lesson {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 1.6rem 0;
  border-bottom: 1px solid #d1d2e0;
}
.score-content {
  display: flex;
  flex: 3;
  align-items: flex-start;
  justify-content: space-between;
}
.cost {
  font-weight: 700;
}
.count {
  font-size: 1.4rem;
}
.score {
  font-size: 1.4rem;
  color: #8b4309;
  span {
    margin-right: 0.4rem;
  }
  .anticon svg {
    padding: 0.3rem;
    path{
      color: #c4710d;
    }
  }
}
.subscribe {
  margin-left: 1.6rem;
  border: 1px solid #6d28d2;
  color: #6d28d2;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    background-color: #6d28d21F;
  }
}
.desc-content {
  flex: 4;
  margin-left: 0.8rem;
}
.desc-title {
  font-weight: 700;
}
.desc {
  font-size: 1.4rem;
  margin-top: 0.8rem;
  .time {
    font-weight: 700;
    margin-left: 0.8rem;
    color: #206241;
  }
  .updateDate {

  }
  .hot {
    display: none;
    font-size: 1.2rem;
    color: #0d5261;
    border-radius: 0.4rem;
    background-color: #c2e9eb;
    padding: 0.4rem 0.8rem;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    &.show {
      display: inline-flex;
    }
  }
  .best {
    display: none;
    font-size: 1.2rem;
    color: #8b4309;
    border-radius: 0.4rem;
    background-color: #ffe1b2;
    padding: 0.4rem 0.8rem;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    &.show {
      display: inline-flex;
    }
  }
}
.image img{
  width: 64px;
  height: 64px;
}
.show-more {
  margin-top: 1.6rem;
  font-weight: 700;
}
</style>