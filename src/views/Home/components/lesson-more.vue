<template>
  <div class="section-title">
    <span>ACI69 | Trading ™</span>的更多课程
  </div>
  <div class="lesson-list">
    <div class="lesson" v-for="i in lessonsMore" :key="i.title">
      <img :src="i.image" width="240" height="135"/>
      <div class="title">{{ i.title }}</div>
      <div class="author">{{ i.author }}</div>
      <div class="score-content">
        <span class="score">{{ i.score }}</span>
        <span class="star">
          <StarFilled v-for="j in Math.floor(i.score)"/>
          <StarOutlined v-for="j in (5 - Math.floor(i.score))" />
        </span>
        <span class="count">({{ i.scoredCount }})</span>
      </div>
      <div class="lesson-desc">
        总共{{ i.totalTime }} · {{ i.lessonsCount }}个讲座 · {{ i.level }}
      </div>
      <div class="cost">{{ i.cost }}</div>
    </div>
  </div>
</template>
<script setup>
import { lessonsMore } from './config';
import {
  StarFilled,
  StarOutlined
} from '@ant-design/icons-vue';
</script>
<style lang="less" scoped>
  .section-title {
    span {
      cursor: pointer;
      color: #6d28d2;
    }
  }
  .lesson-list {
    width: 100%;
    display: flex;
    gap: 1.6rem;
  }
  .lesson {
    flex: 1;
    img {
      width: 100%;
      object-fit: cover;
      margin-bottom: 0.8rem;
    }
  }
  .title {
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  .author {
    color: #595c73;
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
  }
  .score-content {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 0.4rem;
  }
  .score {
    color: #8b4309;
    font-size: 1.4rem;
  }
  .star {
    color: #c4710d;
    font-size: 1.2rem;
    display: inline-flex;
    gap: 0.4rem;
  }
  .count, .lesson-desc {
    color: #595c73;
    font-size: 1.2rem;
  }
  .lesson-desc {
    margin-bottom: 0.4rem;
  }
  .cost {
    color: #2a2b3f;
    font-weight: 700;
  }
</style>