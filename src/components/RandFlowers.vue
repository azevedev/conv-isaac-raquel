<template>
  <div>
    <img 
      v-for="(flower, index) in shuffledFlowers" 
      :key="index"
      :class="flower.class" 
      :src="flower.src" 
      :style="{
        position: 'fixed',
        bottom: `calc(${start}% - ${index * 50}px)`,
        left: left ? `${left}px` : 'unset',
        right: right ? `${right}px` : 'unset',
        width: '80px',
        'z-index': '-98',
        rotate: ((flip ? -1 : 1) * (25 + (Math.random() * 60))) + 'deg',
        opacity: '0',
        'animation-delay': '.3s'
      }"
    />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import FlowerBlue from '../assets/flower-blue.png';
import FlowerPurple from '../assets/flower-purple.png';
import FlowerRed from '../assets/flower-red.png';
import FlowerSun from '../assets/flower-sun.png';
import FlowerWhite from '../assets/flower-white.png';
import FlowerYellow from '../assets/flower-yellow.png';

export default {
  name: 'RandFlowers',
  props: {
    start: {
      type: Number,
      default: 30,
      validator: (value) => value >= 0 && value <= 100
    },
    left: {
      type: Number,
      default: null,
      validator: (value) => value >= 0 && value <= 100
    },
    right: {
      type: Number,
      default: null,
      validator: (value) => value >= 0 && value <= 100
    },
    flip: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const flowers = [
      { class: 'fade-move', src: FlowerBlue },
      { class: 'fade-move-scale-full', src: FlowerWhite},
      { class: 'fade-move-scale', src: FlowerSun },
      { class: 'fade-move-scale', src: FlowerYellow },
      { class: 'fade-move-scale', src: FlowerPurple },
      { class: 'fade-move-scale', src: FlowerRed },
    ];
    
    const shuffledFlowers = ref([]);

    onMounted(() => {
      // Shuffle the flowers array
      shuffledFlowers.value = [...flowers].sort(() => Math.random() - 0.5);
    });

    return {
      shuffledFlowers
    };
  }
}
</script>

<style lang="css" scoped>
 .home {
    padding: 20px;
    padding-top: 35px;
  }
.fade-p{
    animation: fade-p forwards 3s;
    
}

.fade-n{
    animation: fade-n forwards 3s;
}

.fade-move{
    animation: fade-move forwards 2s;
}

.fade-move-scale{
    animation: fade-move-scale forwards 2s;
}

.fade-move-scale-full{
    animation: fade-move-scale-full forwards 2s;
}

  

  .time-of-env{
    display: flex;
    width: 100%;
    justify-content: space-between;
    min-height: 150px;
    font-size: 30px;
  }

  .time{
    display: flex;
    font-size: 18px;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
  }
  .intersection{
    height: 155px;
    width: 20px;
    background: #BF9742;
    border-radius: 18px;
    margin-top: 20px;
  }
  .date{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
  }

  @keyframes fade-p {
    0%{
        transform: translateY(-100px) scaleX(-1);
        rotate: 60deg;
        opacity: 0;
    }
    100%{
      transform: translateY(0px)  scaleX(-1);
        rotate: 80deg;
        opacity: .8;
    }
  }

  @keyframes fade-n {
    0%{
        transform: translateY(-100px);
        rotate: -60deg;
        opacity: 0;
    }
    100%{
        transform: translateY(0px);
        rotate: -80deg;
        opacity: .8;
    }
  }

  @keyframes fade-move {
    0%{
        opacity: 0;
        transform: translateY(100px);
    }
    100%{
        opacity: .8;
        transform: translateY(0px);
    }
  }



  @keyframes fade-move-scale {
    0%{
        opacity: 0;
        transform: translateY(100px) scaleX(-1);
    }
    100%{
        opacity: .8;
        transform: translateY(0px) scaleX(-1);
    }
  }

  @keyframes fade-move-scale-full {
    0%{
        opacity: 0;
        transform: translateY(100px) scaleX(-1);
    }
    100%{
        opacity: 1;
        transform: translateY(0px) scaleX(-1);
    }
  }

  

</style>