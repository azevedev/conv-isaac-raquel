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
    <div v-if="currentRouteName == 'Home'" style="min-height: 40px; text-align:center; z-index: 9999; font-size: 12px; width: 70%;">
      <p style="z-index: 9999; font-weight: 600; background-color: #fffdee; padding: 8px 4px !important; border-radius: 10px; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);">
        Por favor, confirme sua presença até dia 26 de Setembro de 2025.
      </p>
    </div>
    <div class="links" style="margin-bottom: 20px;" :style="{'margin-top': currentRouteName == 'Home' ? '0px' : '60px', 'margin-top': currentRouteName == 'List' ? '40px' : '60px'}">
      <router-link to="/" v-if="currentRouteName !== 'Home'">Início</router-link>
      <router-link to="/confirm" v-if="(currentRouteName !== 'Confirm') && (currentRouteName !== 'Confirmed') && (currentRouteName !== 'List')">Presença</router-link>
      <router-link to="/local" v-if="currentRouteName !== 'Local' && currentRouteName !== 'List'" style="min-width: 100px;">Local</router-link>
      <router-link to="/presents" v-if="currentRouteName !== 'Presents' && currentRouteName !== 'List'">Presentes</router-link>
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
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding-top: 0;
    z-index: 999;
    width: 100%;
  }

  .links{
    margin-top: auto;
    padding: 12px;
    display: flex;
    padding-top: 0px;
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
    box-shadow:  8px 8px 16px #b3b1a7,
                -8px -8px 16px #fffdee;
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
    height: 75dvh;
    min-height: 75dvh;
    max-height: 75dvh;
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
