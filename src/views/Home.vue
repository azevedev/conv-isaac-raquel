<template>
  <div class="home">
    <img class="fade-move " src="../assets/img2.png" style="position: fixed;
                bottom: -70px;
                left: -20px;
                width: 150px;
                z-index: -99;
                rotate: -40deg;
                opacity: 0;
                animation-delay: .3s;
                ;"/>
              <img class="fade-move-scale " src="../assets/img2.png" style="position: fixed;
              bottom: -100px;
              left: -90px;
              width: 150px;
              transform: scaleX(-1);
              z-index: -99;
              rotate: 25deg;
              opacity: 0;
              animation-delay: .45s;
              ;"/>



<!-- Left Side -->
<img class="fade-move " src="../assets/flower-red.png" style="position: fixed;
  bottom: -70px;
  left: -20px;
  width: 150px;
  z-index: -98;
  rotate: 45deg;
  opacity: 0;
  animation-delay: .3s;
  ;"/>
<img class="fade-move-scale " src="../assets/flower-yellow.png" style="position: fixed;
   bottom: -40px;
  left: -40px;
  width: 150px;
  z-index: -97;
  rotate: 20deg;
  opacity: 0;
  animation-delay: .45s;
  ;"/>

<img class="fade-move-scale " src="../assets/flower-purple.png" style="position: fixed;
  bottom: -100px;
  left: 0px;
  width: 150px;
  z-index: -96;
  rotate: 60deg;
  opacity: 0;
  animation-delay: .45s;
  ;"/>


<RandFlowers :start="5" :left="-45" />
<RandFlowers :start="20" :left="-45" />
<RandFlowers :start="35" :left="-45" />
<RandFlowers :start="50" :left="-45" />
<RandFlowers :start="65" :left="-45" />
<RandFlowers :start="80" :left="-45" />


<RandFlowers :start="5" :right="-45" flip />
<RandFlowers :start="20" :right="-45" flip />
<RandFlowers :start="35" :right="-45" flip />
<RandFlowers :start="50" :right="-45" flip />
<RandFlowers :start="65" :right="-45" flip />
<RandFlowers :start="80" :right="-45" flip />





<!-- Right Side -->

<img class="fade-move " src="../assets/flower-red.png" style="position: fixed;
  bottom: -70px;
  right: -20px;
  width: 150px;
  z-index: -99;
  rotate: -45deg;
  opacity: 0;
  animation-delay: .3s;
  ;"/>
<img class="fade-move-scale " src="../assets/flower-yellow.png" style="position: fixed;
  bottom: -40px;
  right: -40px;
  width: 150px;
  z-index: -98;
  rotate: -20deg;
  opacity: 0;
  animation-delay: .45s;
  ;"/>

<img class="fade-move-scale " src="../assets/flower-purple.png" style="position: fixed;
  bottom: -100px;
  right: 0;
  width: 150px;
  z-index: -97;
  rotate: -60deg;
  opacity: 0;
  animation-delay: .45s;
  ;"/>




    <img class="fade-move-scale" src="../assets/img2.png" style="position: fixed;
                bottom: -70px;
                right: -20px;
                width: 150px;
                z-index: -99;
                transform: scaleX(-1);
                rotate: 40deg;
                opacity: 0;
                animation-delay: .3s;
                ;"/>
              <img class="fade-move" src="../assets/img2.png" style="position: fixed;
              bottom: -100px;
              right: -90px;
              width: 150px;
              z-index: -99;
              rotate: -25deg;
              opacity: 0;
              animation-delay: .45s;
              ;"/>





    <img class="fade-p" src="../assets/flower.png" style="position: fixed;
                top: -70px;
                left: -55px;
                width: 200px;
                z-index: -99;
                rotate: 80deg;
                transform: scaleX(-1);
                opacity: 0;
                animation-delay: .2s;
                "/>
    <img class="fade-n" src="../assets/flower.png" style="position: fixed; 
                top: -70px;
                right: -55px;
                width: 200px;
                z-index: -99;
                rotate: -80deg;
                opacity: 0;
                animation-delay: .2s;
                ;"/>
    <img src="../assets/letters.png" style="width: 80px; height: 80px;
              margin-bottom: 30px; ">
    <p style="text-align: center;">
      <i>"O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta."</i>
    </p>
    <p style="text-align: right; padding-right: 24px;">
    - 1 Coríntios 13:4-7
    </p>
    <br>
    <h1 class="solidaritha">
      Jean <br>E<br> Raquel
    </h1>
    <div class="time-of-env">
      <div class="time">
        <p>Convidam para a celebração de seu casamento a ser realizada em</p>
        <p style="font-size: 22px; margin-top: 20px; text-transform: uppercase;">24 de Maio de 2025</p>
      </div>
      <!-- <div class="intersection"></div> -->
      <!-- <div class="date">
        <p>Sábado</p>
        <p style="height: 25px;"></p>
        <p>16:00</p>
        <p>Horas</p>
      </div> -->
    </div>
    <div style="position:fixed; top:0; left:0; width: 100%; height: 100%; background-color: transparent;">
      <ButterFly :fixed="true" :positionX="92"  :positionY="87" :side="'right'"  />
      <ButterFly :fixed="true" :positionX="90" :positionY="92" :side="'left'" />
      <ButterFly />
      <ButterFly />
      <ButterFly />
      <ButterFly />
      <ButterFly />
      <ButterFly />
      <ButterFly />
      <ButterFly />
      <ButterFly />
      <ButterFly />
      <ButterFly />
      <ButterFly />
      <ButterFly />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ButterFly from '@/components/ButterFly.vue';
import RandFlowers from '../components/RandFlowers.vue';

export default {
  name: 'Home',
  components: {
        ButterFly,
        RandFlowers
  },
}
</script>

<style scoped>
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

  

  .hidden {
    display: none;
  }
 
</style>
