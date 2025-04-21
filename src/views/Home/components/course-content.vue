<template>
  <div class="course-content mb-32">
    <div class="section-title">课程内容</div>
    <div class="section-sub-header">
      <div class="course-desc">
        <span>{{ courseList.length }}个章节</span>
         · 
        <span>{{ lessonTotal }}个讲座</span>
         · 
        <span>总时长{{secondToHourMinute(seconedTotal)}}</span>
      </div>
      <div class="toggle btn-ghost btn-mid" @click="allToggle">
        {{ isToggled ? '展开所有章节' : '折叠所有章节' }}
      </div>
    </div>
    <div
      :class="[
        'chaptor-content',
        {'border-b-1': index === courseListReactive.length - 1}
      ]"
      v-for="(i, index) in courseListReactive" :key="i.title"
      @click="chaptorToggle(index)"
    >
      <div class="chaptor-title">
        <div class="title">
          <UpOutlined :class="[{'isToggled': i.isToggle}]" />
          <span>
            {{ i.title }}
          </span>
        </div>
        <div class="desc ml-24">
          <span>{{ i.list.length }}个讲座 · {{ secondToHourMinute(i.totalTime) }}</span>
        </div>
      </div>
      <ul class="lessons-content" v-show="!i.isToggle">
        <li v-for="(j, idx) in i.list" :key="j.content">
          <YoutubeOutlined/>
          <span class="lesson">
            <span :class="['lesson-title',{'link': [0, 1].includes(index) && idx === 0}]">{{ j.content }}</span>
            <span v-if="[0, 1].includes(index) && idx === 0" class="link ml-32">预览</span>
            <span class="title ml-32">{{ secondToMinuteSecond(j.time) }}</span>
          </span>
        </li>
      </ul>
    </div>
    <div :class="[
      'btn-mid',
      'btn-outline',
      'show-more',
      {'hide': courseList.length - courseListReactive.length <= 0}
    ]" @click="showMore">
      还有{{ courseList.length - courseListReactive.length }}个章节
    </div>
  </div>
</template>
<script setup>
import {
  YoutubeOutlined,
  UpOutlined,
} from '@ant-design/icons-vue';
import { courseList } from './config';
import { reactive, ref, onMounted, } from 'vue';
const seconedTotal = ref(0)
const lessonTotal = ref(0)
const isToggled = ref(true)
const courseListReactive = reactive([]);

function showMore () {
  courseListReactive.splice(0, courseListReactive.length, ...courseList);
}

function allToggle () {
  if (isToggled.value) {
    showMore()
  }
  courseListReactive.forEach(i => {
    i.isToggle = !isToggled.value
  })
  isToggled.value = !isToggled.value
}

function chaptorToggle (index) {
  courseListReactive[index].isToggle = !courseListReactive[index].isToggle
}
function secondToHourMinute(seconds) {
  if (typeof seconds !== 'number' || seconds < 0) {
    return '0分钟';
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours === 0) {
    return `${minutes}分钟`;
  }

  if (minutes === 0) {
    return `${hours}小时`;
  }

  return `${hours}小时${minutes}分钟`;
}

function secondToMinuteSecond(seconds) {
  if (typeof seconds !== 'number' || seconds < 0) {
    return '00:00';
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // 使用padStart确保两位数显示
  const minutesStr = String(minutes).padStart(2, '0');
  const secondsStr = String(remainingSeconds).padStart(2, '0');

  return `${minutesStr}:${secondsStr}`;
}
onMounted(() => {
  // 使用push方法添加数据
  const displayList = courseList.length > 10 ? courseList.slice(0, 10) : courseList;
  displayList.forEach(item => {
    courseListReactive.push({
      ...item,
      isToggle: true  // 添加toggle状态
    });
  });
  courseList.forEach(item => {
    seconedTotal.value += item.totalTime;
    lessonTotal.value += item.list.length;
  })
});

</script>
<style lang="less" scoped>
.section-sub-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toggle {
  color: #6d28d2;
  font-weight: 700;
  &:hover {
    background-color: #6d28d21F;
  }
}
.chaptor-content {
  border-width: 1px 1px 0 1px;
  border-style: solid;
  border-color: #d1d2e0;
  &.border-b-1 {
    border-width: 1px;
  }
}
.chaptor-title {
  background-color: #f6f7f9;
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  cursor: pointer;
  .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    font-weight: 700;
    font-size: 1.6rem;
    .isToggled {
      transform: rotate(180deg);
    }
    :deep(.anticon) {
      transition: all 0.15s linear;
      svg {
        height: 0.8rem;
        width: 0.8rem;
        // padding: 1.2rem;
      }
    }
  }
  .desc {
    font-size: 1.4rem;
    white-space: nowrap;
  }
}
.lessons-content {
  border-top: 1px solid #d1d2e0;
  padding: 1.6rem 2.4rem;
  font-size: 1.4rem;
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;
    padding: 0.8rem 0;
  }
}
.lesson {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.lesson-title {
  flex: 1;
}
.show-more {
  margin-top: 1.6rem;
  font-weight: 700;
  &.hide {
    display: none;
  }
}
</style>