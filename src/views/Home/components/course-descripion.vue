<template>
  <div class="section-title">
    描述
  </div>
  <div :class="['show-more-content', {'hide': showMore}]">
    <div>
      <b>
        Come funziona Coinbase per comprare Bitcoin ed altre criptovalute per guadagnarci?
      </b>
    </div>
    <p>
      Guarda in questa serie di Tutorial come funziona Coinbase per comprare, vendere e trasferire criptovalute.
    </p>
    <p>
      Guarda anche come guadagnare con Coinbase Criprovalute con Coinbase Earn: te lo spiego in maniera semplice.
    </p>
    <p>
      Coinbase è un ottimo modo facile per iniziare con le criptovalute quindi se ti va iscriviti a questo corso e segui le semplici lezioni.
    </p>
    <p>
      All'interno del corso troverai anche un invito per guadagnare e ti insegnerò anche come generare il tuo invito personale.
    </p>
    <p>
      Ecco gli argomenti che vedrai in questo corso su Coinbase:
    </p>
    <ul class="all-mt-36">
      <li>
        Introduzione: cosa è ed a cosa serve Coinbase?
      </li>
      <li>
        Come Ti Registri Gratis Passo Passo a Coinbase?
      </li>
      <li>
        Ecco I Documenti E Dati Che Ti Verranno Richiesti Al Momento Della Tua Registrazione: Come Devi Fare Passo Passo?
      </li>
      <li>
        Guarda La Panoramica delle Funzionalita Iniziali Di Coinbase...
      </li>
      <li>
        Cosa Vedrai Appena Entrato In Coinbase?
      </li>
      <li>
        Carta Di Credito Prepagata Visa Ecco Come Richiederla In Coinbase?
      </li>
      <li>
        PAC: Piano Di Accumulo E Portafoglio Crypto In Coinbase
      </li>
      <li>
        Nella Pratica Come Si Fa Con Gli  Acquisti Programmati E Piani Di Accumulo In Coinbase?
      </li>
      <li>
        Acquisto Cripto Con Conti Corrente, IBAN, Bonifici o Carte Prepagate: Come Si Fa?
      </li>
      <li>
        Funzionalità Della Scheda Prezzi In Coibase: Cosa Ci Puoi Fare?
      </li>
      <li>
        Come Si Trasferiscono Criptovalute Da Coinbase Ad Altri Wallet Esterni?
      </li>
      <li>
        Come Si Ricevono Cryptovalute da altri wallet esterni al tuo Wallet Coinbase?
      </li>
      <li>
        Cassaforte Coinbase: Cosa è E Cosa Ci Puoi Fare?
      </li>
    </ul>
    <p class="mt-36">
      Ci vediamo dall'altra parte, iscriviti per non commettere gli errori che il 90% fa sempre quando inizia con Coinbase.
    </p>
    <p class="mt-36">
      Ci vediamo dall'altra parte nella prima lezione!
    </p>
    <p class="mt-36 sub-title">
      此课程面向哪些人：
    </p>
    <ul>
      <li>
        Chiunque Voglia Imparare A Utilizzare Coinbase Senza Stress
      </li>
      <li>
        Chiunque Voglia Imparare Il Metodo Più Facile Per Comprare BITCOIN
      </li>
      <li>
        Chiunque Voglia Imparare Il Metodo Più Facile Per Comprare Altre Cirptovalute
      </li>
    </ul>
  </div>
  <button class="show-more-toggle btn-mid btn-ghost" @click="showMoreToggle">
    <span>
      {{ !showMore ? '显示更少' : '显示更多' }}
    </span>
    <DownOutlined :class="[{'show-more': !showMore}]"/>
  </button>
</template>
<script setup>
import { ref } from 'vue';
import {
  DownOutlined
} from '@ant-design/icons-vue';
const showMore = ref(true);
function showMoreToggle () {
  showMore.value = !showMore.value
}
</script>
<style lang="less" scoped>
.show-more-content {
  overflow: hidden;
  p {
    margin-top: 0.8rem;
    &.mt-36 {
      margin-top: 3.6rem;
    }
  }
  &.hide {
    max-height: 22.1rem;
    mask-image: linear-gradient(#fff, #fff, rgba(255,255,255, 0));
  }
  .all-mt-36 li {
    margin-top: 3.6rem;
    &:nth-child(2n) {
      font-weight: 700;
    }
  }
  ul li {
    padding: 0.4rem 0;
    position: relative;
    margin-left: 2.4rem;
    &::after {
      content: '';
      display: block;
      height: 0.6rem;
      width: 0.6rem;
      border-radius: 50%;
      background-color: #2a2b3f;
      position: absolute;
      left: -2.4rem;
      top: 1rem;
    }
  }
  .sub-title {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }
}
.show-more-toggle {
  color: #6d28d2;
  .show-more {
    transform: rotate(180deg);
  }
  :deep(.anticon) {
    padding: 0.8rem;
    svg {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
// .dot-list {
//   padding: 0.4rem 0;
//   position: relative;
//   margin-left: 2.4rem;
//   &::after {
//     content: '';
//     display: block;
//     height: 0.6rem;
//     width: 0.6rem;
//     border-radius: 50%;
//     background-color: #2a2b3f;
//     position: absolute;
//     left: -2.4rem;
//     top: 1rem;
//   }
// }
</style>