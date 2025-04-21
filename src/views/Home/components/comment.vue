<template>
<div class="comment-content mb-32">
  <div class="section-title">
    <StarFilled/>
    <span>
      4.7课程评分 · 50 评分
    </span>
  </div>
  <div class="section-body">
    <div class="comments" v-for="(i, index) in commenList" :key="i.author">
      <div class="comment-wrapper">
        <div class="title">
          <div class="avg">{{ getTagName(i.author) }}</div>
          <div class="desc">
            <div class="name">{{i.author}}</div>
            <div class="score">
              <div class="stars">
                <StarFilled v-for="j in i.score"/>
                <StarOutlined v-for="j in (5-i.score)"/>
              </div>
              <div class="time">{{ i.time }}</div>
            </div>
          </div>
          <div class="btn-ghost dot-btn">
            <EllipsisOutlined />
          </div>
        </div>
        <div class="comment">
          {{  i.comment  }}
        </div>
        <button v-if="index === commenList.length - 1" class="show-more link btn-ghost">显示更多</button>
        <div class="tip">
          <span>
            有帮助吗?
          </span>
          <div class="like btn-ghost">
            <LikeOutlined/>
          </div>
          <div class="dislike btn-ghost">
            <LikeOutlined/>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-outline btn-mid show-all">
      显示所有评论
    </div>
  </div>
</div>
</template>
<script setup>
import { commenList } from './config';
import {
  StarFilled,
  LikeOutlined,
  EllipsisOutlined,
  StarOutlined
} from '@ant-design/icons-vue';
const getTagName = (name) => {
  return name.split(' ').map(i => i[0]).join('');
}
</script>
<style lang="less" scoped>
  .section-title {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 0.8rem;
    .anticon {
      color: #c4710d;
      font-size: 1.6rem;
    }
  }
  .section-body {
    display: flex;
    flex-wrap: wrap;
    gap: 0 3.2rem;
  }
  .comments {
    border-top: 1px solid #d1d2e0;
    padding: 2.4rem 0 3.2rem;
    width: calc( 50% - 1.6rem )
  }
  .title {
    display: flex;
    margin-bottom: 1.6rem;
  }
  .avg {
    height: 4rem;
    width: 4rem;
    background-color: #16161d;
    border-radius: 50%;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.6rem;
  }
  .desc {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .name {
    color: #2a2b3f;
    font-weight: 700;
  }
  .score {
    display: flex;
    gap: 0.8rem;
    :deep(svg) {
      padding: 0.3rem;
      path{
        color: #c4710d;
      }
    }
    .time {
      font-size: 1.2rem;
    }
  }
  .dot-btn {
    .anticon {
      transform: rotate(90deg);
    }
    &:hover {
      color: #6d28d2;
      background-color: #6d28d21F;
    }
  }
  .comment {
    line-height: 1.4;
  }
  .tip {
    margin-top: 1.6rem;
    display: flex;
    font-size: 1.2rem;
    color: #595c73;
    gap: 0.8rem;
    align-items: center;
  }
  .dislike, .like {
    height: 3.4rem;
    width: 3.4rem;
    font-size: 1.6rem;
  }
  .dislike {
    .anticon {
      transform: rotate(180deg);
    }
  }
  .show-more {
    color: #2a2b3f;
    font-size: 1.4rem;
    height: 4rem;
    &:hover {
      background-color: #6d28d21F;
    }
  }
  .show-all {
    padding: 0 1.2rem;
    font-weight: 700;
  }
</style>