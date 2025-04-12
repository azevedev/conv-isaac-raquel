<template>
    <link itemprop="thumbnailUrl" href="https://i.imgur.com/ic60fTr.jpg"> 
    <span itemprop="thumbnail" itemscope itemtype="http://schema.org/ImageObject"> 
      <link itemprop="url" href="https://i.imgur.com/ic60fTr.jpg"> 
    </span>
    <router-view class="view" v-slot=" { Component }">
      <transition name="fade" mode="out-in">
        <Suspense>
          <component :is="Component" />
        </Suspense>
      </transition>
    </router-view>
  <div id="nav">
    <div style="min-height: 40px; text-align:center; z-index: 9999; font-size: 10px; width: 100%;">
      <p v-if="currentRouteName == 'Home'" style="z-index: 9999;">Por favor, confirmar presença até dia 26 de Setembro de 2025.</p>
    </div>
    <div class="links" style="margin-bottom: 20px;">
      <router-link to="/" v-if="currentRouteName !== 'Home'">Início</router-link>
      <router-link to="/confirm" v-if="(currentRouteName !== 'Confirm') && (currentRouteName !== 'Confirmed')">Presença</router-link>
      <router-link to="/local" v-if="currentRouteName !== 'Local'" style="min-width: 100px;">Local</router-link>
      <router-link to="/presents" v-if="currentRouteName !== 'Presents'">Presentes</router-link>
    </div>
  </div>
  
</template>
<script>

export default {
    name: 'App',
    data() {
        return {
        }
    },
    computed: {
    currentRouteName() {
        return this.$route.name;
    },
    },
    beforeCreate(){
      // adding title for current view/page using vue-i18n

      // <meta property="og:image" itemprop="image" content="https://i.imgur.com/ic60fTr.jpg">
      // adding og:image
      // let ogImage = document.createElement('META')
      // ogImage.setAttribute('property','og:image')
      // ogImage.setAttribute('itemprop','image')
      // ogImage.setAttribute('content','https://i.imgur.com/ic60fTr.jpg')


      // document.querySelector(`head`).appendChild(ogImage)
    }
}
</script>


<style>

  .solidaritha {
    font-family: "Dancing Script", serif;
    font-size: 40px; 
    line-height: 60px;
    letter-spacing: 0px;
  }

  ffont {
    font-family: "Petit";
    font-family: "Crimson Text", serif;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #a97f53;
    font-weight: bold;
  }

  body {
    display: flex;
    overflow: hidden;
  }

  #app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding-top: 25px;
    z-index: 9999;
    width: 100%;
  }

  .links{
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #nav a {
    padding: 10px;
    text-decoration: none;
    font-weight: bold;
    color: #a97f53;
    font-weight: bold;
    font-size: 12px;
    margin: 0px 8px;
    width: 100px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 55px;
    background: #fffdee;
    box-shadow:  10px 10px 19px #b3b1a7,
                -10px -10px 19px #ffffff;
    text-align: center;
    transition: all .2s ease-in-out;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #nav a:hover{
    background: #a97f53;
    color: #fff;
    box-shadow:  10px 10px 19px #b3b1a7,
                -10px -10px 19px #ffffff;
  }

  .view{
    max-width: 500px;
    height: 75vh;
    min-height: 75vh;
    max-height: 75vh;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.3s ease-out;
  }


  body {
    background: #fffdee;
  }


  
</style>
