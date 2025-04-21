<template>
  <div class="teacher">
    <div class="section-title">
      讲师
    </div>
    <div class="desc">
      <div class="name link">
        ACI69 | Trading ™
      </div>
      <div class="author">
        <div class="job-title">✔ Ingegnere Informatico Best Seller – Impara e Guadagna!</div>
        <div class="image-and-stats">
          <img src="https://img-c.udemycdn.com/user/200_H/44745822_3f5f_30.jpg" width="112" height="112"/>
          <div class="stats">
            <div><StarFilled/>4.5讲师评分</div>
            <div><MessageOutlined />3040条评论</div>
            <div><TeamOutlined/>14695名学生</div>
            <div><PlayCircleFilled />54门课程</div>
          </div>
        </div>
      </div>
      <div  class="description-content">
        <div :class="['description', {'hide': showMore}]">
          <p>✔ Ingegnere Informatico Best Seller – Impara e Guadagna!</p>
          <p></p>
          <p>★★★★★ Impara, Applica, Guadagna! ★★★★★</p>
          <p></p>
          <p>Mi occupo di formazione online da 18 anni</p>
          <p class="b">✔ senza fronzoli</p>
          <p class="b">✔ senza piedistalli del cavolo</p>
          <p class="b">✔ senza perdite di tempo</p>
          <p>Ciao, sono <b>Leo</b>, meglio conosciuto online come<b>ACI69 Cripto Trading - powered by VideoRipet1zioni™</b> </p>
          <p class="mt-36"><b>✔ 14.000 studenti</b> già formati</p>
          <p class="b">★★★★★ 3.000 recensioni verificate</p>
          <p class="b">▶ 4.350.000 visualizzazioni</p>
          <p class="b">▶ 32.000 iscritti tra Udemy e YouTube</p>
          <p class="mt-36">Ho creato oltre 500.000 ore di contenuti video (parliamo di 57 anni di formazione condensati).</p>
          <p class="b">✓ Perché dovresti fidarti di me?</p>
          <p>Perché <b>i miei studenti ottengono risultati veri.</b> Guadagnano, si migliorano e trasformano le competenze apprese nei miei corsi in opportunità concrete.</p>
          <p><b>✔ Se vuoi imparare davvero un mestiere</b>, lascia stare le informazioni sparse online e affidati a chi ha già fatto gli errori per te.</p>
          <p><b>⚡ Iscriviti ora ai miei corsi</b>: hai la <b>garanzia soddisfatto o rimborsato.</b></p>
          <p><b>✉ Supporto esclusivo</b> su Telegram & Facebook solo per studenti.</p>
          <p>⏳ Non perdere tempo prezioso: <b>clicca e inizia subito</b></p>
          <p>Ci vediamo dall'altra parte → ✔ACI69 ★★★★★</p>
        </div>
        <button class="show-more btn-ghost btn-mid" @click="toggle">
          {{ showMore ? '显示更多' : '显示更少' }}
          <UpOutlined :class="[{'toggle': showMore}]" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  StarFilled,
  TeamOutlined,
  MessageOutlined,
  PlayCircleFilled,
  UpOutlined
} from '@ant-design/icons-vue';
import { ref } from 'vue';
const showMore = ref(true);
const toggle = () => {
  showMore.value = !showMore.value
}
</script>
<style lang="less" scoped>
.name {
  font-size: 1.8rem;
  margin-bottom: 0.4rem;
}
.image-and-stats {
  display: flex;
  margin-top: 0.8rem;
  img {
    border-radius: 50%;
    border: 1px solid #d1d2e0;
    cursor: pointer;
    margin-right: 1.6rem;
  }
  .stats {
    div {
      padding: 0.4rem 0;
      .anticon {
        width: 16px;
        height: 16px;
        margin-right: 1.6rem;
        :deep(svg) {
          padding: 0.2rem;
        }
      }
    }
  }
}
.hide {
  max-height: 14.6rem;
  overflow: hidden;
  mask-image: linear-gradient(#fff, #fff, rgba(255,255,255,0));
}
.description {
  p {
    margin-top: 0.8rem;
  }
  .mt-36 {
    margin-top: 3.6rem;
  }
  .b {
    font-weight: 700;
  }
}
.show-more {
  color: #6d28d2;

  &:hover {
    background-color: #6d28d21F;
  }
  .anticon {
    width: 16px;
    height: 16px;
    margin-right: 1.6rem;
    :deep(svg) {
      padding: 0.2rem;
    }
  }
  .toggle {
    transform: rotate(180deg);
  }
}
</style>